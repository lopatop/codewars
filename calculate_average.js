// Description:
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.


// SOLUTION 1:

function findAverage(array) {
    let sum = 0;
    if (array.length !== 0) {
        array.forEach(el => {
            sum += el;
        })
        return sum / array.length;
    } return 0;

}