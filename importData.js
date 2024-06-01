const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { ObjectId } = mongoose.Types; // Importar ObjectId

// Importa los modelos desde la nueva estructura
const actoresRouters = require('./app/models/actores');
const directoresRouters = require('./app/models/directores');
const documentalesRouters = require('./app/models/documentales');
const peliculasRouters = require('./app/models/peliculas');
const seriesRouters = require('./app/models/series');

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
        const actoresData = fs.readFileSync(`${dataFolderPath}/actor.js`, 'utf-8');
        await actor.create(JSON.parse(actoresData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const directoresData = fs.readFileSync(`${dataFolderPath}/director.js`, 'utf-8');
        await director.create(JSON.parse(directoresData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const documentalesData = fs.readFileSync(`${dataFolderPath}/documental.js`, 'utf-8');
        await documnetal.create(JSON.parse(documentalesData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const peliculasData = fs.readFileSync(`${dataFolderPath}/pelicula.js`, 'utf-8');
        await pelicula.create(JSON.parse(peliculasData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const seriesData = fs.readFileSync(`${dataFolderPath}/serie.js`, 'utf-8');
        await series.create(JSON.parse(seriesData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        console.log('Data imported successfully');
        process.exit();
    } catch (err) {
        console.error('Error importing data:', err);
        process.exit(1);
    }
};