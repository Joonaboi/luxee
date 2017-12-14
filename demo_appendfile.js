var fs = require('fs');

fs.appendFile('./tekstit/mynewfile1.txt', 'Titties sisältönä!', function (err) {
if (err) throw err;
console.log('Tallessa!');
});