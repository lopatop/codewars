// Description:
// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Note: Y is not a vowel in this kata.

// SOLUTION:

function swap(string) {
    return string.replace(/[aeiou]/g, (text) => text.toUpperCase())
}