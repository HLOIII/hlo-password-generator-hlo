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

    // This makes sure that the length of requested password is at least 8 characters
    if (numCharacters < 8) {
        window.alert("Your password must be at least 8 characters");
        generatePassword();
    }

    // This makes sure that the length of requested password is no more than 128 characters
    else if (numCharacters > 128) {
        window.alert("Your password must be no more than 128 characters");
        generatePassword();
    }

    // When requested password is between 8 to 128 characters
    else {
        var okSpecial = window.confirm("Click OK to confirm including special characters.");
        if (okSpecial) {
            var i = (Math.floor(Math.random) * 10) + 22
            console.log(specialCharacters[i]);
        }


        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);