/* GET 'home' page */
module.exports.homelist = function(req, res){
 res.render('index', { title: 'Home' });
};
/* GET 'Location info' page */
module.exports.filmInfo = function(req, res){
 res.render('index', { title: 'Film info' });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res){
 res.render('index', { title: 'Add film review' });
};
