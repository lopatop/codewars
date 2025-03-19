// Description:
//     Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

// SOLUTION:

function factorial(n){
    return n===1 || n===0?1: n*factorial(n-1)
}