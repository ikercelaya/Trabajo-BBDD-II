const Pelicula = require('../models/Pelicula');

exports.getAllPeliculas = async (req, res, returnData = false) => {
    try {
        const peliculas = await Pelicula.find();
        if (returnData) return { success: true, data: peliculas };
        res.render('peliculas', { peliculas });
    } catch (err) {
        console.error(err);
        if (returnData) return { success: false, data: [] };
        res.status(500).send('Failed to retrieve peliculas');
    }
};

exports.searchPelicula = async (req, res) => {
    const { q, field } = req.query;
    const query = {};

    if (q) {
        const isNumber = !isNaN(q);
        if ((field === 'fecha_estreno' || field === 'id_director') && isNumber) {
            query[field] = q;
        } else {
            query[field] = { $regex: q, $options: 'i' };
        }
    }

    const peliculas = await Pelicula.find(query);
    if (peliculas.length === 0) {
        return res.render('error', { message: 'No peliculas found' });
    }
    res.render('peliculasSearch', { peliculas });
};