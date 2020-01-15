const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home', { title : 'Home Screen' });
});

app.get('/contact', function(req, res) {
  res.render('contact', { title : 'Contact Screen' });
});
app.get('/about', function(req, res) {
  res.render('about', { title : 'About Screen' });
});

app.listen(process.env.PORT || 3000, function() {
  console.log(`My Personal Blog App Server is up @ port # ${process.env.PORT || 3000}`);
});
