const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { ObjectId } = mongoose.Types; // Importar ObjectId

// Importa los modelos desde la nueva estructura
const actoresRouters = require('./app/models/actor');
const directoresRouters = require('./app/models/director');
const documentalesRouters = require('./app/models/documental');
const peliculasRouters = require('./app/models/pelicula');
const seriesRouters = require('./app/models/serie');

const dataFolderPath = path.resolve(__dirname, 'data');

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
    try {
        const actorData = fs.readFileSync(`${dataFolderPath}/actor.js`, 'utf-8');
        await actor.create(JSON.parse(actorData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const directorData = fs.readFileSync(`${dataFolderPath}/director.js`, 'utf-8');
        await director.create(JSON.parse(directorData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const documentalData = fs.readFileSync(`${dataFolderPath}/documental.js`, 'utf-8');
        await documental.create(JSON.parse(documentalData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const peliculaData = fs.readFileSync(`${dataFolderPath}/pelicula.js`, 'utf-8');
        await pelicula.create(JSON.parse(peliculaData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const serieData = fs.readFileSync(`${dataFolderPath}/serie.js`, 'utf-8');
        await serie.create(JSON.parse(serieData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        console.log('Data imported successfully');
        process.exit();
    } catch (err) {
        console.error('Error importing data:', err);
        process.exit(1);
    }
};