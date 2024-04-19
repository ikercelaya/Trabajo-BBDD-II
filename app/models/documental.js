const mongoose = require('mongoose');

const documentalSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    fecha_lanzamiento: {
        type: Date,
        required: true,
        get: value => value.toISOString().split('T')[0]
    },
    genero: {
        type: String,
        required: true
    },
    duracion: {
        type: Number, 
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Documental', documentalSchema);
