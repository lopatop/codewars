// Description:
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


// SOLUTION 1:

export function numberToString(num) {
    return String(num);
    //`${num}`;
    //num.toString();
}

// SOLUTION 2:

function numberToString(num) {
    return num.toString();
}