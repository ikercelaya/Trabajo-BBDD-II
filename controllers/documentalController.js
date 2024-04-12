const Documental = require('../models/Documental');

exports.getAllDocumentales = async (req, res) => {
    try {
        const documentales = await Documental.find();
        res.render('documentales', { documentales });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve documentales');
    }
}

exports.searchDocumental = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Verificar si q tiene un valor
        if (q) {
            // Verificar si q es un número
            const isNumber = !isNaN(q);

            // Construir la consulta dinámicamente según el campo seleccionado y el tipo de búsqueda
            if ((field === 'fecha_estreno' || field === 'id_director') && isNumber) {
                // Si el campo es 'fecha_estreno' o 'id_director' y q es un número, buscar por valor exacto
                query[field] = q;
            } else {
                // De lo contrario, buscar como texto (ignorando mayúsculas/minúsculas)
                query[field] = { $regex: q, $options: 'i' };
            }
        }

        // Ejecutar la consulta en la base de datos
        const documentales = await Documental.find(query);

        if (documentales.length === 0) {
            // Si no se encuentran documentales, renderizar una vista de error personalizada
            return res.render('error', { message: 'No documentales found' });
        }

        // Renderizar la vista con los documentales encontrados
        res.render('documentalesSearch', { documentales });
    } catch (error) {
        console.error('Error searching documentales:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
