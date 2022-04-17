const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const home = require('./router/homeRoutes');
const about = require('./router/aboutRoutes');
const catalog = require('./router/catalogRoutes');
const contact = require('./router/contactRoutes');
const search = require('./router/searchRoutes');

app.use('/', home);
app.use('/about', about);
app.use('/catalog', catalog);
app.use('/search', search);
app.use('/contact', contact);


app.listen(3000, () => console.log(`Server is running💋`));




