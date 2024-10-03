// DESCRIPTION:
// You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// SOLUTION: 

function getAverage(marks) {
    let sumArr = 0;
    for (let i = 0; i < marks.length; i++) {
        sumArr += marks[i];
    }
    meanNumber = sumArr / marks.length;
    return Math.floor(meanNumber);
}