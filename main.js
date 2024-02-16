function updateLengthValue() {
    document.getElementById('lengthValue').textContent = document.getElementById('passwordLength').value;
}

function createPassword() {
    const passwordLength = document.getElementById('passwordLength').value;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;

    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const numbers = '0123456789';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    let characters = '';
    let password = '';

    if (includeSymbols) characters += symbols;
    if (includeNumbers) characters += numbers;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeLowercase) characters += lowercaseLetters;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById('password').value = password;
}


function copyPassword() {
    const passwordElement = document.querySelector('.password');
    const passwordToCopy = passwordElement.value;

    navigator.clipboard.writeText(passwordToCopy)
        .then(() => {
            document.querySelector('.infoBlock').classList.add('active');
            setTimeout(() => {
                document.querySelector('.infoBlock').classList.remove('active');
            }, 2000)
        })
        .catch(error => {
            console.log('Unable to copy password to clipboard', error);
        })
}
