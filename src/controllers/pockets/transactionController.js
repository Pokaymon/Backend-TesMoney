import Transaction from '../../models/Transaction.js';
import Pocket from '../../models/Pockets.js';

export const createTransaction = async (req, res) => {
  const { type, description, amount, pocket_id } = req.body;

  if (!type || !amount || !pocket_id) {
    return res.status(400).json({ message: 'Faltan datos obligatorios (tipo, monto o cartera)' });
  }

  if (!['income', 'expense'].includes(type)) {
    return res.status(400).json({ message: 'El tipo de transacción debe ser "income" o "expense"' });
  }

  try {
    const pocket = await Pocket.findById(pocket_id);
    if (!pocket) {
      return res.status(404).json({ message: 'Cartera no encontrada' });
    }

    if (pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para agregar transacciones a esta cartera' });
    }

    const transactionId = await Transaction.create({
      type,
      description,
      amount,
      pocket_id
    });

    return res.status(201).json({
      message: 'Transacción creada exitosamente',
      transactionId
    });
  } catch (error) {
    console.error('Error al crear la transacción:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getTransactionsByPocket = async (req, res) => {
  const { pocketId } = req.params;

  try {
    const pocket = await Pocket.findById(pocketId);
    if (!pocket) {
      return res.status(404).json({ message: 'Cartera no encontrada' });
    }

    if (pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para ver las transacciones de esta cartera' });
    }

    const transactions = await Transaction.findByPocketId(pocketId);
    return res.status(200).json(transactions);
  } catch (error) {
    console.error('Error al obtener las transacciones:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    // Primero buscar la transacción para validar si pertenece al usuario
    const pocketCheck = await Transaction.findByPocketId(req.body.pocket_id);
    const transactionToDelete = pocketCheck.find(tx => tx.id === Number(id));

    if (!transactionToDelete) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }

    const pocket = await Pocket.findById(transactionToDelete.pocket_id);
    if (!pocket || pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para eliminar esta transacción' });
    }

    const deleted = await Transaction.deleteById(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }

    return res.status(200).json({ message: 'Transacción eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la transacción:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

