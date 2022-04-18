const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const home = require('./router/homeRoutes');
const about = require('./router/aboutRoutes');
const catalog = require('./router/catalogRoutes');
const contact = require('./router/contactRoutes');
const search = require('./router/searchRoutes');
const users = require('./router/usersRoutes');
const app = express();

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', home);
app.use('/about', about);
app.use('/catalog', catalog);
app.use('/search', search);
app.use('/contact', contact);
app.use('/users', users);

module.exports = app;
