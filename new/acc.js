function Accumulator(starting_value) {
	this.value = starting_value;
	
	this.read = function() {
		this.value += parseInt(prompt("add to current value:", 0));
	}
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений