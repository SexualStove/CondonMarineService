const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const cors = require('cors');
const morgan = require('morgan');
const https = require("https"),
    fs = require("fs");

const {sequelize} = require('./models');

const config = require('./config/config');
const options = {
    //key: fs.readFileSync("/etc/letsencrypt/live/bepaid.co.nz/privkey.pem"),
    //cert: fs.readFileSync("/etc/letsencrypt/live/bepaid.co.nz/fullchain.pem") // thes
};


const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
//View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
require('./routes')(app);


app.listen(process.env.PORT || 8081);



console.log("Listening");

