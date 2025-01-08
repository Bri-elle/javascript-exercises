const fibonacci = function (num) {
	length = +num;
	if (length < 0) return "OOPS";
	if (length == 0) return 0;
	if (length == 1 || length == 2) return 1;

	let series = [1, 1];
	let value = 0;
	for (let index = 2; index < length; index++) {
		value = series[index - 2] + series[index - 1];
		series.push(value);
	}
	return series[length - 1];
};
// Do not edit below this line
module.exports = fibonacci;
console.log(fibonacci("1"));
