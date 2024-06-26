const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/netflix';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a la base de datos de Netflix');
    } catch (error) {
        console.log('Error al conectar a la base de datos de Netflix:', error.message);
    }
}

module.exports = connectDB;
