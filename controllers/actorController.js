const Actor = require('../models/Actor');

exports.getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find();
        res.render('actors', { actors });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve actors');
    }
}

exports.searchActors = async (req, res) => {
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
        const actors = await Actor.find(query);

        if (actors.length === 0) {
            // Si no se encuentran actores, renderizar una vista de error personalizada
            return res.render('error', { message: 'No actors found' });
        }
        
        // Renderizar la vista con los actores encontrados
        res.render('actorSearch', { actors });
    } catch (error) {
        console.error('Error searching actors:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
