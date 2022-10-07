import { Sequelize } from "sequelize";
 
const db = new Sequelize('rinku', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;