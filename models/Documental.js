const mongoose = require('mongoose');

const documentalSchema = new mongoose.Schema({
  id_documental: { type: Number },
  titulo: { type: String },
  fecha_estreno: { type: String },
  tema: { type: String },
  id_director: { type: Number }
});

const Documental = mongoose.model('Documental', documentalSchema);

module.exports = Documental;
