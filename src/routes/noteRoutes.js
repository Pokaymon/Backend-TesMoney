import express from 'express';
import {
  getUserNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
} from '../controllers/quickNoteController.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getUserNotes);      // todas las notas del usuario
router.get('/:id', verifyToken, getNoteById);    // nota específica
router.post('/', verifyToken, createNote);       // crear nota
router.put('/:id', verifyToken, updateNote);     // actualizar nota
router.delete('/:id', verifyToken, deleteNote);

export default router;

