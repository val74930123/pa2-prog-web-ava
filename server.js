require('dotenv').config();
const express = requiere('express');
const solicitudRoutes = require('./routes/solicitudRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//rutas
app.get('/', (req, res) => {
  res.send('API de Gestión de Solicitudes Académicas funcionando');
});
app.use('/api/solicitudes', solicitudRoutes);

// errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salio mal' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});