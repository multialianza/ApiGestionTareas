# ApiGestionTareas
🛠️ E1- M8 Ejercicio
API de Gestión de Tareas ✅
Objetivo: Diseñar y construir una API RESTful completa que exponga los endpoints necesarios para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre un recurso de "tareas". Aprenderás a mapear los verbos HTTP a las operaciones de la base de datos, a manejar parámetros de ruta y cuerpos de solicitud, y a responder con los códigos de estado HTTP adecuados para una comunicación cliente-servidor estándar y predecible.

Prerrequisitos:

Tener un proyecto Node.js con Express y Sequelize configurado.

Tener un modelo Tarea definido con Sequelize (similar al Producto o Publicacion de ejercicios anteriores) con atributos como titulo (STRING), descripcion (TEXT) y completada (BOOLEAN).

Haber sincronizado tu modelo con la base de datos para que la tabla Tareas exista.

Instrucciones:

En tu archivo principal (app.js), implementarás cinco rutas que corresponden a las operaciones CRUD estándar. Asegúrate de usar el middleware express.json() para que tu servidor pueda parsear los cuerpos de las solicitudes en formato JSON

// Añade este middleware al inicio de tu configuración de Express
app.use(express.json());
1. Obtener Todas las Tareas

 
Endpoint: GET /tareas

Descripción: Debe devolver un array con todas las tareas existentes en la base de datos.

Lógica:

Usa el método Tarea.findAll() de Sequelize.

Envía el resultado como una respuesta JSON usando res.json(tareas).

El código de estado por defecto es 200 (OK), lo cual es correcto para esta operación.

2. Obtener una Tarea por su ID
Endpoint: GET /tareas/:id

Descripción: Debe devolver una única tarea, identificada por el id proporcionado en la URL.

Lógica:

Accede al id desde los parámetros de la ruta con req.params.id.

Usa el método Tarea.findByPk(id).

Manejo de Errores: Si la tarea no se encuentra (tarea es null), devuelve un código de estado 404 (Not Found) con un mensaje de error.

Si se encuentra, devuelve la tarea con res.json(tarea).

3. Crear una Nueva Tarea
Endpoint: POST /tareas

Descripción: Debe crear una nueva tarea con los datos enviados en el cuerpo de la solicitud.

Lógica:

Accede a los datos (titulo, descripcion) desde el cuerpo de la solicitud con req.body.

Usa el método Tarea.create(req.body) para crear el nuevo registro.

Devuelve la tarea recién creada como confirmación, pero con el código de estado 201 (Created), que es el estándar para una creación exitosa. Usa res.status(201).json(nuevaTarea).

4. Actualizar una Tarea Existente
Endpoint: PUT /tareas/:id

Descripción: Debe actualizar los datos de una tarea existente.

Lógica:

Obtén el id de req.params y los nuevos datos de req.body.

Usa el método Tarea.update(req.body, { where: { id: id } }).

Este método devuelve un array con el número de filas afectadas. Si es 0, significa que la tarea no existió, por lo que debes devolver un 404.

Si la actualización es exitosa, puedes devolver un mensaje de confirmación o la tarea actualizada (haciendo una consulta adicional). Un código 200 (OK) es apropiado.

5. Eliminar una Tarea
Endpoint: DELETE /tareas/:id

Descripción: Debe eliminar una tarea de la base de datos.

Lógica:

Obtén el id de req.params.

Usa Tarea.destroy({ where: { id: id } }).

Al igual que con update, verifica el número de filas afectadas. Si es 0, devuelve un 404.

Si la eliminación es exitosa, devuelve un código de estado 204 (No Content), que indica que la operación se completó pero no hay nada que devolver. Usa res.status(204).send().

Pruebas con Postman / Insomnia: Utiliza un cliente de API como Postman o Insomnia para probar cada uno de tus endpoints.

POST: Envía una solicitud POST a http://localhost:3000/tareas con un cuerpo JSON ({ "titulo": "Mi nueva tarea", "descripcion": "..." }).

GET (All): Envía una solicitud GET a http://localhost:3000/tareas para ver la tarea que creaste.

GET (ID): Copia el id de la tarea creada y haz un GET a http://localhost:3000/tareas/[id].

PUT: Envía una solicitud PUT a la misma URL del ID, con un cuerpo JSON que contenga los campos a modificar.

DELETE: Envía una solicitud DELETE a la URL del ID para eliminar la tarea.

Conceptos a Aplicar:

API RESTful: Un estilo de arquitectura para diseñar aplicaciones en red, basado en recursos y operaciones estándar (verbos HTTP).

Verbos HTTP: GET (Leer), POST (Crear), PUT (Actualizar/Reemplazar), DELETE (Borrar).

Rutas de Express: La combinación de un verbo HTTP y una ruta URL (app.get('/tareas/:id', ...)).

req.params: Objeto que contiene los parámetros de la ruta (ej: :id).

req.body: Objeto que contiene los datos enviados en el cuerpo de una solicitud POST o PUT. Requiere el middleware express.json().

res.json(): Envía una respuesta en formato JSON.

res.status(): Establece el código de estado HTTP de la respuesta.

Códigos de Estado HTTP: Números que indican el resultado de una solicitud (200 OK, 201 Created, 204 No Content, 404 Not Found, 500 Internal Server Error).

Entrega:

El trabajo deberá ser entregado a través de un repositorio público en GitHub. No incluyas tus credenciales de conexión. Por favor, comparte únicamente el enlace a dicho repositorio. 📤
