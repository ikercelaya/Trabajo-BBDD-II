const mongoose = require('mongoose');

const peliculaActorSchema = new mongoose.Schema({
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pelicula',
        required: true
    },
    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor',
        required: true
    }
}, {
    _id: false
});

module.exports = mongoose.model('PeliculaActor', peliculaActorSchema);
