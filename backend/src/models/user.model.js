const { db } = require("./db");

async function getAll() {
  const [rows] = await db.query("SELECT * FROM user");

  return rows;
}

async function getById(id) {
  const [rows] = await db.query("SELECT * FROM user WHERE id = ?", [id]);

  return rows[0];
}

async function create(user) {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    city,
    address,
    postalCode,
    photo,
    idCard,
  } = user;
  const [result] = await db.query(
    "INSERT INTO user (first_name, last_name, email, password, phone_number, city, address, postal_code, photo, id_card) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?, ?)",
    [
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      city,
      address,
      postalCode,
      photo,
      idCard,
    ]
  );

  return result.insertId;
}

async function updateById(id, user) {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    city,
    address,
    postalCode,
    photo,
    idCard,
  } = user;
  const [result] = await db.query(
    "UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ?, phone_number = ?, city = ?, address = ?, postal_code = ?, photo = ?, id_card = ? WHERE id = ?",
    [
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      city,
      address,
      postalCode,
      photo,
      idCard,
      id,
    ]
  );

  return result.affectedRows;
}

async function deleteById(id) {
  const [result] = await db.query("DELETE FROM user WHERE id = ?", [id]);

  return result.affectedRows;
}

module.exports = { getAll, getById, create, updateById, deleteById };
