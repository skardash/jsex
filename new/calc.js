function Calculator() {
	this.read = function() {
		this.x = parseInt(prompt("x", 0));
		this.y = parseInt(prompt("y", 0));
	}
	this.sum = function() {
		return this.x + this.y;
	}
	this.mul = function() {
		return this.x * this.y;
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
