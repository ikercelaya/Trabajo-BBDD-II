const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
        get: value => value.toISOString().split('T')[0]
    },
    nacionalidad: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Director', directorSchema);
