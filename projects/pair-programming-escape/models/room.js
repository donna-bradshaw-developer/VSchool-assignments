const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    code: String,
    guessCount: {
        type: Number,
        required: true
    },
    furniture: [
        {
        itemName: String,
        clue: String,
        clueAnswer: String
        }
    ],
    user: {
        ref: 'User',
        type: Schema.Type.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Room', roomSchema)