const Documental = require('../models/Documental');

exports.getAllDocumentales = async (req, res, returnData = false) => {
    try {
        const documentales = await Documental.find();
        if (returnData) return { success: true, data: documentales };
        res.render('documentales', { documentales });
    } catch (err) {
        console.error(err);
        if (returnData) return { success: false, data: [] };
        res.status(500).send('Failed to retrieve documentales');
    }
};

exports.searchDocumental = async (req, res) => {
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

    const documentales = await Documental.find(query);
    if (documentales.length === 0) {
        return res.render('error', { message: 'No documentales found' });
    }
    res.render('documentalesSearch', { documentales });
};

