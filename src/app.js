import express from 'express';
import categoriasRoutes from "./routes/categorias.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import apiRoutes from "./routes/api.routes.js";
import pocketRoutes from "./routes/pocketRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.set("port", 5000)

app.use("/api/categorias",categoriasRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api", apiRoutes);
app.use("/pocket", pocketRoutes);
app.use("/transactions", transactionRoutes);

export default app;
