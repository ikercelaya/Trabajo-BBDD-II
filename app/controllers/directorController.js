const Director = require('../models/Director');

exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.render('directors', { directors });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve directors');
    }
}

exports.searchDirectors = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Verificar si q tiene un valor
        if (q) {
            // Verificar si q es un número
            const isNumber = !isNaN(q);

            // Construir la consulta dinámicamente según el campo seleccionado y el tipo de búsqueda
            if (field === 'fecha_nacimiento' && !isNumber) {
                // Si el campo es 'fecha_nacimiento' y q no es un número, buscar como texto (ignorando mayúsculas/minúsculas)
                query[field] = { $regex: q, $options: 'i' };
            } else {
                // De lo contrario, buscar por valor exacto
                query[field] = q;
            }
        }

        // Ejecutar la consulta en la base de datos
        const directors = await Director.find(query);

        if (directors.length === 0) {
            // Si no se encuentran directores, renderizar una vista de error personalizada
            return res.render('error', { message: 'No directors found' });
        }
        
        // Renderizar la vista con los directores encontrados
        res.render('directorSearch', { directors });
    } catch (error) {
        console.error('Error searching directors:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
