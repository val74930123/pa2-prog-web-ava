
const mongoose = require('mongoose');

// Defino los campos que tendrá cada solicitud académica.
const solicitudSchema = new mongoose.Schema(
    {
        // El nombre es obligatorio para registrar una solicitud.
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },

        // La descripción también es obligatoria.
        descripcion: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },

        // La categoría solo acepta estas opciones.
        // Si no se indica una, se utiliza Consulta.
        categoria: {
            type: String,
            enum: ['Soporte', 'Reclamo', 'Consulta'],
            default: 'Consulta'
        },

        // El estado tiene tres opciones permitidas.
        // Por defecto, una solicitud comienza pendiente.
        estado: {
            type: String,
            enum: ['pendiente', 'aprobada', 'rechazada'],
            default: 'pendiente'
        }
    },
    {
        // Mongoose registra automáticamente las fechas de creación y actualización.
        timestamps: true
    }
);

// Exporto el modelo para que los controladores puedan utilizarlo.
module.exports = mongoose.model('Solicitud', solicitudSchema);
