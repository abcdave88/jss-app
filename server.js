console.log('Server live');

var express = require('express');
var app = express();
var path = require('path');

var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

var morgan = require('morgan');
var session = require('express-session');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
  res.render('index');
});

server.listen(port, function(){
  console.log('Server started on localhost3000');
})