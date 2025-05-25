import QuickNote from '../models/QuickNote.js';

// Obtener todas las notas del usuario
export const getUserNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await QuickNote.find({ userId });
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error al obtener notas:', error);
    res.status(500).json({ message: 'Error al obtener notas rápidas' });
  }
};

// Obtener una nota por ID
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const note = await QuickNote.findOne({ _id: id, userId });

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada o acceso denegado' });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error('Error al obtener nota:', error);
    res.status(500).json({ message: 'Error al obtener nota' });
  }
};

// Crear una nota
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const newNote = new QuickNote({ userId, title, content });
    await newNote.save();
    res.status(201).json({ message: 'Nota creada', note: newNote });
  } catch (error) {
    console.error('Error al crear nota:', error);
    res.status(500).json({ message: 'Error al crear nota' });
  }
};

// Actualizar una nota
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { title, content } = req.body;

    const note = await QuickNote.findOneAndUpdate(
      { _id: id, userId },
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada o acceso denegado' });
    }

    res.status(200).json({ message: 'Nota actualizada', note });
  } catch (error) {
    console.error('Error al actualizar nota:', error);
    res.status(500).json({ message: 'Error al actualizar nota' });
  }
};

// DELETE
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const note = await QuickNote.findOneAndDelete({ _id: id, userId });

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada o acceso denegado' });
    }

    res.status(200).json({ message: 'Nota eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar nota:', error);
    res.status(500).json({ message: 'Error al eliminar nota' });
  }
};
