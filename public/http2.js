var http = require('http');

http.createServer(function(req,res){
    var headers = req.headers;
    var method = req.method;
    var url = req.url;
    var body = [];

    req.on('error', function(err){
        console.log(err);
    });

    req.on('data',function(getdata){
        body.push(getdata);
    });

    req.on('end', function(){
        body = Buffer.concat(body).toString();
        var responseBody = {
            headers: headers,
            method: method,
            url: url,
            body: body
        };

        res.write(JSON.stringify(responseBody));
        res.end();
    });

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'X-Powered-By': 'fuadajip',
    });
}).listen(3000,'127.0.0.1');
console.log('Your server listening on port 3000');