let calculator = {
	read: function() {
		this.x = prompt("x", 0);
		this.y = prompt("y", 0);
	};
	
	sum: function() {
		return this.x + this.y;
	};
	
	mul: function() {
		return this.x*this.y;
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
