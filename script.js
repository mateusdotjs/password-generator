let btnGenerate = document.getElementById('generate');
let passwordDisplay = document.getElementById('password');
let slider = document.getElementById('range');
let passwordLength = document.getElementById('length');
let lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbersChar = '1234567890';
let specialChar = '!@#$%&*+/*_';

slider.value = 6;
slider.addEventListener('input', () => passwordLength.innerHTML = slider.value);
btnGenerate.addEventListener('click', () => checkConditions());

function checkConditions(){
    let possibleChars = '';
    let lowercase = document.getElementById('chkLowercase');
    let uppercase = document.getElementById('chkUppercase');
    let numbers = document.getElementById('chkNumbers');
    let special = document.getElementById('chkSpecial');

    if(lowercase.checked == true) {
        possibleChars = possibleChars + lowercaseChar;
    }
    if(uppercase.checked == true) {
        possibleChars = possibleChars + uppercaseChar;
    }
    if(numbers.checked == true) {
        possibleChars = possibleChars + numbersChar;
    }
    if(special.checked == true) {
        possibleChars = possibleChars + specialChar;
    }
    
    generatePassword(possibleChars);
}

function generatePassword(possibleChars) {
    let usableChars = Array.from(possibleChars);
    let password = '';
    let random = '';
    for (let i = 0; i < slider.value; i++) {
        random = Math.floor(Math.random() * usableChars.length);
        password = password + usableChars[random];
    }   
    passwordDisplay.innerText = password;
}