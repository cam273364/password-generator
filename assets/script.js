// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
//returns a randomized password
function generatePassword() {
  var chars = ''
  var passwordLength =  prompt("how long would you like your password")
  if(passwordLength > 128) {
    alert('Try again with a password less than 128 characters')
    return ''
  } else if(passwordLength < 8) {
    alert('Your password needs to be 8 characters or longer')
    return ''
  }

  var useSymbols = confirm("Do you want symbols in your password.")
  if (useSymbols){
    chars += '!@#$%^&*()'
  }
  
  var isNumbers = confirm("Would you like numbers in your password")
  if (isNumbers) {
    chars += '0123456789'
  }

  
  var isLowerCase = confirm("Would you like lowercase numbers in your password?")
  if (isLowerCase) {
    chars += 'abcdefghijklmnopqrstuvwxyz'
  }

  var isUpperCase = confirm("Would you like uppercase numbers in your password?")
  if (isUpperCase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (!useSymbols && !isNumbers && !isLowerCase && !isUpperCase){
    alert('you need to select at least one type of character')
  }
  
  var password = "";
   for (var i = 0; i <= passwordLength -1; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//add prompts
//symbols 
//length
//numbers