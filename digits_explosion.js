// Description:
//     Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
//
//     Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//SOLUTION

function explode(s) {
    let newStr  = ''
    for(let i = 0; i < s.length; i++){
        newStr +=s[i].repeat(+s[i])
    }
    return newStr
}