const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    texto: {
        type: String,
        required: true,
        hora: Date
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    respuestas: {
        texto: {
            type: String
        },
        usuario: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        likes: {
            type: String,
            default: 0
        },
        hora: {
            type: Date
        }
    },
    likes: {
        type: String,
        default: 0
    }

})


module.exports = mongoose.model('post', postSchema);