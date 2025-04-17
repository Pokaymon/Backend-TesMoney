import getConnection from '../db/database.js';

const Transaction = {
  async create({ type, description, amount, pocket_id }) {
    const conn = await getConnection();
    const [result] = await conn.query(
      'INSERT INTO transactions (type, description, amount, pocket_id) VALUES (?, ?, ?, ?)',
      [type, description, amount, pocket_id]
    );

    // Actualizar el balance en la tabla pockets según el tipo de transacción
    const balanceQuery = type === 'income'
      ? 'UPDATE pockets SET balance = balance + ? WHERE id = ?'
      : 'UPDATE pockets SET balance = balance - ? WHERE id = ?';

    await conn.query(balanceQuery, [amount, pocket_id]);

    return result.insertId;
  },

  async findByPocketId(pocket_id) {
    const conn = await getConnection();
    const [rows] = await conn.query(
      'SELECT * FROM transactions WHERE pocket_id = ? ORDER BY created_at DESC',
      [pocket_id]
    );
    return rows;
  },

  async deleteById(id) {
    const conn = await getConnection();

    // Obtener la transacción para conocer el tipo y el monto
    const [rows] = await conn.query('SELECT * FROM transactions WHERE id = ?', [id]);
    const transaction = rows[0];
    if (!transaction) return false;

    const { amount, type, pocket_id } = transaction;

    // Eliminar la transacción
    await conn.query('DELETE FROM transactions WHERE id = ?', [id]);

    // Revertir el balance en la billetera
    const balanceQuery = type === 'income'
      ? 'UPDATE pockets SET balance = balance - ? WHERE id = ?'
      : 'UPDATE pockets SET balance = balance + ? WHERE id = ?';

    await conn.query(balanceQuery, [amount, pocket_id]);

    return true;
  }
};

export default Transaction;

