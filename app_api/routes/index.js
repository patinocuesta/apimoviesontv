var express = require('express');
var router = express.Router();
var ctrlFilms = require('../controllers/films');
var ctrlReviews = require('../controllers/reviews');
// films
router.get('/films', ctrlFilms.filmsListByDateOnAir);
router.post('/films', ctrlFilms.filmsCreate);
router.get('/films/:filmid', ctrlFilms.filmsReadOne);
router.put('/films/:filmid', ctrlFilms.filmsUpdateOne);
router.delete('/films/:filmid', ctrlFilms.filmsDeleteOne);
// reviews
router.post('/films/:filmid/reviews', ctrlReviews.reviewsCreate);
router.get('/films/:filmid/reviews/:reviewid',
ctrlReviews.reviewsReadOne);
router.put('/films/:filmid/reviews/:reviewid',
ctrlReviews.reviewsUpdateOne);
router.delete('/films/:filmid/reviews/:reviewid',
ctrlReviews.reviewsDeleteOne);
module.exports = router;
