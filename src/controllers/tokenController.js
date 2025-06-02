import jwt from 'jsonwebtoken';
import config from '../config.js';
import User from '../models/User.js';
import Syncro from '../models/Syncro.js';

export const getAgentUsers = async (req, res) => {
  try {
    const users = await User.getAll(); // MySQL

    const userIds = users.map(user => user.id.toString());
    const syncroDocs = await Syncro.find({ userId: { $in: userIds } });

    const syncroMap = {};
    for (const doc of syncroDocs) {
      syncroMap[doc.userId] = doc.state;
    }

    const usersWithToken = users.map(user => {
      const token = jwt.sign(
        { id: user.id, username: user.username, email: user.email, rol: user.rol },
        config.jwtSecret,
        { expiresIn: config.jwtExpiresIn }
      );

      return {
        email: user.email,
        token,
        syncro_enabled: syncroMap[user.id.toString()] ?? false
      };
    });

    res.json(usersWithToken);
  } catch (error) {
    console.error('Error al obtener usuarios para el agente:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

