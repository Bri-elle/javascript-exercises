const repeatString = function (text, repetitionValue) {
	if (repetitionValue < 0) return "ERROR";
	const textArray = [];
	for (let index = 0; index < repetitionValue; index++) {
		textArray.push(text);
	}
	return textArray.join("");
};

// Do not edit below this line
module.exports = repeatString;
