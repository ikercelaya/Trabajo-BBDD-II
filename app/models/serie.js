const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    creador: {
        type: String,
        required: true
    },
    temporadas: {
        type: Number,
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
    pais: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Serie', serieSchema);
