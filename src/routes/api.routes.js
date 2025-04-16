import express from 'express';
import { testConnection } from '../controllers/testController.js';
import { registerUser } from '../controllers/auth/registerController.js';
import { getAllUsers } from '../controllers/auth/usersController.js';
import { verifyEmail } from '../controllers/auth/verifyEmailController.js';
import { loginUser } from '../controllers/auth/loginController.js';

const router = express.Router();

router.get('/test', testConnection);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.get('/auth/verify-email', verifyEmail);

export default router;
