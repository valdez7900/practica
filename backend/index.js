import express from "express";
import db from "./config/database.js";
import empleadoRoutes from "./routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('BASE DE DATOS CONECTADA...');
} catch (error) {
    console.error('ERROR DE CONEXION:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/empleados', empleadoRoutes);
 
app.listen(5000, () => console.log('SERVIDOR CORRIENDO EN EL PUERTO 5000'));