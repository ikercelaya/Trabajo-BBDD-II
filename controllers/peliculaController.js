const Pelicula = require('../models/Pelicula');

exports.getAllPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.render('peliculas', { peliculas });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve peliculas');
    }
}

exports.searchPelicula = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Verificar si q tiene un valor
        if (q) {
            // Verificar si q es un número
            const isNumber = !isNaN(q);

            // Construir la consulta dinámicamente según el campo seleccionado y el tipo de búsqueda
            if ((field === 'fecha_estreno' || field === 'id_director') && isNumber) {
                // Si el campo es 'fecha_estreno' o 'id_director' y q es un número, buscar por valor exacto
                query[field] = q;
            } else {
                // De lo contrario, buscar como texto (ignorando mayúsculas/minúsculas)
                query[field] = { $regex: q, $options: 'i' };
            }
        }

        // Ejecutar la consulta en la base de datos
        const peliculas = await Pelicula.find(query);

        if (peliculas.length === 0) {
            // Si no se encuentran películas, renderizar una vista de error personalizada
            return res.render('error', { message: 'No peliculas found' });
        }

        // Renderizar la vista con las películas encontradas
        res.render('peliculasSearch', { peliculas });
    } catch (error) {
        console.error('Error searching peliculas:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
