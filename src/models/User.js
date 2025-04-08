import getConnection from '../db/database.js';

const User = {
  async findByEmail(email) {
    const conn = await getConnection();
    const result = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
    return result[0]; // Devuelve el primer usuario
  },

  async create({ username, email, password }) {
    const conn = await getConnection();
    await conn.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  },

  async existsByEmail(email) {
    const conn = await getConnection();
    const result = await conn.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', [email]);
    return result[0].count > 0;
  },

  async existsByUsername(username) {
    const conn = await getConnection();
    const result = await conn.query(
      'SELECT COUNT(*) AS count FROM users WHERE username = ?', [username]);
    return result[0].count > 0;
  }

};

export default User;
