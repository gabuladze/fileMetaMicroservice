'use strict';

var express = require('express');
var app = express();
var routes = require('./app/routes/routes.js');
var port = process.env.PORT || 3500;

app.use(routes);

app.listen(port, function() {
  console.log("Magic on port " + port);
});
