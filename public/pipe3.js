try {
    var http = require('http');
    var fs =  require('fs');

    var server = http.createServer(function(req, res){
        console.log('Request was made in : ' + req.url);
        res.writeHead(200,{'Content-Type' : 'text/plain'});
        var readStream = fs.createReadStream(__dirname+'/assets.txt','utf8');
        readStream.pipe(res);
    });

    server.listen(3000,'127.0.0.1');
    console.log('Server already running in port 3000');
} catch (error) {
    console.log(error)
}