
Create 2 function, caesarCipher and decryptCaesarCipher
expect(caesarCipher("apple", 3)).toBe("dssoh");
expect(decryptCaesaeCipher("dssoh", 3)).toBe("apple");
expect(caesarCipher("abcde-fghij", 3)).toBe("defgh-ijklm"); 
// other characters should be maintained*/

const alphabetString = "abcdefghijklmnopqrstuvwxyz";
const letterArray = alphabetString.split("");
let outputCharArray = [];
let newCharPosition = null;

const getInputCharArray = value => {
  return value.split("");
};

const performEncryptionOrDecryption = (
  inputCharArray,
  indexOfCyclicalLetter,
  isEncryption,
  shiftByThree
) => {
  const indexOfLastLetter = letterArray.indexOf("z");
  outputCharArray = inputCharArray.map(char => {
    if (alphabetString.includes(char)) {
      const charPosition = letterArray.indexOf(char);
      if (isEncryption) {
        if (charPosition >= indexOfCyclicalLetter) {
          newCharPosition = charPosition % indexOfCyclicalLetter;
        } else {
          newCharPosition = charPosition + shiftByThree;
        }
      } else {
        if (charPosition <= indexOfCyclicalLetter) {
          newCharPosition =
            indexOfLastLetter - (charPosition % indexOfCyclicalLetter);
        } else {
          newCharPosition = charPosition - shiftByThree;
        }
      }
      const newChar = letterArray[newCharPosition];
      return newChar;
    } else {
      return char;
    }
  });
  return outputCharArray.join("");
};

const caesarCipher = (input, shiftByThree) => {
  let isEncryption = true;
  let shiftNumber = shiftByThree;
  inputCharArray = getInputCharArray(input);
  indexOfCyclicalLetter = letterArray.indexOf("x");
  const encryptedPassword = performEncryptionOrDecryption(
    inputCharArray,
    indexOfCyclicalLetter,
    isEncryption,
    shiftNumber
  );
  return encryptedPassword;
};

const decryptCaesarCipher = (input, shiftByThree) => {
  let isEncryption = false;
  let shiftNumber = shiftByThree;
  inputCharArray = getInputCharArray(input);
  indexOfCyclicalLetter = letterArray.indexOf("c");
  const decryptedPassword = performEncryptionOrDecryption(
    inputCharArray,
    indexOfCyclicalLetter,
    isEncryption,
    shiftNumber
  );
  return decryptedPassword;
};

module.exports = { caesarCipher, decryptCaesarCipher };

// let inputCharArray = input.split("");
// outputCharArray = inputCharArray.map(char => {
//   if (alphabetString.includes(char)) {
//     const charPosition = letterArray.indexOf(char);
//     if (charPosition >= letterArray.indexOf("x")) {
//       newCharPosition = charPosition % letterArray.indexOf("x");
//     } else {
//       newCharPosition = charPosition + shiftByThree;
//     }
//     const newChar = letterArray[newCharPosition];
//     return newChar;
//   } else {
//     return char;
//   }
// });
// return outputCharArray.join("");

// let inputCharArray = input.split("");
// outputCharArray = inputCharArray.map(char => {
//   if (alphabetString.includes(char)) {
//     const charPosition = letterArray.indexOf(char);
//     if (charPosition <= letterArray.indexOf("c")) {
//       newCharPosition =
//         letterArray.indexOf("z") - (charPosition % letterArray.indexOf("c"));
//     } else {
//       newCharPosition = charPosition - shiftBackByThree;
//     }
//     const newChar = letterArray[newCharPosition];
//     return newChar;
//   } else {
//     return char;
//   }
// });
// return outputCharArray.join("");
