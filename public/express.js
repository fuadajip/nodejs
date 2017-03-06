var express = require('express');

var app = express();

app.get('/', function(req,res){
  res.send('This is home guys');
})
app.get('/contact', function(req, res){
  res.send('This is contact');
})
app.listen(3000);
