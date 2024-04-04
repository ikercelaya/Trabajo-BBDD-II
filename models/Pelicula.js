const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  id_director: { type: Number },
  nombre: { type: String },
  fecha_nacimiento: { type: String }
});

const peliculaSchema = new mongoose.Schema({
  id_pelicula: { type: Number },
  titulo: { type: String },
  fecha_estreno: { type: String },
  director: directorSchema,
  actores: [{ type: String }]
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
