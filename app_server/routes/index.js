var express = require('express');
var router = express.Router();
var ctrlFilms = require('../controllers/film');
//var ctrlOthers = require('../controllers/others');
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

//Take anonymous function and define it as a named function
//var homepageController = function (req, res) {
// res.render('index', { title: 'Express' });
//};
//Pass name of function through as a callback in route definition
/* GET home page. */
//router.get('/', homepageController);


/* Locations pages */
router.get('/', ctrlFilms.homelist);
router.get('/film', ctrlFilms.filmInfo);
router.get('/film/review/new', ctrlFilms.addReview);
module.exports = router;
