const twoSum = (array, sum) => {
  for (i = 0; i < array.length; i++) {
    const remainder = sum - array[i];
    const remainderIndex = array.lastIndexOf(remainder);
    const isFound = remainderIndex >= 0;
    if (isFound) {
      let indexArray = [i, remainderIndex];
      return indexArray;
    }
  }
  return "No Valid Pair!";
};

module.exports = twoSum;
