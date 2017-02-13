try {
    var fs = require('fs');
    var getStream = fs.createReadStream(__dirname +'\\'+ 'assets.txt','utf8');
    var storeStream = fs.createWriteStream(__dirname +'\\'+ 'assets2.txt','utf8');
    getStream.on('data', function(dataStream){
        console.log("Start Streaming");
        console.log(dataStream);
        storeStream.write(dataStream);
    });
} catch (error) {
    console.log(error);
}
