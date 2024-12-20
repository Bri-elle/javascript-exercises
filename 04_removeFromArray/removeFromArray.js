const removeFromArray = function (nums, ...removeValue) {

  // use the filter method
  const result = nums.filter((num) => !(removeValue.includes( num)));
  return result;
};
console.log(removeFromArray([1, 2, 3, 4], 3,6));
// Do not edit below this line
module.exports = removeFromArray;
