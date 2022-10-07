import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Empleado = db.define('empleados',{
    nombreEmpleado:{
        type: DataTypes.STRING
    },
    rolEmpleado:{
        type: DataTypes.STRING
    },
    tipoEmpleado:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Empleado;