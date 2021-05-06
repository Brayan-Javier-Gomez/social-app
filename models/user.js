const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioShema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        default: '../assets/img/no-image.jpg'
    }
})

module.exports = mongoose.model('user', usuarioShema);