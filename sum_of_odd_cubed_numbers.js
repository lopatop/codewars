// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// SOLUTION:

function cubeOdd(arr) {
    if (!arr.every(x => typeof x === 'number')) return undefined;

    return arr
        .map(n => n ** 3)
        .filter(n => n % 2 !== 0)
        .reduce((acc, n) => acc + n, 0);
}