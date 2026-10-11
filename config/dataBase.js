const mongoose = require('mongoose');

async function connectDB() {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/solicitudes';

    await mongoose.connect(mongoURI);
    console.log('Conectado a la base de datos MongoDB');

}

module.exports = connectDB;