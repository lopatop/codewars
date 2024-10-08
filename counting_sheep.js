// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined

// SOLUTION:

function countSheeps(sheep) {
    let numberSheep = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] !== undefined && sheep[i] !== null) {
            if (sheep[i] === true) {
                numberSheep += 1;
            }
        }
    } return numberSheep;
}   