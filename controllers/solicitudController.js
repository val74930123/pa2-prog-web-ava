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

exports.actualizarSolicitud = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, estado} = req.body;
        if (!nombre || !descripcion || !categoria || !estado){
            return res.status(400).json({
                mensaje: 'Envia el nombre, descripcion categoria y estado'
            });
        }

        const solicitud = await Solicitud.findByIdAndUpdate(
            req.params.id,{nombre, descripcion, categoria, estado},
            { new: true, runValidators: true}
        );

        if(!solicitud) {
            return res.status(404).json({mensaje: 'solicitus no encontrada'});
        }

        return res.status(200).json({
            mensaje: 'solicidud actualizada'
        });
    } catch (error){
          console.error('Error al actualizar solicitud:', error);
        res.status(500).json({ mensaje: 'error al actualizar' });
    }
};
exports.eliminarSolicitud = async (req, res) => {
  try {
    const solicitud = await Solicitud.findByIdAndDelete(req.params.id);

    if (!solicitud) {
      return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    }

    return res.status(200).json({
      mensaje: 'Solicitud eliminada',
      solicitud
    });
  } catch (error) {
    const status = error.name === 'CastError' ? 400 : 500;

    return res.status(status).json({
      mensaje: 'Error al eliminar la solicitud',
      error: error.message
    });
  }
};