const model = require('../models/director');

exports.getData = async (req, res) => {
    try {
        const directores = await model.find();
        res.render('directores', { directores });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
