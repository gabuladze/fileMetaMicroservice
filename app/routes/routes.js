'use strict';

var express = require('express');
var router = express.Router();
var pagesController = require('../controllers/pagesController.js');

router.route("/")
  .get(pagesController.home);

module.exports = router;
