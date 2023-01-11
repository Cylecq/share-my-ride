const argon2 = require("argon2");

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

module.exports = { hashPassword };
