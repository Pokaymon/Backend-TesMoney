import Pocket from '../../models/Pockets.js';
import User from '../../models/User.js';

// Uso Administrativo
export const adminGetPocketsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const pockets = await Pocket.findByUserId(userId);
    return res.status(200).json(pockets);
  } catch (error) {
    console.error('Error al obtener carteras del usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const createPocket = async (req, res) => {
  const { name, description, balance } = req.body;
  const user_id = req.user.id; // Viene del token JWT decodificado

  if (!name) {
    return res.status(400).json({ message: 'El nombre de la cartera es requerido' });
  }

  try {
    // Obtener usuario para conocer su plan
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si ya existe cartera con ese nombre para este usuario
    const existingPocket = await Pocket.findByNameAndUserId(name, user_id);
    if (existingPocket) {
      return res.status(409).json({ message: 'Ya existe una cartera con ese nombre' });
    }

    // Contar cuántas carteras tiene el usuario actualmente
    const userPockets = await Pocket.findByUserId(user_id);
    const currentCount = userPockets.length;

    // Definir límite según plan
    const planLimits = {
      BASICO: 1,
      ESTANDAR: 3,
      FAMILIAR: 5,
      PROFESIONAL: 10,
      EMPRESARIAL: Infinity
    };

    const userPlan = user.plan || 'BASICO';
    const maxAllowed = planLimits[userPlan.toUpperCase()] ?? 1;

    if (currentCount >= maxAllowed) {
      return res.status(403).json({
        message: `Has alcanzado el límite de carteras activas para el plan ${userPlan}. Por favor, elimina una cartera existente o actualiza tu plan.`
      });
    }

    // Crear la cartera
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

    const userId = req.user.id;
    const existingPocket = await Pocket.findByNameAndUserId(name, userId);

    if (existingPocket && String(existingPocket.id) !== String(id)) {
      return res.status(409).json({ message: 'Ya existe una cartera con ese nombre' });
    }

    const pocket = await Pocket.findById(id);
    if (!pocket) {
      return res.status(404).json({ message: 'Cartera no encontrada' });
    }

    if (pocket.user_id !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para actualizar esta cartera' });
    }

    await Pocket.update(id, { name, description, balance });
    // Buscar la cartera actualizada para devolverla
    const updatedPocket = await Pocket.findById(id);
    return res.status(200).json(updatedPocket);

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
