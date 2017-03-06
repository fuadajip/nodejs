var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

app.set('view engine', 'ejs');

app.get('/buy', function(req,res){
  res.render('buy');
});
app.post('/buy', urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('cart', {data : req.body});
});


app.listen(3000);
