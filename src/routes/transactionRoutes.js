import express from 'express';
import { createTransaction, getTransactionsByPocket, deleteTransaction } from '../controllers/pockets/transactionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createTransaction);
router.get('/:pocketId', authMiddleware, getTransactionsByPocket);
router.delete('/:id', authMiddleware, deleteTransaction);

export default router;
