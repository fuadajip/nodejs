try {
    var fs = require('fs');
    var getStream = fs.createReadStream(__dirname +'\\'+ 'assets.txt','utf8');
    getStream.on('data', function(dataStream){
        console.log("Start Streaming");
        console.log(dataStream);
    });
} catch (error) {
    console.log(error);
}
