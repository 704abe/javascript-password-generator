// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // returns string (Password)
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  document.querySelector("#password").value = password;
}

// returns string (Password)
function generatePassword() {
  var generated = "";
  var passwordLength = functionLength(); // Returns number (Desired length of password)
  var charsPool = parameters(); // Returns string (Pool of desired characters)
  for(var i = 0; i < passwordLength; i++) {
    var randNum = Math.floor(Math.random() * charsPool.length);
    generated += charsPool.substring(randNum, randNum +1);
  }
  return generated;
}

// Returns number (Desired password length)
function functionLength() {
  var valid1 = false;
  var valid2 = false;
  var promptLength;

   do {
    promptLength = prompt("Enter desired password length (between 8 - 128 characters)");

    if (promptLength == null) {
      alert('Invalid Response');
    }
    if (isNaN(promptLength)) {
      valid1 = false;
      alert('Invalid Response');
    } else {
      valid1 = true;
    }
    if (promptLength >= 8 && promptLength <= 128 || isNaN(promptLength) == true) {
      valid2 = true;
    } else {
      valid2 = false;
      alert('Invalid Response');
    }

  } while (valid1 === false || valid2 === false);
  return promptLength;
}

// Returns string (Pool of desired characters)
function parameters() {
// Character Arrays
var charsAll = ""
var charsLow = 'abcdefghijklmnopqrstuvwxyz'
var charsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var charsNum = '0123456789'
var charsSpec = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'
// Prompts
do {
  var lowYes = confirm("Would you like your password to include lowercase letters? \n OK = yes\n Cancel = no");
  var upYes = confirm("Would you like your password to include uppercase letters? \n OK = yes\n Cancel = no");
  var numYes = confirm("Would you like your password to include numbers? \n OK = yes\n Cancel = no");
  var specYes = confirm("Would you like your password to include special characters? \n OK = yes\n Cancel = no");

    if (lowYes === true) {
      charsAll = charsAll.concat(charsLow);
    }
    if (upYes === true) {
      charsAll = charsAll.concat(charsUp);
    }
    if (numYes === true) {
      charsAll = charsAll.concat(charsNum);
    }
    if (specYes === true) {
      charsAll = charsAll.concat(charsSpec);
    }
} while (lowYes === false && upYes === false && numYes === false && specYes === false)
  return charsAll;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
