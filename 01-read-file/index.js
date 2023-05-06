const fs = require('fs');
const path = require('path');
const filePath = path.join('01-read-file', 'text.txt');
const readStream = fs.createReadStream(filePath, 'utf-8');

readStream.on('data', function(chunk) {
  console.log(chunk);
});