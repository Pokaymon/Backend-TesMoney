import express from 'express';
import { testConnection } from '../controllers/testController.js';
import { registerUser } from '../controllers/auth/registerController.js';
import { verifyEmail } from '../controllers/auth/verifyEmailController.js';
import { loginUser } from '../controllers/auth/loginController.js';
import { updateUser, getUserById } from '../controllers/auth/usersController.js';

const router = express.Router();

router.get('/test', testConnection);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/auth/verify-email', verifyEmail);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUserById);

export default router;
