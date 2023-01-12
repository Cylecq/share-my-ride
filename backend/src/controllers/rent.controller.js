const rentModel = require("../models/rent.model");

async function list(req, res) {
  const rents = await rentModel.getAll();
  res.json(rents);
}

async function get(req, res) {
  const rent = await rentModel.getOne(req.params.id);
  res.json(rent);
}

async function create(req, res) {
  try {
    if (!req.body) {
      res.status(400).json({
        message: "Content can not be empty!",
      });
      return;
    }

    const insertId = await rentModel.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

async function deleteById(req, res) {
  try {
    if (!req.params.id) {
      res.status(400).json({
        message: "Content can not be empty!",
      });
      return;
    }

    const deletedRows = await rentModel.deleteById(req.params.id);
    res.status(200).json({ deletedRows });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

module.exports = { list, get, create, deleteById };
