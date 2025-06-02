import express from 'express';
import { getSyncro, updateSyncroState } from '../controllers/syncroController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getSyncro);
router.patch('/', authMiddleware, updateSyncroState);

export default router;
