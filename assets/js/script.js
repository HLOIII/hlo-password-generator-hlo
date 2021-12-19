// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordGenerated = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // This will ask about the length of password
    var numCharacters = parseInt(window.prompt("How many characters would you like your password to contain?(between 8-128 characters):"));

    // This checks for the length of requested password is at least 8 characters
    if (numCharacters < 8) {
        window.alert("Your password must be at least 8 characters");
        generatePassword();
    }


    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);