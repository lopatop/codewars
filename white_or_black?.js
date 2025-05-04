// Description:
//     Complete the function that returns the color of the given square on a normal, 8x8 chess board:
//
//     chessboard
//
// Examples
// 'a', 8  ==>  "white"
// 'b', 2  ==>  "black"
// 'f', 5  ==>  "white"


// SOLUTION:

function mineColor(file, rank) {
    return (rank % 2 === 0 && (file === 'a' || file === 'c' || file === 'e' || file === 'g')) ||
    (rank % 2 !== 0 && (file === 'b' || file === 'd' || file === 'f' || file === 'h'))
        ? 'white'
        : 'black';
}