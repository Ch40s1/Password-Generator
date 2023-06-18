// Assignment code here
//Arrays containing all combinations.
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '~', '.', ',', ':', ';', '?'];

//function makes sure that it is within range.
function getSize(){
  let characterLength = parseInt(prompt("How many characters would you like?"));
  if (characterLength < 8 || characterLength > 128){
    alert("Password must be at least 8 to 128 characters.");
    return getSize(characterLength);
  }
  return characterLength;

}

 //function generates password
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
     //checks if at least one is in the password.
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let userLength = getSize();
  let number = confirm(" Would you like numbers?");
  let upperChar = confirm("Capital letters?");
  let lowerChar = confirm("Any lowercase?");
  let specials = confirm("What about special characters?");

// This checks if no options are selected.
  if (!number && !upperChar && !lowerChar && !specials) {
    alert("Please select at least one option for your password.");
    return; // Exit the function without generating a password
  }

  var password = generatePassword(userLength,number, upperChar, lowerChar, specials);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
