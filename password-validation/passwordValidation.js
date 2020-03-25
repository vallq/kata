const numberString = "1234567890";

function isValidPassword(password) {
  let containsLowercase = 0;
  let containsUppercase = 0;
  let containsDigit = 0;
  const passwordString = password.split("");

  const checkCase = value => {
    return value.toLowerCase() === value
      ? containsLowercase++
      : value.toUpperCase() === value
      ? containsUppercase++
      : true;
  };

  passwordString.forEach(value => {
    if (Number(value)) {
      containsDigit++;
    } else {
      checkCase(value);
    }
  });

  if (
    password.length < 8 ||
    containsLowercase === 0 ||
    containsUppercase === 0 ||
    containsDigit === 0
  ) {
    return false;
  }
  return true;
}

function isValidPasswordRegex(inputtxt) {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (inputtxt.match(passw)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isValidPassword, isValidPasswordRegex };
