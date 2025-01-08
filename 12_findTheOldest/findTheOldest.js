const findTheOldest = function (people) {
	// calculate age
	let max = 0;
	let oldest = null;
	let currentYear = new Date().getFullYear();
	people.forEach((person) => {
		let yearOfDeath = person.yearOfDeath || currentYear;

		age = yearOfDeath - person.yearOfBirth;

		if (age > max) {
			max = age;
			oldest = person;
		}
	});
	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
