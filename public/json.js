var http = require('http');

var server = http.createServer(function(req,res){
  console.log('Request in : ' + req.url);
  res.writeHead(200,{'Content-Type' : 'application/json'});
  var myJSON = {
    name : 'Fuad Aji Pratomo',
    github : 'fuadajip',
    linkedin : 'fuadajip'
  };

  res.end(JSON.stringify(myJSON));
});

server.listen(3000,'127.0.0.1');
console.log('Your server listening on port 3000');
