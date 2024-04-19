const model = require('../models/pelicula');

exports.getData = async (req, res) => {
    try {
        const peliculas = await model.find();
        res.render('peliculas', { peliculas });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
