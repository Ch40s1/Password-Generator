// Assignment code here

// generate prompts a series of criteria

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '~', '.', ',', ':', ';', '?'];

// let userLength = parseInt(prompt("how many letters?"));

  // let userLength = getSize();
  // let number = confirm("Numbers?");
  // let upperChar = confirm("Capitals?");
  // let lowerChar = confirm("Lower?");
  // let specials = confirm("Specials?");

  //final password. calling a function
  //  let finalFinal = generatePlz(userLength,number, upperChar, lowerChar, specials);
  //  console.log(finalFinal);

function getSize(){
  let characterLength = parseInt(prompt("how many letters?"));
  if (characterLength < 8 || characterLength > 128){
    alert("plz at least 8");
    return getSize(characterLength);
  }
  return characterLength;

}


 //function called in final password with the arguments
function generatePassword(userLength,number, upperChar, lowerChar, specials) {

  
  //finalPassword is empty for now
  let finalPassword = "";

  //contains combined arrays after choices
  let arrayChecklist =[];

    //checks to see if the user clicked ok 
    if (upperChar) {
      //concat merges 2 arrays: Note it merges the whole!! array.
      arrayChecklist = arrayChecklist.concat(upperCase);
    }
    if (lowerChar) {
      arrayChecklist = arrayChecklist.concat(lowerCase);
    }
    if (number) {
      arrayChecklist = arrayChecklist.concat(numeric);
    }
    if (specials) {
      arrayChecklist = arrayChecklist.concat(specialChar);
    }
    //picks characters inside the charset array based on the number of characters the user specified.
    for(let i = 0; i < userLength; i++){
      let pickedCharacters = Math.floor(Math.random() * arrayChecklist.length);
      finalPassword += arrayChecklist[pickedCharacters];
    }
    
    if(
      (number && !finalPassword.match(/[0-9]/)) ||
      (upperChar && !finalPassword.match(/[A-Z]/)) ||
      (lowerChar && !finalPassword.match(/[a-z]/)) ||
      (specials && !finalPassword.match(/[!@#$%^&*-_+=~.,:;?]/))
    ){
      return generatePassword(userLength,number, upperChar, lowerChar, specials);
    }
  return finalPassword;
}
// var generatePassword = finalFinal
// console.log(finalFinal);
// var finalPassword = "";
//   for (var i = 1; i<= userLength; i++ )
//      finalPassword += upperCase[i];
// console.log(finalPassword);
// let i = Math.floor(Math.random() * upperCase.length);
// for(let i = 0; i < userLength; i++){
//   let pickedCharacters = Math.floor(Math.random() * arrayChecklist.length);
//   finalPassword += arrayChecklist[pickedCharacters];
// }




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
  let userLength = getSize();
  let number = confirm("Numbers?");
  let upperChar = confirm("Capitals?");
  let lowerChar = confirm("Lower?");
  let specials = confirm("Specials?");
  var password = generatePassword(userLength,number, upperChar, lowerChar, specials);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
