const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    nombre: { type: String },
    fecha_nacimiento: { type: Date }
});

const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;
