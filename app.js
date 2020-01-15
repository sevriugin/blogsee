const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const content = require(__dirname + "/content.json");
const Post = require(__dirname + "/post.js");

const app = express();

const posts = [
  new Post("Lorem ipsum dolor sit amet", content.home),
  new Post("Lorem ipsum dolor sit amet", content.about),
  new Post("Lorem ipsum dolor sit amet", content.contact)
];

function getPostById(id) {

  let result = undefined;
  posts.forEach((post) => {
    if (post.id == id) {
      result = post;
    }
  });
  return result;
}

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Blog',
    posts
  });
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'Contact',
    content: content.contact
  });
});

app.get('/about', function(req, res) {
  res.render('about', {
    title: 'About',
    content: content.about
  });
});

app.get('/post/:id', function(req, res) {
  let id = req.params.id;
  console.log(`post id ${id}`);

  let post = getPostById(id);
  if (post) {
    res.render('post', {
      title: post.title,
      post
    });
  } else {
    res.sendStatus(500);
  }
});

app.get('/compose', function(req, res) {
  res.render('compose', {
    title: 'Compose'
  });
});

app.post('/', function(req, res) {
  console.log(req.body);

  let newPost = new Post(req.body.title, req.body.content);
  posts.push(newPost);

  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function() {
  console.log(`My Personal Blog App Server is up @ port # ${process.env.PORT || 3000}`);
});
