const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const home = require('./router/homeRoutes');
const about = require('./router/aboutRoutes');
const catalog = require('./router/catalogRoutes');
const contact = require('./router/contactRoutes');
const search = require('./router/searchRoutes');
const users = require('./router/usersRoutes');
const app = express();

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.use(session({
    secret: "authkeyforuser",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.DATABASE})
}))

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//DISPLAY MIDDLEWARE

app.use((req,res,next) => {
    const {userId} = req.session;

    if(userId) {
        res.locals = {
            displayLink: true
        }
    }
    else {
        res.locals = {
            displayLink: false
        }
    }
    next();
})

app.use('/', home);
app.use('/about', about);
app.use('/catalog', catalog);
app.use('/search', search);
app.use('/contact', contact);
app.use('/users', users);

module.exports = app;
