// Description:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// SOLUTION 1: 

function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    }
    if (a > b) {
        [a, b] = [b, a];
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    } return sum;
}

// SOLUTION 2: 

function getSum(a, b) {
    let maxNumber = Math.max(a, b),
        minNumber = Math.min(a, b);
    return ((maxNumber - minNumber + 1) * (maxNumber + minNumber)) / 2
}