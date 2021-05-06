const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    texto: {
        type: String,
        required: true,
        hora: Date
    },
    usuario: {
        type: Shema.Types.ObjectId,
        ref: 'user'
    },
    respuestas: {
        type: Shema.Types.ObjectId,
        ref: 'answers'
    },
    likes: {
        type: String,
        default: 0
    }

})


module.exports = mongoose.model('post', postSchema);