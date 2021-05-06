const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerShema = new Schema({
    texto: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    hora: {
        type: Date,
        required: true
    },
    likes: {
        type: String,
        default: 0
    }
})


module.exports = mongoose.model('answers', answerShema)