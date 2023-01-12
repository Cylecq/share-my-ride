const { db } = require("./db");

async function getAll(userId) {
  const [rows] = await db.query("SELECT * FROM rent WHERE user_id = ?", [
    userId,
  ]);
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
