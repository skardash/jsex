function pow(x, n) {
	let result = 1;
	if (n < 0) return NaN;
	if (Math.round(n) != n) return NaN;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

describe("pow", function() {

	describe("возводит x в степень 3", function() {
		
		function makeTest(x) {
			let expected = x * x * x;
			it(`${x} в степени 3 будет ${expected}`, function() {
				assert.equal(pow(x, 3), expected);
			});
		}
		for (let x = 1; x <= 5; x++) {
			makeTest(x);
		}
		
	});

	describe("возводит x в степень 4", function() {
		function makeTest(x) {
			let expected = x * x * x * x;
			it(`${x} в степени 3 будет ${expected}`, function() {
				assert.equal(pow(x, 4), expected);
			});
		}
		for (let x = 1; x <= 5; x++) {
			makeTest(x);
		}
	});
	
	describe("возводит x в степень n", function() {
		function makeTest(x,n) {
			let expected = Math.pow(x,n);
			it(`${x} в степени ${n} будет ${expected}`, function() {
				assert.equal(pow(x,n), expected);
			})
		}
		for (let x = 1; x <= 5; x++) {
			for (let n = 4; n <= 6; n++) {
				makeTest(x,n);
			}	
		}
	});
	
	describe("pow", function() {
		it("для отрицательных n возвращает NaN", function() {
			assert.isNaN(pow(2, -1));
		});

		it("для дробных n возвращает NaN", function() {
			assert.isNaN(pow(2, 1.5));
		});
	})

	it("Возводит 5 в степень 1", function() {
		assert.equal(pow(5, 1), 5);
	});
	
	it("Возводит 10 в степень 5", function() {
		let result = 10*10*10*10*10;
		assert.equal(pow(10, 5), result);
	});

});