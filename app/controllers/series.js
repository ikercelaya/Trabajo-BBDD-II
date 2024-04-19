const model = require('../models/serie');

exports.getData = async (req, res) => {
    try {
        const series = await model.find();
        res.render('series', { series });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
