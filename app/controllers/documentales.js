const model = require('../models/documental');

exports.getData = async (req, res) => {
    try {
        const documentales = await model.find();
        res.render('documentales', { documentales });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
