'use strict';

var multer = require('multer');
var upload = multer({ dest: '../../uploads/' });

exports.upload = upload;

exports.process = function(req, res) {
  var result = {
    "size": req.file.size
  };
  res.json(result);
};
