import express from 'express';
import { getAllUsers } from '../controllers/auth/usersController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/users', authMiddleware, roleMiddleware('cliente'), getAllUsers);

export default router;
