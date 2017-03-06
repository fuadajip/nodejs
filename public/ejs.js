var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/error', function(req,res){
  res.sendFile(__dirname + '/404.html');
})

app.get('/profile/:id', function(req,res){
  var myJSON = {
    name : 'Fuad Aji Pratomo',
    github : 'fuadajip',
    linkedin : 'fuadajip'
  };
  res.render('index', {id : req.params.id, data: myJSON});
})

app.listen(3000);
