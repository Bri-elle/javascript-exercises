const getTheTitles = function (objs) {
	let result = [];
	objs.forEach((obj) => {
		result.push(obj.title);
	});
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
