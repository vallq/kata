const deleteDuplicates = require('./deleteDuplicates');

describe("Delete Duplicates", () => {
  it("should return true when 1 === 1", () => {
    expect(1).toBe(1);
  });

  it("should return [] when input is []", () => {
    expectedOutput = "Array is empty";
    elementsArray = [];
    expect(deleteDuplicates(elementsArray)).toEqual(expectedOutput);
  });

  it("should return [0] when input is [0]", () => {
    expectedOutput = [0];
    elementsArray = [0];
    expect(deleteDuplicates(elementsArray)).toEqual(expectedOutput);
  });

  it("should return [0,1,0] when input is [0, 1, 1]", () => {
    expectedOutput = [0, 1, 0];
    elementsArray = [0, 1, 1];
    expect(deleteDuplicates(elementsArray)).toEqual(expectedOutput);
  });

  it("should return [0,1,0,0] when input is [0, 1, 1, 1]", () => {
    expectedOutput = [0, 1, 0, 0];
    elementsArray = [0, 1, 1, 1];
    expect(deleteDuplicates(elementsArray)).toEqual(expectedOutput);
  });

  it(`should return [2,3,5,7,11,13,0,0,0] when input is [2,3,5,5,7,11,11,11,13]`, () => {
    expectedOutput = [2,3,5,7,11,13, 0, 0, 0];
    elementsArray = [2,3,5,5,7,11,11,11,13];
    expect(deleteDuplicates(elementsArray)).toEqual(expectedOutput);
  });
});
