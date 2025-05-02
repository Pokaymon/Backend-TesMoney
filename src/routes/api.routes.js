import express from 'express';
import { testConnection } from '../controllers/testController.js';
import { registerUser } from '../controllers/auth/registerController.js';
import { getAllUsers } from '../controllers/auth/usersController.js';
import { verifyEmail } from '../controllers/auth/verifyEmailController.js';
import { loginUser } from '../controllers/auth/loginController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/test', testConnection);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/users', authMiddleware, roleMiddleware('admin'), getAllUsers);
router.get('/auth/verify-email', verifyEmail);

export default router;
