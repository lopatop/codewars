// Description:
//     Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.
//
//     The booleans should always start with false becase there is no digit before the first one.
//
//     Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]
// *** Remember 0 is evenly divisible by all integers but not the other way around ***

//SOLUTION

function divisibleByLast(n) {
    const arr = n.toString().split('').map(Number)
    const res = []

    for(let i = 0; i < arr.length; i++){
        const prev = arr[i-1]
        const curr = arr[i]

        if(prev === 0){
            res.push(false)
        }else{
            res.push(curr%prev === 0)
        }
    }

    return res

}