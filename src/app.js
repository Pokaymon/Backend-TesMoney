import express from 'express';
import apiRoutes from "./routes/api.routes.js";
import pocketRoutes from "./routes/pocketRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import syncroRoutes from "./routes/syncroRoutes.js";
import { connectMongoDB } from "./db/mongo.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.set("port", 5000);

connectMongoDB();

app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);
app.use("/pocket", pocketRoutes);
app.use("/transactions", transactionRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/syncro", syncroRoutes);

export default app;
