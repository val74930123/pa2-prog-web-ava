const mongoose = require('mongoose');
const solicitudSchema = new mongoose.Schema(
    {
        nombre: { 
            type: String, 
            required: [true, 'El nombre es obligatorio'] 
        },
        descripcion: { 
            type: String, 
            required: [true, 'La descripción es obligatoria'] 
        },
        categoria: { 
            type: String, 
            enum: ['Soporte', 'Reclamo', 'Consulta'],
            default: 'Consulta'
        },
        estado: { 
            type: String, 
            enum: ['pendiente', 'aprobada', 'rechazada'], 
            default: 'pendiente' 
        }
    },

    {
    timestamps: true
    });

module.exports = mongoose.model('Solicitud', solicitudSchema);
