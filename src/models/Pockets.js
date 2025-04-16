import getConnection from '../db/database.js';

const Pocket = {
  async create({ user_id, name, description = null, balance = 0 }) {
    const conn = await getConnection();
    const [result] = await conn.query(
      'INSERT INTO pockets (user_id, name, description, balance) VALUES (?, ?, ?, ?)',
      [user_id, name, description, balance]
    );
    return result.insertId; // retorna el ID de la nueva cartera
  },

  async findByUserId(user_id) {
    const conn = await getConnection();
    const [rows] = await conn.query(
      'SELECT * FROM pockets WHERE user_id = ?',
      [user_id]
    );
    return rows;
  },

  async findById(pocketId) {
    const conn = await getConnection();
    const [rows] = await conn.query(
      'SELECT * FROM pockets WHERE id = ?',
      [pocketId]
    );
    return rows[0];
  },

  async update(pocketId, { name, description, balance }) {
    const conn = await getConnection();
    await conn.query(
      'UPDATE pockets SET name = ?, description = ?, balance = ? WHERE id = ?',
      [name, description, balance, pocketId]
    );
  },

  async delete(pocketId) {
    const conn = await getConnection();
    await conn.query('DELETE FROM pockets WHERE id = ?', [pocketId]);
  }
};

export default Pocket;
