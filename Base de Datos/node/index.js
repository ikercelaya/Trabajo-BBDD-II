import mongoose from 'mongoose';
import { getdata } from './api.js';

const { Schema, model } = mongoose;

let uri = 'mongodb://localhost:27017/ApiExpress';

// Trayendo la data del API
const query = await getdata().then(data => {
    return data;
}).catch(error => {
    console.log('Error obteniendo datos del API');
    process.exit(0);
});

// Conectando a la base de datos
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(uri, options).then(
    () => { console.log('Conexión exitosa a la base de datos') },
    err => { 
        console.log('No se ha podido conectar a la base de datos');
        process.exit(0);
    }
);

// Definiendo esquemas y modelos en Mongoose
//Por terminar