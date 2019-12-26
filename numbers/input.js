function read_number() {
	do {
		n = prompt("add to current value:", 0);
	} while (isNaN(n));
	return +n;
}

alert(read_number());
		