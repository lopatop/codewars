// Description:
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
// Your task is to change the letters with diacritics:
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.
// For example:
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// SOLUTION:

function correctPolishLetters(string) {
    let strPolish = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "ą") {
            strPolish += "a"
        } else if (string[i] === "ć") {
            strPolish += "c"
        } else if (string[i] === "ę") {
            strPolish += "e"
        } else if (string[i] === "ł") {
            strPolish += "l"
        } else if (string[i] === "ń") {
            strPolish += "n"
        } else if (string[i] === "ó") {
            strPolish += "o"
        } else if (string[i] === "ś") {
            strPolish += "s"
        } else if (string[i] === "ź") {
            strPolish += "z"
        } else if (string[i] === "ż") {
            strPolish += "z"
        } else { strPolish += string[i] }
    } return strPolish;
}