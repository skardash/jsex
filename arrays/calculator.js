function Calculator() {
	this.calculate = function(str) {
		if (str.includes('+')) {
			num = str.split('+');
			console.log(num);
			if (num.length == 2) {
				n1 = Number(num[0]);
				n2 = Number(num[1]);
				return (n1 + n2);
			} else {
				console.log('wrong format');
			}
		} else if (str.includes('-')) {
			num = str.split('-');
			if (num.length == 2) {
				n1 = Number(num[0]);
				n2 = Number(num[1]);
				return (n1 - n2);
			} else {
				console.log('wrong format');
			}
		} else if  {
			
		}
	}
	ops = [];
	
	this.addMethod(name, func) {
		ops[name] = func;
	}
}
 
// let calc = new Calculator;
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
