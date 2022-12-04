let btnGenerate = document.getElementById('generate');
let passwordDisplay = document.getElementById('password');
let slider = document.getElementById('range');
let passwordLength = document.getElementById('length');
let lowercaseSet = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbersSet = '1234567890';
let specialSet = '!@#$%&*+/*_';
let btnCopy = document.getElementById('copy');
let password;

slider.value = 6;
slider.addEventListener('input', () => passwordLength.innerHTML = slider.value);

btnGenerate.addEventListener('click', () => checkConditions());
btnCopy.addEventListener('click', () => copyText());

function checkConditions() {
    let lowercase = document.getElementById('chkLowercase');
    let uppercase = document.getElementById('chkUppercase');
    let numbers = document.getElementById('chkNumbers');
    let special = document.getElementById('chkSpecial');

    if (!lowercase.checked && !uppercase.checked && !numbers.checked && !special.checked) {
        let modal = document.getElementById('modal');
        let close = document.getElementById('close-icon');
        modal.style.display = 'flex';
        close.addEventListener('click', () => modal.style.display = 'none');
    }
    else {
        let chars = '';

        if (lowercase.checked) {
            chars += lowercaseSet;
        }
        if (uppercase.checked) {
            chars += uppercaseSet;
        }
        if (numbers.checked) {
            chars += numbersSet;
        }
        if (special.checked) {
            chars += specialSet;
        }
        generatePassword(chars);
    }

}

function generatePassword(chars) {
    let usableChars = Array.from(chars);
    password = '';
    let random;
    for (let i = 0; i < slider.value; i++) {
        random = Math.floor(Math.random() * usableChars.length);
        password = password + usableChars[random];
    }
    passwordDisplay.innerText = password;
}

function copyText() {
    if (typeof (password) == 'undefined') {
        btnCopy.style.backgroundColor = 'var(--red)';
        btnCopy.innerText = "Empty";
        setTimeout(() => {
            btnCopy.style.backgroundColor = 'var(--purple)';
            btnCopy.innerText = "Copy";
        }, 1000)
    }
    else {
        navigator.clipboard.writeText(passwordDisplay.innerText);
        btnCopy.style.backgroundColor = 'var(--green)';
        btnCopy.innerText = "Copied";
        setTimeout(() => {
            btnCopy.style.backgroundColor = 'var(--purple)';
            btnCopy.innerText = "Copy";
        }, 1000)
    }
}