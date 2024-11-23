// Description:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// SOLUTION:

var capitals = function (word) {
    const arrNumber = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            arrNumber.push(i)
        }
    }
    return arrNumber
};
