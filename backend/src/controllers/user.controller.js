const userModel = require("../models/user.model");

async function list(req, res) {
  const users = await userModel.getAll();
  res.json(users);
}

async function get(req, res) {
  const user = await userModel.getById(req.params.id);
  res.json(user);
}

async function create(req, res) {
  try {
    if (!req.body) {
      res.status(400).json({
        message: "Content can not be empty!",
      });
      return;
    }

    const insertId = await userModel.create(req.body);
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

  const affectedRows = await userModel.deleteById(req.params.id);
  res.status(200).json({ affectedRows });
}

module.exports = { list, get, create, update, remove };
