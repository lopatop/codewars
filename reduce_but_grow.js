// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SOLUTION:

const grow = x => {
    return x.reduce((acc, el) => acc * el, 1);
}