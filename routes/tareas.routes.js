// Crear las rutas CRUD


const express = require("express");
const router = express.Router();

const Tarea = require("../models/tarea");

/*
=====================================
1. OBTENER TODAS LAS TAREAS
GET /tareas
=====================================
*/

router.get("/tareas", async (req, res) => {
try {

const tareas = await Tarea.findAll();

res.json(tareas);

} catch (error) {

res.status(500).json({ error: "Error al obtener tareas" });

}
});


/*
=====================================
2. OBTENER TAREA POR ID
GET /tareas/:id
=====================================
*/

router.get("/tareas/:id", async (req, res) => {

try {

const { id } = req.params;

const tarea = await Tarea.findByPk(id);

if (!tarea) {
return res.status(404).json({ error: "Tarea no encontrada" });
}

res.json(tarea);

} catch (error) {

res.status(500).json({ error: "Error al buscar la tarea" });

}
});


/*
=====================================
3. CREAR TAREA
POST /tareas
=====================================
*/

router.post("/tareas", async (req, res) => {

try {

const nuevaTarea = await Tarea.create(req.body);

res.status(201).json(nuevaTarea);

} catch (error) {

res.status(500).json({ error: "Error al crear tarea" });

}
});


/*
=====================================
4. ACTUALIZAR TAREA
PUT /tareas/:id
=====================================
*/

router.put("/tareas/:id", async (req, res) => {

try {

const { id } = req.params;

const [filasActualizadas] = await Tarea.update(req.body, {
where: { id: id }
});

if (filasActualizadas === 0) {
return res.status(404).json({ error: "Tarea no encontrada" });
}

const tareaActualizada = await Tarea.findByPk(id);

res.json(tareaActualizada);

} catch (error) {

res.status(500).json({ error: "Error al actualizar tarea" });

}
});


/*
=====================================
5. ELIMINAR TAREA
DELETE /tareas/:id
=====================================
*/

router.delete("/tareas/:id", async (req, res) => {

try {

const { id } = req.params;

const filasEliminadas = await Tarea.destroy({
where: { id: id }
});

if (filasEliminadas === 0) {
return res.status(404).json({ error: "Tarea no encontrada" });
}

res.status(204).send();

} catch (error) {

res.status(500).json({ error: "Error al eliminar tarea" });

}
});


module.exports = router;