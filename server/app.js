var express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');

const config = require('./config/config');

const corsOptions = {
    origin: true,
    credentials: true,
};

var app = express();
//app.options('*', cors(corsOptions));
//app.options('*', cors(corsOptions));

app.use(morgan('combined'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

//View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
require('./routes')(app);
app.listen(process.env.PORT || 8081);



console.log("Listening");

