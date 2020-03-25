const {
  isValidPassword,
  isValidPasswordRegex
} = require("./passwordValidation.js");

describe("passwordValidation.js", () => {
  describe("default password validation", () => {
    it("should return true if valid password", () => {
      expect(isValidPassword("aBcd1234")).toBeTruthy();
    });

    it("should return false if Password < 8", () => {
      expect(isValidPassword("1Dd5fh")).toBeFalsy();
    });

    it("should return true if Password > 8", () => {
      expect(isValidPassword("1Dd5fhsjfvj")).toBeTruthy();
    });

    it("should return false if there are no digits", () => {
      expect(isValidPassword("HDdgfhsjfvj")).toBeFalsy();
    });

    it("should return true if there are 1 or more digits", () => {
      expect(isValidPassword("H123151Ddgfhsjfvj")).toBeTruthy();
    });

    it("should contain at least one lowercase Eng character", () => {
      expect(isValidPassword("ABCD1234")).toBeFalsy();
    });

    it("should contain at least one lowercase Eng character", () => {
      expect(isValidPassword("aBcd1234")).toBeTruthy();
    });

    it("should contain at least one Uppercase Eng character", () => {
      expect(isValidPassword("abcd1234")).toBeFalsy();
    });

    it("should contain at least one Uppercase Eng character", () => {
      expect(isValidPassword("aBcd1234")).toBeTruthy();
    });
  });

  describe("regex password validation", () => {
    it("should return true if valid password", () => {
      expect(isValidPasswordRegex("aBcd1234")).toBeTruthy();
    });

    it("should return false if Password < 8", () => {
      expect(isValidPasswordRegex("1Dd5fh")).toBeFalsy();
    });

    it("should return true if Password > 8", () => {
      expect(isValidPasswordRegex("1Dd5fhsjfvj")).toBeTruthy();
    });

    it("should return false if there are no digits", () => {
      expect(isValidPasswordRegex("HDdgfhsjfvj")).toBeFalsy();
    });

    it("should return true if there are 1 or more digits", () => {
      expect(isValidPasswordRegex("H123151Ddgfhsjfvj")).toBeTruthy();
    });

    it("should contain at least one lowercase Eng character", () => {
      expect(isValidPasswordRegex("ABCD1234")).toBeFalsy();
    });

    it("should contain at least one lowercase Eng character", () => {
      expect(isValidPasswordRegex("aBcd1234")).toBeTruthy();
    });

    it("should contain at least one Uppercase Eng character", () => {
      expect(isValidPasswordRegex("abcd1234")).toBeFalsy();
    });

    it("should contain at least one Uppercase Eng character", () => {
      expect(isValidPasswordRegex("aBcd1234")).toBeTruthy();
    });
  });
});
