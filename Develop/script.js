// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//These are the differnt variables for the characters used for the password
var uchar = "abcdefghijklmnopqrstuvwxyz";
var lchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nchar = "0123456789";
var schar = "~!@#$%^&*()_+";


// The generatePassword funtion code is below
function generatePassword() {
  var password = "";
 

 
 //This is the choice of length of a password is between 8 and 128 characters
 var passwordLength = prompt("choose a number between 8 and 128. This will be the password length");
 if (passwordLength === null){
  if (passwordLength >= 8 && passwordLength <=128){

   
    alert("in the following prompts, at least one choice of lowercase, uppercase, numeric and/or special characters must be confirmed.");

 }
 
  let passwordLength = prompt("enter the length of the password")
  
}
//This is the password generation code
for (i = 0; i < passwordLength ; i++ ){
  password += char
}