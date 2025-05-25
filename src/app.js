import express from 'express';
import apiRoutes from "./routes/api.routes.js";
import pocketRoutes from "./routes/pocketRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.set("port", 5000)

app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);
app.use("/pocket", pocketRoutes);
app.use("/transactions", transactionRoutes);

export default app;
