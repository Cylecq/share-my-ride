const { db } = require("./db");

async function getAll(userId) {
  const [rows] = await db.query(
    "SELECT rent.id, rent.user_id, rent.start_date, rent.end_date, vehicle.type, vehicle.name AS vehicle_name, vehicle.description, vehicle.price, vehicle.photo AS vehicle_photo, vehicle.is_available, user.first_name, user.last_name, user.email, user.phone_number, user.city, user.address, user.postal_code FROM rent LEFT JOIN vehicle ON vehicle.id = rent.vehicle_id LEFT JOIN user on user.id = vehicle.owner_id WHERE user_id = ?",
    [userId]
  );
  return rows;
}

async function getOne(id) {
  const [rows] = await db.query("SELECT * FROM rent WHERE id = ?", [id]);
  return rows[0];
}

async function create(rent) {
  const { vehicleId, userId, startDate, endDate } = rent;
  const [result] = await db.query(
    "INSERT INTO rent (vehicle_id, user_id, start_date, end_date) VALUES (?, ?, ?, ?)",
    [vehicleId, userId, startDate, endDate]
  );

  return result.insertId;
}

async function deleteById(id) {
  const [result] = await db.query("DELETE FROM rent WHERE id = ?", [id]);
  return result.affectedRows;
}

module.exports = { getAll, getOne, create, deleteById };
