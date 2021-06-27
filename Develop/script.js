// Assignment Code
var generateBtn = document.querySelector('#generate');
var confirmNumber;

// Write password to the #password input
function writePassword() {
 window.prompt("Enter how many characters: Must be between 8 and 128 characters");
 if (confirmNumber > 8 && confirmNumber < 128){
  window.alert("Must be between 8 and 128 charaters")
 };

 

 
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

