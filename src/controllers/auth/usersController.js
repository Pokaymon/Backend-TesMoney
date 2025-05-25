import User from '../../models/User.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body;

  try {
    // Obtener el usuario actual por ID
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Si está intentando cambiar el plan
    if (fieldsToUpdate.plan) {
      if (existingUser.plan !== 'BASICO') {
        return res.status(403).json({
          message: 'Solo puedes cambiar de plan una vez desde el plan BÁSICO'
        });
      }
    }

    // Realizar la actualización
    await User.updateById(id, fieldsToUpdate);
    res.status(200).json({ message: 'Usuario actualizado correctamente' });

  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};
