const Director = require('../models/Director');

exports.getAllDirectors = async (req, res, returnData = false) => {
    try {
        const directors = await Director.find();
        if (returnData) return { success: true, data: directors };
        res.render('directors', { directors });
    } catch (err) {
        console.error(err);
        if (returnData) return { success: false, data: [] };
        res.status(500).send('Failed to retrieve directors');
    }
};

exports.searchDirectors = async (req, res) => {
    const { q, field } = req.query;
    const query = {};

    if (q) {
        query[field] = { $regex: q, $options: 'i' };
    }

    const directors = await Director.find(query);
    if (directors.length === 0) {
        return res.render('error', { message: 'No directors found' });
    }
    res.render('directorSearch', { directors });
};
