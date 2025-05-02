import express from 'express';
import categoriasRoutes from "./routes/categorias.routes.js";
import apiRoutes from "./routes/api.routes.js";
import pocketRoutes from "./routes/pocketRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.set("port", 5000)

app.use("/api/categorias",categoriasRoutes);
app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);
app.use("/pocket", pocketRoutes);
app.use("/transactions", transactionRoutes);

export default app;
