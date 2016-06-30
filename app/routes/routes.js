'use strict';

var express = require('express');
var router = express.Router();
var pagesController = require('../controllers/pagesController.js');
var fileMetaController = require('../controllers/fileMetaController.js');

router.route("/")
  .get(pagesController.home)
  .post(fileMetaController.upload.single('file'), fileMetaController.process);

module.exports = router;
