const deleteDuplicates = elementsArray => {
  if (elementsArray.length === 0) {
    return "Array is empty";
  } else if (elementsArray.length === 1) {
    return elementsArray;
  } else {
    //when array has more than 2 elements
    let currIndex = 0;
    for (let i = 1; i < elementsArray.length; i++) {
      console.log(elementsArray);
      console.log("currentIndex: ", currIndex, "i: ", i);
      console.log("length: ", elementsArray.length);
      if (elementsArray[i] === elementsArray[currIndex]) {
        elementsArray.splice(i, 1);
        elementsArray.push(0);
      } else {
        currIndex++;
      }
    }
    return elementsArray;
  }
};

module.exports = deleteDuplicates;

deleteDuplicates([2, 3, 5, 5, 7, 11, 11, 11, 13]);
