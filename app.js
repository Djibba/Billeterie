require('dotenv').config();
require('./db/connect');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const logger = require('morgan');
const fs = require('fs');
const billet = require('./routes/billetRoute')

const app = express();

app.use(express.static('public'));
app.use(logger('dev'));
var accessLogStream = fs.createWriteStream(__dirname + '/logs/backoffice.log', { flags: 'a' })
app.use(logger('combined', { "stream": accessLogStream }));
app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(session({
    secret: 'billeterie',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/', billet);

module.exports = app;