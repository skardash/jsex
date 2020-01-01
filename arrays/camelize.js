function camelize(str) {
	sa = str.split('');
	sai = sa.reduce(function(a, e, i) {
		if (e === '-')
			a.push(i);
		return a;
	}, []);   
	sai.reverse();
	sai.forEach((item, index, array) => {
		//alert(`${item} имеет позицию ${index} в ${array}`);
		if (sa.length-1 > item) {
			sa[item+1] = sa[item+1].toUpperCase();
			sa.splice(item,1);
		}
	});
	return (sa.join(''));
}