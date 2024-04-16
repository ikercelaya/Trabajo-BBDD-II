const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const actorController = require('../controllers/actorController');
const directorController = require('../controllers/directorController');
const documentalController = require('../controllers/documentalController');
const peliculaController = require('../controllers/peliculaController');
const serieController = require('../controllers/serieController');

module.exports = () => {
    router.get('/', mainController.home);

    router.get('/error', mainController.error);

    router.get('/actors', actorController.getAllActors);

    router.get('/peliculas', peliculaController.getAllPeliculas);

    router.get('/documentales', documentalController.getAllDocumentales);

    router.get('/director', directorController.getAllDirectors);

    router.get('/actorSearch', actorController.searchActors);

    router.get('/directorSearch', directorController.searchDirectors);
    
    router.get('/documentalSearch', documentalController.searchDocumental);

    router.get('/peliculaSearch', peliculaController.searchPelicula);

    router.get('/serie', serieController.getAllSeries);

    return router;
}