//Pipe used to make a pipe from readable stream into writeable stream in this case.

try {
    var fs = require('fs');
    var getStream = fs.createReadStream(__dirname +'\\'+ 'assets.txt','utf8');
    var storeStream = fs.createWriteStream(__dirname +'\\'+ 'assets2.txt','utf8');
   
   getStream.pipe(storeStream);
} catch (error) {
    console.log(error);
}
