const palindromes = function (words) {
	let editedWords = words.replace(/\s/g, "").replace(/[#!'.,]/g, "");
	editedWords = editedWords.toLowerCase();
	let reversedWords = editedWords.split("").reverse().join("");

	return editedWords === reversedWords;
};

// Do not edit below this line
module.exports = palindromes;
