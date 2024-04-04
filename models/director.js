const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  id_director: { type: Number },
  nombre: { type: String },
  fecha_nacimiento: { type: String }
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;

