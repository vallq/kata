const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("should return [0,1] when sum is 9 and input array is [2,7]", () => {
    const expectedSum = 9;
    const array = [2, 7];
    expect(twoSum(array, expectedSum)).toEqual([0, 1]);
  });

  it("should return [0,2] when sum is 9 and input array is [2,1,7]", () => {
    const expectedSum = 9;
    const array = [2, 1, 7];
    expect(twoSum(array, expectedSum)).toEqual([0, 2]);
  });

  it("should return No Valid Pair when sum is 3 and input array is [2, 7, 11, 15]", () => {
    const expectedSum = 3;
    const array = [2, 7, 11, 15];
    expect(twoSum(array, expectedSum)).toBe("No Valid Pair!");
  });

  it("should return [2,3] when sum is 9 and input array is [15, 11, 7, 2]", () => {
    const expectedSum = 9;
    const array = [15, 11, 7, 2];
    expect(twoSum(array, expectedSum)).toEqual([2, 3]);
  });

  it("should return [2,3] when input array is [15,11,3,3] and sum is 6", () => {
    const expectedSum = 6;
    const array = [15, 11, 3, 3];
    expect(twoSum(array, expectedSum)).toEqual([2, 3]);
  });

  it("should return [0, 8] when input array is [15,11,3,1, 4, 6, 2, 8, 9] and sum is 24", () => {
    const expectedSum = 24;
    const array = [15, 11, 3, 1, 4, 6, 2, 8, 9];
    expect(twoSum(array, expectedSum)).toEqual([0, 8]);
  });

  it("should return [0, 3] when input array is [-3, -2, -1, -4] and sum is -7", () => {
    const expectedSum = -7;
    const array = [-3, -2, -1, -4];
    expect(twoSum(array, expectedSum)).toEqual([0, 3]);
  });

  it("should return [0, 3] when input array is [-3, -2, -1, 4] and sum is -7", () => {
    const expectedSum = 1;
    const array = [-3, -2, -1, 4];
    expect(twoSum(array, expectedSum)).toEqual([0, 3]);
  });
});
