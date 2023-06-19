//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const HurtoSchema = Schema({
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatorio']
    },

    latitud: {
        type: Number,
        required: [true, 'La latitud es obligatoria'],
        minlength: [6.13, 'Mínimo de latitud es 6.13'],
        maxlength: [6.217, 'Máximo de latitud es 6.217'],
    },

    longitud: {
        type: Number,
        required: [true, 'La longitud es obligatoria'],
        minlength: [-75.567, 'Mínimo de longitud es -75.567'],
        maxlength: [-75.34, 'Máximo de longitud es -75.34'],
    },

    fecha: {
        type: Date,
        default: Date.now,
        required: [true, 'La fecha es obligatoria']
    },

    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    }
})

module.exports = model('Hurto', HurtoSchema)