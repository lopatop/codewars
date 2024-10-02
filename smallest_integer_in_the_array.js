// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// SOLUTION: 

function findSmallestInt(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.sort((a, b) => a - b);
    }
    return arr[0];
}