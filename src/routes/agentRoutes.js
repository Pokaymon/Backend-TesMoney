import express from 'express';
import { getAgentUsers } from '../controllers/tokenController.js';
import verifyAgentSecret from '../middlewares/verifyAgentSecret.js';

const router = express.Router();

router.get('/users', verifyAgentSecret, getAgentUsers);

export default router;

