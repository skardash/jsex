let calculator = {
	read: function() {
		this.x = parseInt(prompt("x", 0));
		this.y = parseInt(prompt("y", 0));
	},
	
	sum: function() {
		return this.x + this.y;
	},
	
	mul: function() {
		return this.x*this.y;
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
