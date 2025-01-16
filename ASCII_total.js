// Description:
//     You
// 'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
//
// Examples:
//
// uniTotal("a") == 97
// uniTotal("aaa") == 291


// SOLUTION:

function uniTotal(string) {
    return string.split('').reduce((acc, el) => acc + el.charCodeAt(0), 0)
}
