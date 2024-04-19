const express = require('express');
const router = express.Router();

// Controladores
const actorController = require('../controllers/actorController');
const directorController = require('../controllers/directorController');
const documentalController = require('../controllers/documentalController');
const peliculaController = require('../controllers/peliculaController');
const serieController = require('../controllers/serieController');
const home = require('../controllers/home');
console.log(home);

module.exports = () => {
    // Ruta para la página principal que agrega datos de todas las categorías
    router.get('/', home.getHomeData);

    // Ruta genérica para manejo de errores (Asegúrate de que el método 'error' esté definido en el controlador 'home')
    router.get('/error', home.error);

    // Rutas para actores
    router.get('/actors', actorController.getAllActors);
    router.get('/actorSearch', actorController.searchActors);

    // Rutas para directores
    router.get('/directors', directorController.getAllDirectors);
    router.get('/directorSearch', directorController.searchDirectors);

    // Rutas para documentales
    router.get('/documentales', documentalController.getAllDocumentales);
    router.get('/documentalSearch', documentalController.searchDocumental);

    // Rutas para películas
    router.get('/peliculas', peliculaController.getAllPeliculas);
    router.get('/peliculaSearch', peliculaController.searchPelicula);

    // Rutas para series
    router.get('/series', serieController.getAllSeries);

    // Asegúrate de que el servidor maneja rutas no encontradas como último recurso
    router.use((req, res, next) => {
        res.status(404).send('Sorry cant find that!');
    });

    return router;
};
