const reverseString = function (text) {
	let newString = "";
	for (let i = text.length - 1; i >= 0; i--) {
		newString += text[i];
	}
	return newString;
};

// Do not edit below this line
module.exports = reverseString;
