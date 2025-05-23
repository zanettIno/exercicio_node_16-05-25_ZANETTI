const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    }
})

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios')

module.exports = Usuario