'use strict'

const express = require('express');
const routes =  require('../routes.js');

var app = express();

routes(app)

const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, function () {
    console.log('Listening on port', PORT)
})