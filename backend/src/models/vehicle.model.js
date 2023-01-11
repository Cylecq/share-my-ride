const { db } = require("./db");

async function getAll(type, ownerId) {
  let query = "SELECT * FROM vehicle";
  const values = [];

  if (type) {
    query += " WHERE type = ?";
    values.push(type);
  }

  if (ownerId) {
    query += " WHERE owner_id = ?";
    values.push(ownerId);
  }

  const [rows] = await db.query(query, values);

  return rows;
}

async function getOne(id) {
  const [rows] = await db.query("SELECT * FROM vehicle WHERE id = ?", [id]);

  return rows[0];
}

async function create(vehicle) {
  const { ownerId, type, name, description, price, photo } = vehicle;
  const [result] = await db.query(
    "INSERT INTO vehicle (owner_id, type, name, description, price, photo) VALUES (?, ?, ?, ?, ?, ?) ",
    [ownerId, type, name, description, price, photo]
  );

  return result.insertId;
}

async function updateById(id, vehicle) {
  const { ownerId, type, name, description, price, photo } = vehicle;
  const [result] = await db.query(
    "UPDATE vehicle SET owner_id = ?, type = ?, name = ?, description = ?, price = ?, photo = ? WHERE id = ?",
    [ownerId, type, name, description, price, photo, id]
  );

  return result.affectedRows;
}

async function deleteById(id) {
  const [res2] = await db.query("DELETE FROM post WHERE vehicle_id = ?", [id]);
  const [res3] = await db.query(
    "DELETE FROM rented_vehicle WHERE vehicle_id = ?",
    [id]
  );
  const [res1] = await db.query("DELETE FROM vehicle WHERE id = ?", [id]);

  const nbDeletedElement = [
    res1.affectedRows,
    res2.affectedRows,
    res3.affectedRows,
  ].reduce((acc, cur) => acc + cur);

  return nbDeletedElement;
}

module.exports = { getAll, getOne, create, updateById, deleteById };
