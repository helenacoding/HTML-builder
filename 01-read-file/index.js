const fs = require('fs');

const read_text_file = fs.readFile('01-read-file/text.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log();