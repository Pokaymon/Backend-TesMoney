import express from 'express';
import categoriasRoutes from "./routes/categorias.routes.js";
import authRoutes from "./routes/auth.routes.js";
import apiRoutes from "./routes/api.routes.js";
import cors from "cors";
import config from "./config.js";

const app = express();

app.set("port", config.port);

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/categorias",categoriasRoutes)
app.use("/api", authRoutes);
app.use("/api", apiRoutes);

export default app;
