// Assignment code here
//Arrays containing all characters.
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '~', '.', ',', ':', ';', '?'];

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
function generatePassword(userLength,number, upperCharacter, lowerCharacter, specials) {

  
  //finalPassword is empty for now
  let finalPassword = "";

  //contains combined arrays after choices
  let arrayChecklist =[];

    //checks to see if the user clicked ok then merges array to checklist
    if (upperCharacter) {
      //concat merges 2 arrays: Note it merges the whole!! array.
      arrayChecklist = arrayChecklist.concat(upperCase);
    }
    if (lowerCharacter) {
      arrayChecklist = arrayChecklist.concat(lowerCase);
    }
    if (number) {
      arrayChecklist = arrayChecklist.concat(numeric);
    }
    if (specials) {
      arrayChecklist = arrayChecklist.concat(specialCharacter);
    }

    //picks characters inside the checklist array based on the number of characters the user specified.
    for(let i = 0; i < userLength; i++){
      let pickedCharacters = Math.floor(Math.random() * arrayChecklist.length);
      finalPassword += arrayChecklist[pickedCharacters];
    }
     //checks if at least one character is in the password.
    if(
      (number && !finalPassword.match(/[0-9]/)) ||
      (upperCharacter && !finalPassword.match(/[A-Z]/)) ||
      (lowerCharacter && !finalPassword.match(/[a-z]/)) ||
      (specials && !finalPassword.match(/[!@#$%^&*-_+=~.,:;?]/))
    ){
      return generatePassword(userLength,number, upperCharacter, lowerCharacter, specials);
    }
  //gives back final password 
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let userLength = getSize();
  let number = confirm(" Would you like numbers?");
  let upperCharacter = confirm("Capital letters?");
  let lowerCharacter = confirm("Any lowercase?");
  let specials = confirm("What about special characters?");

// This checks if no options are selected.
  if (!number && !upperCharacter && !lowerCharacter && !specials) {
    alert("Please select at least one option for your password.");
    return; // Exit the function without generating a password
  }

  var password = generatePassword(userLength,number, upperCharacter, lowerCharacter, specials);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
