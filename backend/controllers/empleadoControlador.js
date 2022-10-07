import Empleado from "../models/empleadoModelo.js";
 
export const getAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getEmpleadoById = async (req, res) => {
    try {
        const empleado = await Empleado.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(empleado[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createEmpleado = async (req, res) => {
    try {
        await Empleado.create(req.body);
        res.json({
            "message": "Empleado Creado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateEmpleado = async (req, res) => {
    try {
        await Empleado.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Empleado Actualizado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteEmpleado = async (req, res) => {
    try {
        await Empleado.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Empleado Eliminado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}