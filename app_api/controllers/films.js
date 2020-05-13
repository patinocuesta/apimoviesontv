const mongoose = require('mongoose');
const Films = mongoose.model('FilmModel');

var sendJsonResponse = function(res, status, content) {
 res.status(status);
 res.json(content);
};
module.exports.filmsListByDateOnAir = function (req, res) {
 sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.filmsCreate = function (req, res) {
  Films.create({
   title: req.body.title,
   year: req.body.year,
   tmdb: req.body.tmdb,
   onAir: [{
   day: req.body.onAir.day,
   hour: req.body.onAir.hour,
   chaine: req.body.onAir.chaine,
   }]
}, function(err, film) {
if (err) {
sendJsonResponse(res, 400, err);
} else {
sendJsonResponse(res, 201, film);
}
});
};
module.exports.filmsReadOne = function (req, res) {
 sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.filmsUpdateOne = function (req, res) {
 sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.filmsDeleteOne = function (req, res) {
 sendJsonResponse(res, 200, {"status" : "success"});
};
