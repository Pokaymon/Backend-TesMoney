import express from 'express';
import {
  createPocket,
  getPockets,
  getPocketById,
  updatePocket,
  deletePocket
} from '../controllers/pockets/pocketController.js';

import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Proteger todas estas rutas
router.use(authMiddleware);

router.post('/', createPocket);
router.get('/', getPockets);
router.get('/:id', getPocketById);
router.put('/:id', updatePocket);
router.delete('/:id', deletePocket);

export default router;

