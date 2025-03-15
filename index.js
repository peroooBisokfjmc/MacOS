function generatePassword(lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}|:"<>?\/*';

    let allowedChars = '';
    let password = '';

    allowedChars += (includeLowerCase) ? lowerChars : '';
    allowedChars += (includeUpperCase) ? upperChars : '';
    allowedChars += (includeNumbers) ? numberChars : '';
    allowedChars += (includeSymbols) ? symbolChars : '';

    if (lenght <= 0) {
        return `(password lenght must be at least 1)`;
    }
    if(allowedChars.length === 0) {
        return `(At least 1 set of characters must be selected)`;
    }

    for(let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        
    }
    return '';
}

const passwordLenght = 12;
const includeLowerCase = false;
const includeUpperCase = true;
const includeNumbers = false;
const includeSymbols = true;

const password = generatePassword(passwordLenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);