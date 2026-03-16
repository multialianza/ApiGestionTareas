// Crear modelo Tarea

// Importamos Sequelize
const { DataTypes } = require("sequelize");

// Importamos la conexión a la base de datos
const sequelize = require("../config/database");

/*
Definimos el modelo Tarea que representa
la tabla "Tareas" en PostgreSQL
*/

const Tarea = sequelize.define("Tarea", {

 // ID autoincremental
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},

 // Título de la tarea
titulo: {
    type: DataTypes.STRING,
    allowNull: false
},

 // Descripción de la tarea
descripcion: {
    type: DataTypes.TEXT
},

 // Estado de la tarea
completada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
}

}, {
    tableName: "tareas",
    timestamps: true
});

// Exportamos el modelo
module.exports = Tarea;