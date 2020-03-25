function deleteDuplicates(elementsArray) {
  if (elementsArray.length === 0) {
    return "Array is empty";
  } else if (elementsArray.length === 1) {
    return elementsArray;
  } else {
    let currIndex = 0;
    let nextIndex = 1;
    let counter = 0;

    while (currIndex < elementsArray.length) {
      if (elementsArray[currIndex] === elementsArray[nextIndex]) {
        elementsArray.splice(nextIndex, 1);
        counter++;
      } else {
        currIndex++;
        nextIndex++;
      }
    }

    for (let i = 0; i < counter; i++) {
      elementsArray.push(0);
    }
    return elementsArray;
  }
}

module.exports = deleteDuplicates;
