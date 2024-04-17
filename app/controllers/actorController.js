const Actor = require('../models/Actor');

exports.getAllActors = async (req, res, returnData = false) => {
    try {
        const actors = await Actor.find();
        if (returnData) return { success: true, data: actors };
        res.render('actors', { actors });
    } catch (err) {
        console.error(err);
        if (returnData) return { success: false, data: [] };
        res.status(500).send('Failed to retrieve actors');
    }
};

exports.searchActors = async (req, res) => {
    const { q, field } = req.query;
    const query = {};

    if (q) {
        query[field] = { $regex: q, $options: 'i' };
    }

    const actors = await Actor.find(query);
    if (actors.length === 0) {
        return res.render('error', { message: 'No actors found' });
    }
    res.render('actorSearch', { actors });
};