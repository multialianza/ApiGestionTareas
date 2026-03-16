// Archivo principal

const express = require("express");
const app = express();

require("dotenv").config();

const sequelize = require("./config/database");

const tareasRoutes = require("./routes/tareas.routes");

/*
Middleware para que Express pueda
leer JSON enviados en POST y PUT
*/

app.use(express.json());

/*
Registramos las rutas
*/

app.use("/", tareasRoutes);


/*
Conectar a la base de datos
y levantar el servidor
*/

sequelize.sync()
.then(() => {

console.log("Base de datos conectada");

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});

})
.catch(error => {
    console.error("Error conectando a la base de datos", error);
});