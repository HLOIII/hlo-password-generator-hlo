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
    else if (numCharacters >= 8 && numCharacters <= 128) {
        var okSpecial = window.confirm("Click OK to confirm including special characters.");
        var okNumeric = window.confirm("Click OK to confirm including numeric values.");


        var combinedArray = [];

        if (okSpecial) {
            var randomElement = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            passwordGenerated = passwordGenerated + randomElement;
            combinedArray = combinedArray.concat(specialCharacters);
        }

        if (okNumeric) {
            var randomElement2 = numbers[Math.floor(Math.random() * numbers.length)];
            passwordGenerated = passwordGenerated + randomElement2;

        }

        if (okUpperCase) {
            var randomElement3 = upperCase[Math.floor(Math.random() * upperCase.length)];
            passwordGenerated = passwordGenerated + randomElement3;
            combinedArray = combinedArray.concat(upperCase);
        }

        if (okLowerCase) {
            var randomElement4 = lowerCase[Math.floor(Math.random() * lowerCase.length)];
            passwordGenerated = passwordGenerated + randomElement4;
            combinedArray = combinedArray.concat(lowerCase);
        }

        // Write password to the #password input
        function writePassword() {
            passwordGenerated = "";

            generatePassword();
            var password = passwordGenerated;
            if (!password) {
                return;
            }

            var passwordText = document.querySelector("#password");

            passwordText.value = password;
        }

        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);