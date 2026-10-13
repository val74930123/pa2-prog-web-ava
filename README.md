
# PA2 - Plataforma de Gestión de Solicitudes Académicas

## 1. Integrantes y participación

Completar los nombres completos y confirmar la participación de cada integrante antes de entregar.

| Integrante | Rol | Participación |
|---|---|---|
| Ian Palmieri Gonzaga | P4: MongoDB y Mongoose | Configuración de MongoDB local, conexión con Mongoose, revisión del modelo Solicitud y prueba de persistencia. |
| Valeria Ravina Pérez | P1: Servidor y middleware | Creación del proyecto con Node.js y Express, configuración del middleware (express.json, registro de peticiones y manejo de errores), estructura de carpetas, configuración de .gitignore y .env.example, y subida de la base del proyecto a GitHub.
| Rodrigo Arturo Paredes Santa Cruz | P2: Crear y consultar solicitudes | Configuración de rutas y controladores para crear, listar y ver la solicitud a partir del ID. |
| [Nombre completo] | P3: Actualizar y eliminar solicitudes | [Completar con la participación real]. |
| Alejandro Josue Chero Izaguirre | P5: CRUD persistente | Pruebas de las operaciones CRUD con Postman, verificación de los datos almacenados en MongoDB Compass. |

## 2. Descripción del proyecto

La Plataforma de Gestión de Solicitudes Académicas permite registrar y administrar solicitudes mediante una API REST desarrollada con Node.js y Express. MongoDB almacena la información y Mongoose permite definir el modelo de datos y realizar operaciones sobre los documentos.

## 3. Objetivo

Implementar un backend que procese solicitudes HTTP, realice operaciones CRUD y almacene los datos de forma persistente en MongoDB mediante Mongoose.

La evaluación también contempla autenticación JWT, cifrado de contraseñas con bcrypt.js, CORS y autorización por roles. El estado de cada una de estas funciones debe verificarse en el código antes de afirmar que está implementada.

## 4. Desarrollo

### Actividad 1: servidor, rutas y CRUD

- `server.js`: inicia Express, configura middleware y registra las rutas.
- `routes/solicitudRoutes.js`: define las rutas HTTP de solicitudes.
- `controllers/solicitudController.js`: contiene las operaciones para crear, listar, consultar, actualizar y eliminar solicitudes.

### Actividad 2: MongoDB y Mongoose

- `config/dataBase.js`: establece la conexión con MongoDB.
- `models/solicitudModel.js`: define los campos, validaciones y fechas del modelo Solicitud.
- MongoDB conserva los documentos en la base de datos `solicitudes`.

El modelo incluye nombre, descripción, categoría y estado. Mongoose genera los campos de fecha `createdAt` y `updatedAt`.

## 5. Solución propuesta

Se utiliza una API REST con Express y una base de datos MongoDB. Mongoose permite definir el esquema de las solicitudes y ejecutar operaciones CRUD sobre los datos almacenados.

La conexión se configura mediante variables de entorno para evitar escribir la configuración local directamente en el código fuente.

## 6. Requisitos previos

- Node.js y npm.
- MongoDB Community Server en ejecución, localmente o en un servicio autorizado.
- Git para obtener el repositorio.

## 7. Cómo ejecutar el proyecto

### 7.1. Obtener el código

Clonar el repositorio:

    git clone https://github.com/val74930123/pa2-prog-web-ava.git
    cd pa2-prog-web-ava

### 7.2. Instalar dependencias

    npm install

### 7.3. Configurar variables de entorno

Crear un archivo `.env` a partir de `.env.example` y configurar los valores correspondientes:

    PORT=3001
    MONGO_URI=mongodb://localhost:27017/solicitudes

La dirección anterior corresponde a una instalación local. Si se utiliza otro servidor, se debe cambiar por la dirección autorizada correspondiente.

No subir el archivo `.env` ni publicar contraseñas, tokens o credenciales.

### 7.4. Iniciar MongoDB

Asegurarse de que MongoDB esté ejecutándose y escuchando en el puerto configurado antes de iniciar el backend.

### 7.5. Iniciar el servidor

    npm start

El servidor utiliza el puerto 3001 por defecto.

## 8. Rutas de la API

La ruta base es `/api/solicitudes`.

| Método | Ruta | Operación |
|---|---|---|
| POST | `/api/solicitudes` | Crear solicitud |
| GET | `/api/solicitudes` | Listar solicitudes |
| GET | `/api/solicitudes/:id` | Consultar una solicitud |
| PUT | `/api/solicitudes/:id` | Actualizar solicitud |
| DELETE | `/api/solicitudes/:id` | Eliminar solicitud |

## 9. Evidencias de implementación y pruebas

Agregar capturas reales y legibles en la carpeta `evidencias/`. No incluir credenciales ni información sensible.

Evidencias que debe presentar el equipo:

1. Servidor iniciado correctamente.
2. Mensaje de conexión exitosa con MongoDB.
3. Solicitud creada mediante una petición HTTP.
4. Listado de solicitudes mediante GET.
5. Documento visible en MongoDB Compass.
6. Consulta del mismo documento después de reiniciar el backend.
7. Pruebas de actualización y eliminación realizadas por el equipo.

### Resultado de la prueba realizada para P4

El 12 de octubre de 2026 se creó una solicitud de prueba mediante POST a `/api/solicitudes`. La API devolvió el identificador `6acd2623c7a6509616accea5` y confirmó la creación. Posteriormente, GET `/api/solicitudes` devolvió el documento guardado.

También se reinició el backend y se comprobó que la solicitud continuaba disponible.

Adjuntar las capturas correspondientes para que el resultado pueda verificarse durante la revisión.

## 10. Conclusiones

La conexión de Node.js con MongoDB mediante Mongoose permite almacenar solicitudes de manera persistente, en lugar de mantenerlas únicamente en memoria. El esquema define los campos y las validaciones, mientras que los controladores utilizan el modelo para trabajar con los documentos.

La prueba de creación, consulta y persistencia permitió verificar el funcionamiento de la parte desarrollada para P4. El equipo debe completar y verificar las demás actividades y los requisitos de seguridad antes de la entrega final.

## 11. Video de exposición

**Video público de YouTube:** [PEGAR AQUÍ EL ENLACE]

El video debe ser público e incluir la participación de todos los integrantes, según las indicaciones de la evaluación.
EOF
