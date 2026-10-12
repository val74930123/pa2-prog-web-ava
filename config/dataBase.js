
const mongoose = require('mongoose');

// Esta función conecta el backend con la base de datos MongoDB.
async function connectDB() {
    // Uso la dirección guardada en el archivo .env.
    // Si no está definida, utilizo la base de datos local.
    const mongoURI =
        process.env.MONGO_URI ||
        'mongodb://localhost:27017/solicitudes';

    // Mongoose establece la conexión con MongoDB.
    await mongoose.connect(mongoURI);

    // Este mensaje me permite comprobar que la conexión funcionó.
    console.log('Conectado a la base de datos MongoDB');
}

// Exporto la función para utilizarla desde server.js.
module.exports = connectDB;
