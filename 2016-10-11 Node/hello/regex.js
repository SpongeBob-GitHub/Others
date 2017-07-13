var s = 'this is a string!'

console.log(s.replace('s', 'z'));

console.log('replace with regex /s/g: ', s.replace(/s/g, 'z'));

console.log('replace with regex /s/gi: ', s.replace(/s/gi, 'z'));

console.log('replace with regex /s/gi: ', s.replace(/s/gi, function(val) {
	return val += '*';
}));