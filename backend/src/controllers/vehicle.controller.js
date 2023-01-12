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
  const vehicle = req.body;
  const insertId = await vehicleModel.create(vehicle);
  res.json({ insertId });
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
