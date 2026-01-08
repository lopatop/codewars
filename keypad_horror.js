// Description:
//     Having two standards for a keypad layout is inconvenient!
//     Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
// 0 \n
//
// Cell phone keypad's layout:
// 1 2 3\n
// 4 5 6\n
// 7 8 9\n
// 0\n
//
// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.
//
//     Example:
// "789" -> "123"
//
// Notes:
//     You get a string with numbers only

//SOLUTION

function computerToPhone(numbers) {
    let res = '';
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == 0) res += 0
        if(numbers[i] == 1) res += 7
        if(numbers[i] == 2) res += 8
        if(numbers[i] == 3) res += 9
        if(numbers[i] == 4) res += 4
        if(numbers[i] == 5) res += 5
        if(numbers[i] == 6) res += 6
        if(numbers[i] == 7) res += 1
        if(numbers[i] == 8) res += 2
        if(numbers[i] == 9) res += 3
    }
    return res
}