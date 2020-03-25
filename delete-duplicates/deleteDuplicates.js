function deleteDuplicates(elementsArray) {
  if (elementsArray.length === 0) {
    return "Array is empty";
  } else if (elementsArray.length === 1) {
    return 1;
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

    const numOfValidElements = elementsArray.length;

    for (let i = 0; i < counter; i++) {
      elementsArray.push(0);
    }
    return numOfValidElements;
  }
}

module.exports = deleteDuplicates;
