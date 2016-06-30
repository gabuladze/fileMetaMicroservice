'use strict';

var upload = require('multer')();

exports.upload = upload;

exports.process = function(req, res) {
  var result = {
    "size": req.file.size
  };
  res.json(result);
};
