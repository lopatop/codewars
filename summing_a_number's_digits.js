// Description:
//     Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// SOLUTION:

function sumDigits(number) {
    number = number < 0 ? -number : number;
    return number.toString().split('').reduce((acc, item) => acc + Number(item), 0);
}