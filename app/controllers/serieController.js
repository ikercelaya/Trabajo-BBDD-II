const Serie = require('../models/Serie');

exports.getAllSeries = async (req, res, returnData = false) => {
    try {
        const series = await Serie.find().populate('director');
        if (returnData) return { success: true, data: series };
        res.render('series', { series });
    } catch (err) {
        console.error(err);
        if (returnData) return { success: false, data: [] };
        res.status(500).send('Failed to retrieve series');
    }
};

exports.searchSeries = async (req, res) => {
    const { q, field } = req.query;
    const query = {};

    if (q) {
        const isNumber = !isNaN(q);
        if (field === 'fecha_inicio' && !isNumber) {
            query[field] = { $regex: q, $options: 'i' };
        } else {
            query[field] = q;
        }
    }

    const series = await Serie.find(query).populate('director');
    if (series.length === 0) {
        return res.render('error', { message: 'No series found' });
    }
    res.render('serieSearch', { series });
};
