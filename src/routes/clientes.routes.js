import { Router } from "express";
import { methodClientes as clienteController } from "../controllers/cliente.controllers.js";

const router = Router();

router.get("/", clienteController.getClientes);
router.post("/", clienteController.postCliente);
router.get("/:id", clienteController.getCliente);
router.delete("/:id", clienteController.deleteCliente);
router.put("/:id", clienteController.updateCliente);

export default router;
