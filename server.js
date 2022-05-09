const express = require('express');
// const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path')
const exphbs = require('express-handlebars');
const session = require('express-session');
// const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.create({ helpers });
//change session.Store to match your website
const sequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    //change to describe your website
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// make sure you have a public folder if not delete this
app.use(express.static(path.join(__dirname, 'public')))
app.use(session(sess));

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on routes
// app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});