/*Description:
    Description
Your job is to create a simple password validation function, as seen on many websites.

    The rules for a valid password are as follows:

    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.
    You are permitted to use any methods to validate the password.

    Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
Extra info
You will only be passed strings.
    The string can contain any standard keyboard character.
    Accepted strings can be any length, as long as they are 8 characters
or
more.*/

// SOLUTION:

function password(str) {
    const strArr = str.split('')
    let passwordIsValid = 0

    let toUpper = false
    let toLower = false
    let isNumber = false

    if (strArr.length >7) passwordIsValid++;
    for(let i = 0; i<strArr.length; i++){
        const char = strArr[i]

        if(!toUpper && char === char.toUpperCase() && char !== char.toLowerCase()){
            toUpper = true
            passwordIsValid ++
        }
        if(!toLower && char === char.toLowerCase() && char !== char.toUpperCase()){
            toLower = true
            passwordIsValid ++
        }
        if(!isNumber && !isNaN(char)){
            isNumber = true
            passwordIsValid ++
        }

    }
    return passwordIsValid>=4

}
