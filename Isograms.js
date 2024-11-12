// Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// SOLUTION 1:

function isIsogram(str) {
    const strToLowerCase = str.toLowerCase();
    const includes = strToLowerCase.split('').filter(el => strToLowerCase.indexOf(el) === strToLowerCase.lastIndexOf(el)).join('');
    return includes.length === str.length ? true : false;
}


// SOLUTION 2:

const isIsogram = str => {
    return new Set(str.toUpperCase()).size === str.length;
}