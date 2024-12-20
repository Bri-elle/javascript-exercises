const Converter = 32;
const convertToCelsius = function (temp) {
	//  32 °F = 1°C

	let result = Math.round((temp - Converter) * (5 / 9));
	result = Math.round(result * 10) / 10;

	return result;
};

const convertToFahrenheit = function (temp) {
	// 1°C = 32 °F
	//(0°C × 9/5) + 32
	return temp * (9 / 5) + Converter;
	result = Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};

console.log(convertToCelsius(32));
