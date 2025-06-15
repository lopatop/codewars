// Description:
//     Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
//     a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
//     Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
//     For example, decode("h3 th2r2") would return "hi there".
//
//     For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// SOLUTION:

function encode(string) {
    let newString = ''
    for(let i = 0; i < string.length; i++){
        let el = string[i]
        if(el == 'a'){newString += 1}
        else if(el == 'e'){newString += 2}
        else if(el == 'i'){newString += 3}
        else if(el == 'o'){newString += 4}
        else if(el == 'u'){newString += 5}
        else newString += el
    }
    return newString
}

function decode(string) {
    let newString = ''
    for(let i = 0; i < string.length; i++){
        let el = string[i]
        if(el == 1){newString += 'a'}
        else if(el == 2){newString += 'e'}
        else if(el == 3){newString += 'i'}
        else if(el == 4){newString += 'o'}
        else if(el == 5){newString += 'u'}
        else newString += el

    }
    return newString
}