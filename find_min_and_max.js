// Description:
//     Implement a function that returns the minimal and the maximal value of a list (in this order).

// SOLUTION:

function getMinMax(arr){
    if(arr.length>1){
        const sortArr = arr.sort((a,b)=>a-b)
        return [sortArr[0], sortArr[arr.length-1]]
    }
    return [arr[0],arr[0]]
}