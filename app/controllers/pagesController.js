'use strict';

// Basically replaces __dirname, as it is not available on Heroku
process.env.PWD = process.cwd();
var path = require('path');


exports.home = function(req, res) {
  var page = path.join(process.env.PWD, "/public/index.html");
  res.sendFile(page, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(err.status);
    } else {
      console.log("SENT " + page);
    }
  });
}
