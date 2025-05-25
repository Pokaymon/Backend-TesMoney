import getConnection from '../db/database.js';

const User = {
  async findByEmail(email) {
    const conn = await getConnection();
    const [result] = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
    return result[0];
  },

  async create({ username, email, password, verification_token = null, rol = 'cliente', plan = 'basico' }) {
    const conn = await getConnection();
    await conn.query(
      'INSERT INTO users (username, email, password, verification_token, rol) VALUES (?, ?, ?, ?, ?, ?)',
      [username, email, password, verification_token, rol, plan]
    );
  },

  async existsByEmail(email) {
    const conn = await getConnection();
    const [result] = await conn.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', [email]);
    return result[0].count > 0;
  },

  async existsByUsername(username) {
    const conn = await getConnection();
    const [result] = await conn.query(
      'SELECT COUNT(*) AS count FROM users WHERE username = ?', [username]);
    return result[0].count > 0;
  },

  async getAll() {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT id, username, email, rol, plan FROM users');
    return rows;
  },

  async findByVerificationToken(token){
    const conn = await getConnection();
    const [result] = await conn.query(
      'SELECT * FROM users WHERE verification_token = ?',
      [token]
    );
    return result[0];
  },

  async verifyEmail(userId){
    const conn = await getConnection();
    await conn.query(
      'UPDATE users SET email_verified = true, verification_token = NULL WHERE id = ?',
      [userId]
    );
  }
};

export default User;
