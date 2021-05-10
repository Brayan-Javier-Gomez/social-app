const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const unique_validator = require('mongoose-unique-validator');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    correo: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    imagen: {
        type: String,
        default: '../assets/img/no-image.jpg'
    }
})


usuarioSchema.plugin(unique_validator, { message: '{PATH} debe ser unico' })

module.exports = mongoose.model('user', usuarioSchema);