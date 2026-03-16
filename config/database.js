// Conexión a PostgreSQL

// Importamos Sequelize
const { Sequelize } = require("sequelize");

// Importamos dotenv para leer variables de entorno
require("dotenv").config();

/*
Creamos una instancia de Sequelize con los datos
de conexión definidos en el archivo .env
*/

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
    }
);

// Exportamos la conexión para usarla en el resto del proyecto
module.exports = sequelize;