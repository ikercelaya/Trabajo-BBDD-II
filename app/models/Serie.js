const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  id_director: { type: Number },
  nombre: { type: String },
  fecha_nacimiento: { type: String }
});

const serieSchema = new mongoose.Schema({
  id_serie: { type: Number },
  titulo: { type: String },
  temporadas: { type: Number },
  fecha_inicio: { type: String },
  director: directorSchema
});

const Serie = mongoose.model('Serie', serieSchema);

module.exports = Serie;
