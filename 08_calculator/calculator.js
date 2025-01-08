const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	let total = 0;
	arr.forEach((num) => (total += num));
	return total;
};

const multiply = function (arr) {
	let total = 1;
	arr.forEach((num) => (total *= num));
	return total;
};

const power = function (num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function (num) {
	let result = 1;
	if (num == 1 || num == 0) return 1;
	for (i = num; i > 0; i--) {
		result *= i;
	}
	return result;
};

console.log(factorial(10));
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};

// console.log(sum([1, 2, 3]));
