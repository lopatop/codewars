// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// SOLUTION: 

function findSmallestInt(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.sort((a, b) => a - b);
    }
    return arr[0];
}

// SOLUTION 2:

function findSmallestInt(arr) {
    let arrmin = Math.min(...arr);
    return arrmin;
}