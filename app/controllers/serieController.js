const Serie = require('../models/Serie');
const Director = require('../models/Director');

exports.getAllSeries = async (req, res) => {
    try {
        const series = await Serie.find().populate('director');
        res.render('series', { series });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve series');
    }
}

exports.searchSeries = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Verificar si q tiene un valor
        if (q) {
            // Verificar si q es un número
            const isNumber = !isNaN(q);

            // Construir la consulta dinámicamente según el campo seleccionado y el tipo de búsqueda
            if (field === 'fecha_inicio' && !isNumber) {
                // Si el campo es 'fecha_inicio' y q no es un número, buscar como texto (ignorando mayúsculas/minúsculas)
                query[field] = { $regex: q, $options: 'i' };
            } else {
                // De lo contrario, buscar por valor exacto
                query[field] = q;
            }
        }

        // Ejecutar la consulta en la base de datos y poblar la referencia al director
        const series = await Serie.find(query).populate('director');

        if (series.length === 0) {
            // Si no se encuentran series, renderizar una vista de error personalizada
            return res.render('error', { message: 'No series found' });
        }
        
        // Renderizar la vista con las series encontradas
        res.render('serieSearch', { series });
    } catch (error) {
        console.error('Error searching series:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
