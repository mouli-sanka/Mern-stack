var express = require('express');
var router = express();
var things = require('./express3.js');
app.use('/mouli',things);
app.listen(3000);