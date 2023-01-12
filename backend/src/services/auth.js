const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  if (!req.body.password) {
    res.status(400).json({ message: "Password is required" });
    next();
  }

  argon2
    .hash(req.body.password, hashingOptions)
    .then((hash) => {
      req.body.password = hash;
      next();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const verifyPassword = async (req, res) => {
  const { hashed_password: hashedPassword } = req.user;
  const { password } = req.body;

  try {
    if (await argon2.verify(hashedPassword, password)) {
      const payload = { sub: req.user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      delete req.user.hashed_password;
      res.status(200).json({ user: req.user, token });
    } else {
      res.status(401).json({ message: "Login failed" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
      throw new Error("No authorization header");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Invalid authorization type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { hashPassword, verifyPassword, verifyToken };
