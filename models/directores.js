const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    nombre: { type: String },
    fecha_nacimiento: { type: Date }
});

const Director = mongoose.model('Director', directorSchema);
module.exports = Director;
