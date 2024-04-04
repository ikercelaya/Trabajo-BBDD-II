const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  id_actor: { type: Number },
  nombre: { type: String },
  fecha_nacimiento: { type: String }
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
