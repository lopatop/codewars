// Description:
//     Implement a function to calculate the sum of the numerical values in a nested list. For example :
//
//     sumNested([1, [2, [3, [4]]]]) => 10

//SOLUTION

const sumNested = arr => {
    return arr.flat(Infinity).reduce((acc,el)=> acc+=el, 0)
};