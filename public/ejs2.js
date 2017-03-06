var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/detail', function(req,res){
  // console.log(req.query);
  res.render('detail', {qs : req.query});
})

app.listen(3000);
