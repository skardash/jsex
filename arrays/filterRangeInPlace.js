function filterRangeInPlace(arr, a, b) {
	del = [];
	arr.forEach(function(item, index, array) {
		if (item > b || item < a) del.push(index);
	});
	del = del.reverse();
	del.forEach(function(item, index, array) {
		arr.splice(item,1);
	});
	return;
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
