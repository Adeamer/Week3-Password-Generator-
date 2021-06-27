// Assignment Code/ Variables
var generateBtn = document.querySelector('#generate');
var confirmNumber = 0;
var confirmUppercase;
var letters = "abcdefghijklmnopqrstuvwxyz";
var charaters = "!@#$%^&*()_-=+?<>/";
var numbers = "0123456789"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordText = 0;

// Write password to the #password input
function writePassword(callbackfn) {
 confirmNumber = +prompt("Enter how many characters: Must be between 8 and 128 characters");
 console.log(confirmNumber);
 if (confirmNumber < 8 || confirmNumber > 128){
  result = alert("Must be between 8 and 128 charaters")
 }else 

 var passwordText = document.querySelector('#password');
 passwordText.value = password;
};

//function for upper case popup
function writePassword2 () {
  confirm("Do you want upper use upper case letters?")
  console.log("second function")
  if (true){
  uppercase = math.floor(math.random());
  console.log(uppercase);
  }else{}
};

//function for lower case popup
function writePassword3 () {
  confirm("Do you want to use lowercase letters?")
  if (true){
  leters = math.floor(math.random());
  }else{}
};

//function for symbols popup
function writePassword4 () {
  confirm("Do you want to use symbols?")
  if (true){
  charcters = math.floor(math.random());
  }else{}
};

//function for numbers popup
function writePassword5 () {
  confirm("Do you want to use numbers?")
  if(true){
    numbers = math.floor(math.random());
  }else {}
};

//for loop for 
 for (var i = 0; i<=passwordText; i++){
  
 }

 //add pasword to display
 document.getElementById('card-body');
  var passwordText = document.querySelector('#password').value;
  passwordText.value = password;

// Add event listener to generate button/ calling functions
generateBtn.addEventListener('click', writePassword)

writePassword2;
writePassword3;
writePassword4;
writePassword5;
