import express from 'express';
import { getAllUsers } from '../controllers/auth/usersController.js';
import { adminGetPocketsByUserId } from '../controllers/pockets/pocketController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.use(roleMiddleware('cliente'));

router.get('/users', getAllUsers);
router.get('/pockets/:userId', adminGetPocketsByUserId);


export default router;
