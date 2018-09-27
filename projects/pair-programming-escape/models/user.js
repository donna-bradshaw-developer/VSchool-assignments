const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    room1:{
        isCompleted:{
            type: Boolean,
            default: false
        }
    },
    room2:{
        isCompleted:{
            type: Boolean,
            default: false
        }
    }
})

module.exports = mongoose.model('User', userSchema)