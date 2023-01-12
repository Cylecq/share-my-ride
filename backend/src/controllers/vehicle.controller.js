const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const vehicleModel = require("../models/vehicle.model");

async function list(req, res) {
  const { type } = req.query;
  const { ownerId } = req.query;
  const vehicles = await vehicleModel.getAll(type, ownerId);
  res.json(vehicles);
}

async function getOne(req, res) {
  const { id } = req.params;
  const vehicle = await vehicleModel.getOne(id);
  res.json(vehicle);
}

async function create(req, res) {
  const { originalname, filename } = req.file;
  const newPhotoName = `${uuidv4()}-${originalname}`;

  fs.rename(
    `uploads/vehiclePicture/${filename}`,
    `uploads/vehiclePicture/${newPhotoName}`,
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

    const insertId = await vehicleModel.create(req.body, newPhotoName);
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const vehicle = req.body;
  const affectedRows = await vehicleModel.updateById(id, vehicle);
  res.json({ affectedRows });
}

async function updateAvailability(req, res) {
  const { id } = req.params;
  const { isAvailable } = req.body;
  const affectedRows = await vehicleModel.updateAvailability(id, isAvailable);
  res.json({ affectedRows });
}

async function remove(req, res) {
  const { id } = req.params;
  const deletedElements = await vehicleModel.deleteById(id);
  res.json({ deletedElements });
}

module.exports = { list, getOne, create, update, updateAvailability, remove };
