import { Router } from "express";
import { methodEmpleados as empleadoController } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", empleadoController.getEmpleados);
router.post("/", empleadoController.postEmpleado);
router.get("/:id", empleadoController.getEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);
router.put("/:id", empleadoController.updateEmpleado);

export default router;

