var mongoose = require( 'mongoose' );

var reviewSchema = new mongoose.Schema({
 author: String,
 rating: {type: Number, required: true, min: 0, max: 5},
 reviewText: String,
 createdOn: {type: Date, default: Date.now}
});
var onAirSchema = new mongoose.Schema({
 day: String,
 hour: String,
 chaine: String
});
var filmSchema = new mongoose.Schema({
 title: {type: String, required: true},
 year: {type: String, required: true},
 rating: {type: Number, "default": 0, min: 0, max: 5},
 tmdb: {type: String, required: true},
 onAir: [onAirSchema],
 reviews: [reviewSchema]
});


  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

const FilmModel = mongoose.model('FilmModel',filmSchema,'films');

const Models = {FilmModel,};
exports.Models = Models;
