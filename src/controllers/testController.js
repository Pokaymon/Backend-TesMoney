export const testConnection = (req, res) => {

  try {
    return res.status(200).json({ message: 'Conexión exitosa al backend' });
  } catch (error) {
    console.error('Error en el test de conexión:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
