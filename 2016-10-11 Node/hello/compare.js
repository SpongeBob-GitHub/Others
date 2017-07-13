var arr = [22, 2, 3, 445, 3, 44];

function compareAB(a, b) {
	// if (a>b) {
	// 	return 1;
	// } else if (a===b) {
	// 	return 0;
	// } else {
	// 	return -1;
	// }
	return a>b;
}

arr.sort(compareAB);

console.log('after sort:', arr);