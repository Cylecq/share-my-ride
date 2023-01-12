const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/user.model");

async function list(req, res) {
  const users = await userModel.getAll();
  res.json(users);
}

async function get(req, res) {
  const user = await userModel.getById(req.params.id);
  res.json(user);
}

async function getByEmailWithPasswordAndPassToNext(req, res, next) {
  try {
    if (!req.body?.email) {
      res.status(400).json({
        message: "Email can not be empty!",
      });
      return;
    }
    if (!req.body?.password) {
      res.status(400).json({
        message: "Password can not be empty!",
      });
      return;
    }
    const { email } = req.body;
    const user = await userModel.getByEmailWithPassword(email);

    if (user !== null) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function create(req, res) {
  const { originalname, filename } = req.file;
  const newPhotoName = `${uuidv4()}-${originalname}`;

  fs.rename(
    `uploads/profilePicture/${filename}`,
    `uploads/profilePicture/${newPhotoName}`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  try {
    if (!req.body) {
      res.status(400).json({
        message: "Content can not be empty!",
      });
      return;
    }

    const insertId = await userModel.create(req.body, newPhotoName);
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

async function update(req, res) {
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!",
    });
    return;
  }

  const affectedRows = await userModel.updateById(req.params.id, req.body);
  res.status(200).json({ affectedRows });
}

async function remove(req, res) {
  if (!req.params.id) {
    res.status(400).json({
      message: "Content can not be empty!",
    });
    return;
  }

  const deletedElements = await userModel.deleteById(req.params.id);
  res.status(200).json({ deletedElements });
}

module.exports = {
  list,
  get,
  getByEmailWithPasswordAndPassToNext,
  create,
  update,
  remove,
};
