const sumAll = function (start, end) {
	// initialize variables
	let sum = 0;
	// error handling
	if (
		start < 0 ||
		end < 0 ||
		!Number.isInteger(start) ||
		!Number.isInteger(end)
	)
		return "ERROR";
	if (start > end) {
		// start and end values
		[start, end] = [end, start]; //swapping values
	}

	// iterate through
	for (let index = start; index <= end; index++) {
		sum += index;
	}

	// return sum
	return sum;
};

console.log(sumAll(6, 1));
// Do not edit below this line
module.exports = sumAll;
