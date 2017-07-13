//readfile.js

console.log('异步读取文件API');
var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err, data) {
	// body...
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
console.log('end1.');

/*
console.log('同步读取文件API');
var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end2.');
*/