const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { ObjectId } = mongoose.Types;

// Importa los modelos desde la nueva estructura
const actor = require('./app/models/actor');
const director = require('./app/models/director');
const documental = require('./app/models/documental');
const pelicula = require('./app/models/pelicula');
const serie = require('./app/models/serie');

// Actualizar la ruta del directorio de datos
const dataFolderPath = path.resolve(__dirname, 'app', 'data');

// Log para verificar la ruta y los archivos existentes
console.log(`Intentando acceder al directorio: ${dataFolderPath}`);
fs.readdir(dataFolderPath, (err, files) => {
  if (err) {
    console.error('Error leyendo el directorio de datos:', err);
  } else {
    console.log('Archivos en el directorio de datos:', files);
  }
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/netflix')
    .then(() => {
        console.log('Connected to MongoDB');
        return mongoose.connection.dropDatabase();
    })
    .then(() => {
        console.log('Database dropped successfully');
        return importData();
    })
    .catch((err) => {
        console.error('Error:', err);
        process.exit(1);
    });

const importData = async () => {
    const filesToImport = ['actor', 'director', 'documental', 'pelicula', 'serie'];
    try {
        for (const file of filesToImport) {
            const filePath = `${dataFolderPath}/${file}.js`;
            const data = fs.readFileSync(filePath, 'utf-8');
            await eval(file).create(JSON.parse(data).map(item => ({
                ...item,
                _id: new ObjectId(item._id['$oid'])
            })));
        }
        console.log('Data imported successfully');
        process.exit();
    } catch (err) {
        console.error(`Error importing data from file: ${err.message}`);
        process.exit(1);
    }
};
