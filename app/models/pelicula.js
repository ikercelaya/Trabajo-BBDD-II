const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    fecha_lanzamiento: {
        type: Date,
        required: true,
        get: value => value.toISOString().split('T')[0]
    },
    director: {
        type: String,
        required: true
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
    },
    calificacion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
