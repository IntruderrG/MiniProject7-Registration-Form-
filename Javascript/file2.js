export function checkPassword(val1, val2) {
  checkLength(val1);
  checkLowerAlphabet(val1);
  checkUpperAlphabet(val1);
  checkSpecialCharacter(val1);
  matchPasswords(val1, val2);
}

export function checkNumberLength(val) {
  checkPhoneNumberLength(val);
}

export function checkPhoneNumberLength(inp) {
  if (inp.length !== 10) {
    alert("Enter correct Phone Number");
    reload();
  }
}

export function checkLength(inp) {
  if (inp.length < 8) {
    alert("Password too small");
    reload();
    return false;
  } else if (inp.length > 50) {
    alert("Max Limit Reached");
    reload();
  }
  return true;
}
export function checkSpecialCharacter(inp) {
  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "\\",
    "|",
    "~",
    "`",
  ];
  const store = specialCharacters.filter((val) => inp.includes(val));
  if (store.length === 0) {
    alert("Special Character Missing");
    reload();
  }
}
export function matchPasswords(inp1, inp2) {
  if (inp1 === inp2) {
    console.log("Password Matched");
  } else {
    alert("Passwords Mismatched");
    reload();
  }
}

export function checkLowerAlphabet(inp) {
  const store = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const check = store.filter((val) => inp.includes(val));
  if (check.length === 0) {
    alert("Add a Lowercase Alphabet");
    reload();
  }
}

export function checkUpperAlphabet(inp) {
  const store = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const check = store.filter((val) => inp.includes(val));
  if (check.length === 0) {
    alert("Add a Uppercase Alphabet");
    reload();
  }
}
function reload() {
  location.reload();
}
