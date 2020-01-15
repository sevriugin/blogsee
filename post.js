const date = require(__dirname + "/date.js");

module.exports = Post;

function Post(title, content) {
  this.id = Math.floor(Math.random() * 100000);
  this.title = title;
  this.content = content;
  this.date = date.getDate();

  this.short = function() {
    return this.content.split(" ", 50).join(" ");
  }
}
