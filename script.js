// Assignment code here

// generate prompts a series of criteria

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '~', '.', ',', ':', ';', '?'];

let userLength = parseInt(prompt("how many letters?"));
let number = confirm("Numbers?");
let upperChar = confirm("Capitals?");
let lowerChar = confirm("Lower?");
let specials = confirm("Specials?");
//final password. calling a function
 let finalFinal = generatePlz(userLength,number, upperChar, lowerChar, specials);
 console.log(finalFinal);

 //function called in final password with the arguments
function generatePlz(userLength,number, upperChar, lowerChar, specials) {
  //finalPassword is empty for now
  let finalPassword = "";
  //contains characters for final password
  let charset =[];
//checks to see if the user clicked ok 
    if (upperChar) {
      charset = charset.concat(upperCase);
    }
    if (lowerChar) {
      charset = charset.concat(lowerCase);
    }
    if (number) {
      charset = charset.concat(numeric);
    }
    if (specials) {
      charset = charset.concat(specialChar);
    }
//the for loop generates password based on the random generator and concats 
    for(let i = 0; i < userLength; i++){
      let randomIndex = Math.floor(Math.random() * charset.length);
      finalPassword += charset[randomIndex];
  }
  return finalPassword;
}


// var finalPassword = "";
//   for (var i = 1; i<= userLength; i++ )
//      finalPassword += upperCase[i];
console.log(finalFinal);
// let i = Math.floor(Math.random() * upperCase.length);





// option for length, has to be within
// has to be within 8-128 characters

//ask for character types

// should evaluate if there are at something written

//option for lowercase or upper, numeric or special


//pasdword generated matches criteria

//password is written in page




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
