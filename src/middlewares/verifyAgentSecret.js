import config from '../config.js';

const verifyAgentSecret = (req, res, next) => {
  const secret = req.headers['x-agent-secret'];
  if (!secret || secret !== config.agentSecret) {
    return res.status(403).json({ message: 'Acceso denegado: clave del agente inválida' });
  }
  next();
};

export default verifyAgentSecret;

