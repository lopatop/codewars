// Description:
//     In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//
//     Note: the input will not be empty.
//
//     Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// SOLUTION:

function calculate(str) {
    const tokens = str.split(/(plus|minus)/);
    let total = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const number = Number(tokens[i + 1]);

        if (operator === 'plus') {
            total += number;
        } else if (operator === 'minus') {
            total -= number;
        }
    }

    return String(total);
}