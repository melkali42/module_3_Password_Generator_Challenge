// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//These are the differnt variables for the characters that will be used for the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~!@#$%^&*()_+";


// The generatePassword funtion code is below
function generatePassword() {
  var realPassword = "";
 
    alert("presented with the following prompts for password generating criteria")
 
 //This is the choice of length of a password is between 8 and 128 characters
 var passwordLength = prompt("choose a number between 8 and 128. This will be the password length");
 if (passwordLength != null) {
  if (passwordLength >= 8 && passwordLength <=128) {
   
 }

       alert("in the following prompts, at least one choice of lowercase, uppercase, numeric and/or special characters must be confirmed.");
    var user = true;
    var choices = "";

    var lowerCase = confirm("have your password contain lowercase letters");
    if (lowerCase === true) {
      user = true
      choices += lowerCase;
      
    }

    var upperCase = confirm("have your password contain uppercase letters");
    if (upperCase === true) {
      user = true
      choices += upperCase;
      
    }

    var numbers = confirm("have your password contain numbers");
    if (numbers === true) {
      user = true
      choices += numbers;
      
    }

    var specialCharacters = confirm("have your password contain special characters");
    if (specialCharacters === true) {
      user = true
      choices += specialCharacters
          }

    if (user === false) {
      alert("at least one choice of lowercase, upercase, numeric and/or special characters must be confirmed");
    }

          //This is the password generation code
        for (i = 0; i < passwordLength ; i++ ) {
        realPassword += choices[Math.floor(Math.random()*choices.length)];
 
    };
  
  
    return realPassword;
  }
}
