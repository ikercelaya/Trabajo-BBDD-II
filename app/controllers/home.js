// Importar módulos de controladores
const peliculaController = require('./peliculaController');
const serieController = require('./serieController');
const actorController = require('./actorController');
const directorController = require('./directorController');
const documentalController = require('./documentalController');

// Función para obtener todos los datos: películas, series, actores, directores, documentales
exports.getHomeData = async (req, res) => {
    try {
        // Obtiene todas las películas
        const peliculasPromise = peliculaController.getAllPeliculas(req, res, true);
        
        // Obtiene todas las series
        const seriesPromise = serieController.getAllSeries(req, res, true);
        
        // Obtiene todos los actores
        const actoresPromise = actorController.getAllActors(req, res, true);
        
        // Obtiene todos los directores
        const directoresPromise = directorController.getAllDirectors(req, res, true);
        
        // Obtiene todos los documentales
        const documentalesPromise = documentalController.getAllDocumentales(req, res, true);

        // Espera que todas las promesas se resuelvan
        const [peliculas, series, actores, directores, documentales] = await Promise.all([
            peliculasPromise,
            seriesPromise,
            actoresPromise,
            directoresPromise,
            documentalesPromise
        ]);

        // Combina todos los datos en un solo objeto y lo renderiza
        res.render('home', {
            peliculas: peliculas.data,
            series: series.data,
            actores: actores.data,
            directores: directores.data,
            documentales: documentales.data
        });
    } catch (err) {
        console.error('Failed to retrieve data:', err);
        res.status(500).send('Failed to retrieve data');
    }
};