const { caesarCipher, decryptCaesarCipher } = require("./caesarCipher");

describe("caesarCipher()", () => {
  it("should return 'dssoh' when input is 'apple'", () => {
    expect(caesarCipher("apple", 3)).toBe("dssoh");
  });

  it("should return 'cheud' when input is 'zebra'", () => {
    expect(caesarCipher("zebra", 3)).toBe("cheud");
  });

  it("should return 'defgh-ijklm' when input is 'abcde-fghij'", () => {
    expect(caesarCipher("abcde-fghij", 3)).toBe("defgh-ijklm");
  });

  it("should return empty string when input is an empty string", () => {
    expect(caesarCipher("", 3)).toBe("");
  });
});

describe("decryptCaesarCipher()", () => {
  it("should return 'a' when input is 'd'", () => {
    expect(decryptCaesarCipher("d", 3)).toBe("a");
  });

  it("should return 'apple' when input is 'dssoh'", () => {
    expect(decryptCaesarCipher("dssoh", 3)).toBe("apple");
  });

  it("should return 'app-le' when input is 'dss-oh'", () => {
    expect(decryptCaesarCipher("dss-oh", 3)).toBe("app-le");
  });
});
