const { db } = require("./db");

async function getAll(type, OwnerId) {
  let query = "SELECT * FROM vehicle";
  const values = [];

  if (type) {
    query += " WHERE is_available = 1 AND type = ?";
    values.push(type);
  }

  if (OwnerId) {
    query += " WHERE owner_id = ?";
    values.push(OwnerId);
  }

  const [rows] = await db.query(query, values);

  return rows;
}

async function getOne(id) {
  const [rows] = await db.query("SELECT * FROM vehicle WHERE id = ?", [id]);

  return rows[0];
}

async function create(vehicle, photo) {
  const { ownerId, type, name, description, price } = vehicle;
  const [result] = await db.query(
    "INSERT INTO vehicle (owner_id, type, name, description, price, photo) VALUES (?, ?, ?, ?, ?, ?) ",
    [ownerId, type, name, description, price, photo]
  );

  return result.insertId;
}

async function updateById(id, vehicle) {
  const query = "UPDATE vehicle SET";
  const modifications = [];

  if (vehicle.type) {
    modifications.push({
      column: "type",
      value: vehicle.type,
      operator: "=",
    });
  }

  if (vehicle.name) {
    modifications.push({
      column: "name",
      value: vehicle.name,
      operator: "=",
    });
  }

  if (vehicle.description) {
    modifications.push({
      column: "description",
      value: vehicle.description,
      operator: "=",
    });
  }

  if (vehicle.price) {
    modifications.push({
      column: "price",
      value: vehicle.price,
      operator: "=",
    });
  }

  if (vehicle.photo) {
    modifications.push({
      column: "photo",
      value: vehicle.photo,
      operator: "=",
    });
  }

  const [result] = await db.query(
    modifications.reduce(
      (acc, { column, operator }, index) =>
        `${acc}${index === 0 ? " " : ", "}${column} ${operator} ?`,
      query
    ),
    modifications.map(({ value }) => value).concat(id)
  );
  return result.info;
}

async function updateAvailability(id, isAvailable) {
  const [result] = await db.query(
    "UPDATE vehicle SET is_available = ? WHERE id = ?",
    [isAvailable, id]
  );

  return result.affectedRows;
}

async function deleteById(id) {
  const [res2] = await db.query(
    "DELETE FROM rented_vehicle WHERE vehicle_id = ?",
    [id]
  );
  const [res1] = await db.query("DELETE FROM vehicle WHERE id = ?", [id]);

  const nbDeletedElement = [res1.affectedRows, res2.affectedRows].reduce(
    (acc, cur) => acc + cur
  );

  return nbDeletedElement;
}

module.exports = {
  getAll,
  getOne,
  create,
  updateById,
  updateAvailability,
  deleteById,
};
