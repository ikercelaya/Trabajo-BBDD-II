const model = require('../models/actor');

exports.getData = async (req, res) => {
    try {
        const actores = await model.find();
        res.render('actores', { actores });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
