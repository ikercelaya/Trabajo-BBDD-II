var express = require('express');
const initDB = require('./app/config/db');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();

var port = 2002;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

const directorRouters = require('./app/routes/index');
const actorRouters = require('./app/routes/index');
const documentalRouters = require('./app/routes/index');
const peliculaRouters = require('./app/routes/index');
const serieRouters = require('./app/routes/index');
const homeRouters = require('./app/routes/index');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(directorRouters);
app.use(actorRouters);
app.use(documentalRouters);
app.use(peliculaRouters);
app.use(serieRouters);
app.use(homeRouters);

app.set('port', port);

module.exports = app;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

initDB();