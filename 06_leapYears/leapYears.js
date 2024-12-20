const leapYears = function (year) {
	// year is divisible by 4
	if (year % 4 === 0 && year % 100 !== 0) return true;
	if (year % 4 === 0 && year % 400 === 0) return true;

	return false;

	// year is divisible by 100 and 400
};

// Do not edit below this line
module.exports = leapYears;

console.log(leapYears(2000));
console.log(leapYears(1985));
