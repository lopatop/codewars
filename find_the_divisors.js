// Description:
//     Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
//
// Examples:
//     divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

// SOLUTION:

function divisors(integer) {
    let res = []
    let a = integer - 1
    while(a > 1){
        if(integer % a === 0){
            res = [a, ...res]
        }
        a--
    }
    return res.length? res: `${integer} is prime`

}