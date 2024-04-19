const express = require('express');
const initDB = require('./config/db'); 
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = 2002;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, './app/views'));

const homeRouters = require('./app/routes/home');
const actoresRouters = require('./app/routes/actores');
const directoresRouters = require('./app/routes/directores');
const documentalesRouters = require('./app/routes/documentales');
const peliculasRouters = require('./app/routes/peliculas');
const seriesRouters = require('./app/routes/series');


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(homeRouters);
app.use(actoresRouters);
app.use(directoresRouters);
app.use(documentalesRouters);
app.use(peliculasRouters);
app.use(seriesRouters);


app.listen(port, () => {
    console.log(`La aplicaccion esta en linea en el puerto  ${port}`);
})

initDB();
