var createError = require('http-errors');
var express = require('express');
var initDB = require('./modules/mongodb/mongodb.module').init;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const port = 3001;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

const directorRouters = require('./routes/directorRoutes');
const actorRouters = require('./routes/actorRoutes');
const documentalRouters = require('./routes/documentalRoutes');
const peliculaRouters = require('./routes/peliculaRoutes');
const serieRouters = require('./routes/serieRoutes');
const { init } = require('./models/Actor');

app.use(cookieParser.json({limit: '50mb'}));
app.use(cookieParser.urlencoded({extended: true}));

app.use(directorRouters);
app.use(actorRouters);
app.use(documentalRouters);
app.use(peliculaRouters);
app.use(serieRouters);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

initDB();