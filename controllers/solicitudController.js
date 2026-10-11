const  Solicitud = require('../models/solicitudModel');

exports.crearSolicitud = async (req, res) => {
    try {
        const nuevaSolicitud = await Solicitud.create(req.body);
        res.status(201).json({ mensaje: 'Solicitud creada exitosamente', solicitud: nuevaSolicitud });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la solicitud', error: error.message });
    }  
};

exports.listarSolicitudes = async (req, res) => {
    try {
        const solicitudes = await Solicitud.find();
        res.status(200).json({ mensaje: 'Solicitudes obtenidas exitosamente', solicitudes });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las solicitudes', error: error.message });
    }
};

exports.obtenerSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitud.findById(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
        }
        res.status(200).json({ mensaje: 'Solicitud obtenida exitosamente', solicitud });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la solicitud', error: error.message });
    }
};

exports.actualizarSolicitud = (req, res) => {
    res.status(501).json({ mensaje: 'Pendiente: actualizarSolicitud' });
};
exports.eliminarSolicitud = (req, res) => {
    res.status(501).json({ mensaje: 'Pendiente: eliminarSolicitud' });
};