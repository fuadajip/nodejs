var express = require('express');
var app = express();

//This to define express route params

app.get('/', function(req,res){
  res.send("This is home");
});

app.get('/user/:id', function(req,res){
  res.send('Your user id is ' + req.params.id);
})

app.listen(3000);
