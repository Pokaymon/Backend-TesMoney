import Pocket from '../../models/Pockets.js';

export const createPocket = async (req, res) => {
  const { name, description, balance } = req.body;
  const user_id = req.user.id; // Viene del token JWT decodificado

  if (!name) {
    return res.status(400).json({ message: 'El nombre de la cartera es requerido' });
  }

  try {
    const pocketId = await Pocket.create({ user_id, name, description, balance });
    return res.status(201).json({
      message: 'Cartera creada exitosamente',
      pocketId
    });
  } catch (error) {
    console.error('Error al crear la cartera:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getPockets = async (req, res) => {
  const user_id = req.user.id;

  try {
    const pockets = await Pocket.findByUserId(user_id);
    return res.status(200).json(pockets);
  } catch (error) {
    console.error('Error al obtener las carteras:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getPocketById = async (req, res) => {
  const { id } = req.params;

  try {
    const pocket = await Pocket.findById(id);
    if (!pocket) {
      return res.status(404).json({ message: 'Cartera no encontrada' });
    }

    if (pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para ver esta cartera' });
    }

    return res.status(200).json(pocket);
  } catch (error) {
    console.error('Error al obtener la cartera:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const updatePocket = async (req, res) => {
  const { id } = req.params;
  const { name, description, balance } = req.body;

  try {
    const pocket = await Pocket.findById(id);
    if (!pocket) {
      return res.status(404).json({ message: 'Cartera no encontrada' });
    }

    if (pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para actualizar esta cartera' });
    }

    await Pocket.update(id, { name, description, balance });
    return res.status(200).json({ message: 'Cartera actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar la cartera:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const deletePocket = async (req, res) => {
  const { id } = req.params;

  try {
    const pocket = await Pocket.findById(id);
    if (!pocket) {
      return res.status(404).json({ message: 'Cartera no encontrada' });
    }

    if (pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para eliminar esta cartera' });
    }

    await Pocket.delete(id);
    return res.status(200).json({ message: 'Cartera eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la cartera:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
