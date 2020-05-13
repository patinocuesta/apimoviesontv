const mongoose = require( 'mongoose' );
var gracefulShutdown;
const option = {
                keepAlive: 300000,
                connectTimeoutMS: 30000,
                useNewUrlParser: true,
              };
var dbURI ='mongodb+srv://mongoFilm:Bebitos2013@clusterapimovies-v32xr.mongodb.net/apimoviesdb?retryWrites=true&w=majority';
mongoose.connect(dbURI);
/*
const MongoClient = require('mongodb').MongoClient;
const dbURI = "mongodb+srv://mongoFilm:Bebitos2013@clusterapimovies-v32xr.mongodb.net/apimoviesdb?retryWrites=true&w=majority";
const client = new MongoClient(dbURI, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("apimoviesdb").collection("films");
 // perform actions on the collection object
  client.close();
});
*/

/*
const MongoClient = require('mongodb').MongoClient;
const dbURI = "mongodb+srv://mongoFilm:Bebitos2013@clusterapimovies-v32xr.mongodb.net/apimoviesdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("apimoviesdb").collection("films");
  // perform actions on the collection object
  client.close();
});
*/
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function () {
  gracefulShutdown('SIGUSR2 nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('SIGINT app termination', function () {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('SIGTERM app shutdown', function () {
    process.exit(0);
  });
});

//exports.connect = connect;
require('./filmModel');
