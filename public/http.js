var http = require('http'); //Call http module

var server  = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hi buddy');
});

server.listen(3000,'127.0.0.1');
console.log('Your server listening on port 3000');



//Another practice
