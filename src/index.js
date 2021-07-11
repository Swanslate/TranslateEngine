const express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var ejs = require('ejs');
var bodyParser = require('body-parser');
const translate = require('@vitalets/google-translate-api');
const route = require('./Routes/index.js');
const app = express();


app.set('view engine', 'ejs');
app.use(cors());

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 5000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 5000))
});