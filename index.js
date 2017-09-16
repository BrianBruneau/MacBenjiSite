var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var User = require('./models/user');
var ejsLayouts = require("express-ejs-layouts");
var peopleCtrl = require("./controllers/people");



var app = express();

compileSass = require('express-compile-sass'),
root = process.cwd();

app.use(compileSass({
    root: root,
    sourceMap: true, // Includes Base64 encoded source maps in output css 
    sourceComments: true, // Includes source comments in output css 
    watchFiles: true, // Watches sass files and updates mtime on main files for each change 
    logToConsole: false // If true, will log to console.error on errors 
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(ejsLayouts);



app.use("/people", peopleCtrl);


app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/+++++++MAC', { useMongoClient: true });



app.get('/', function(req, res) {
  res.render("index");
});

app.get('/single', function(req, res) {
    res.render("promoSingle");
});

app.get('/gallery', function(req, res) {
  res.render("gallery");
});

app.get('/music', function(req, res) {
  res.render("music");
});

app.get('/about', function(req, res) {
  res.render("about");
});

app.get('/members', function(req, res) {
  res.render("members");
});

app.get('/contact', function(req, res) {
  res.render("contact");
});

 app.listen(process.env.PORT || 3000)