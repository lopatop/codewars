// Description:
//     Write a function that returns a string in which firstname is swapped with last name.
//
// Example(Input --> Output)
//
// "john McClane" --> "McClane john"

//SOLUTION

function nameShuffler(str){
    const arr = str.split(' ')
    const arrReverse = [arr[1], arr[0]]
    return arrReverse.join(' ')
}