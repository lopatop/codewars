// Description:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// SOLUTION: 

function findShort(s) {
    const array = s.split(' ');
        array.sort((a, b) => a.length - b.length)
    return array[0].length
}