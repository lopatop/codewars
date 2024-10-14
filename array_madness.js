// Description:
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// SOLUTION:

function arrayMadness(a, b) {
    let arr1 = 0;
    let arr2 = 0;
    for (let i = 0; i < a.length; i++) {
        arr1 += a[i] ** 2;
    }
    for (let i = 0; i < b.length; i++) {
        arr2 += b[i] ** 3;
    }
    return arr1 > arr2;
}