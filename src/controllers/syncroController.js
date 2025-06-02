import Syncro from '../models/Syncro.js';

// GET /syncro - Obtener estado de sincronización
export const getSyncro = async (req, res) => {
  try {
    const userId = req.user.id;

    const syncro = await Syncro.findOne({ userId });

    if (!syncro) {
      return res.status(404).json({ message: 'Sincronización no encontrada' });
    }

    res.json(syncro);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error });
  }
};

// PATCH /syncro - Cambiar estado de sincronización
export const updateSyncroState = async (req, res) => {
  try {
    const userId = req.user.id;
    const { state } = req.body;

    if (typeof state !== 'boolean') {
      return res.status(400).json({ message: 'El campo "state" debe ser booleano' });
    }

    const syncro = await Syncro.findOneAndUpdate(
      { userId },
      { state },
      { new: true }
    );

    if (!syncro) {
      return res.status(404).json({ message: 'Sincronización no encontrada' });
    }

    res.json(syncro);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error });
  }
};

