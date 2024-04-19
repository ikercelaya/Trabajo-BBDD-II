exports.getData = async (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
