let btnGenerate = document.getElementById('generate');
let passwordDisplay = document.getElementById('password');
let slider = document.getElementById('range');
let passwordLength = document.getElementById('length');
let lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbersChar = '1234567890';
let specialChar = '!@#$%&*+/*_';
let btnCopy = document.getElementById('copy');

slider.value = 6;
slider.addEventListener('input', () => passwordLength.innerHTML = slider.value);

btnGenerate.addEventListener('click', () => checkConditions());
btnCopy.addEventListener('click', () => copyText());

function checkConditions() {
    let possibleChars = '';
    let lowercase = document.getElementById('chkLowercase');
    let uppercase = document.getElementById('chkUppercase');
    let numbers = document.getElementById('chkNumbers');
    let special = document.getElementById('chkSpecial');

    if (lowercase.checked == false && uppercase.checked == false && numbers.checked == false && special.checked == false) {
        let modal = document.getElementById('modal');
        let close = document.getElementById('close-icon');
        modal.style.display = 'flex';
        close.addEventListener('click', () => modal.style.display = 'none');
    }
    else {
        if (lowercase.checked == true) {
            possibleChars = possibleChars + lowercaseChar;
        }
        if (uppercase.checked == true) {
            possibleChars = possibleChars + uppercaseChar;
        }
        if (numbers.checked == true) {
            possibleChars = possibleChars + numbersChar;
        }
        if (special.checked == true) {
            possibleChars = possibleChars + specialChar;
        }
        generatePassword(possibleChars);
    }

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

function copyText() {
    navigator.clipboard.writeText(passwordDisplay.innerText);
    btnCopy.style.backgroundColor = 'var(--green)';
    btnCopy.innerText = "Copied";
    setTimeout(() => {
        btnCopy.style.backgroundColor = 'var(--purple)';
        btnCopy.innerText = "Copy";
    }, 1000)
}