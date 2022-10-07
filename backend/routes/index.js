import express from "express";
 
import { 
    getAllEmpleados,
    createEmpleado,
    getEmpleadoById,
    updateEmpleado,
    deleteEmpleado
} from "../controllers/empleadoControlador.js";
 
const router = express.Router();
 
router.get('/', getAllEmpleados);
router.get('/:id', getEmpleadoById);
router.post('/', createEmpleado);
router.patch('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);
 
export default router;