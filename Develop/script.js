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
 }else {
  writePassword2();
 }

 var passwordText = document.querySelector('#password');
 passwordText.value = password;
};

//function for upper case popup
function writePassword2 () {
  confirm("Do you want upper use upper case letters?")
  console.log("second function")
  if (true){
    writePassword3();
     Math.floor(Math.random() * (max - min + 1) ) + min;
  }else{
    
  }
};


//function for lower case popup
function writePassword3 () {
  confirm("Do you want to use lowercase letters?")
  if (true){
    writePassword4();
  //leters = math.floor(math.random());
  }else{
   
  }
};


//function for symbols popup
function writePassword4 () {
  confirm("Do you want to use symbols?")
  if (true){
    writePassword5();
  //charcters = math.floor(math.random());
  }else{
    
  }
};


//function for numbers popup
function writePassword5 () {
  confirm("Do you want to use numbers?")
  if(true){
    numbers = math.floor(math.random() * 10) + 1;
  }else {}
};

 //add pasword to display
 document.getElementById('card-body');
  var passwordText = document.querySelector('#password').value;
  passwordText.value = password;

// Add event listener to generate button/ calling functions
generateBtn.addEventListener('click', writePassword)

