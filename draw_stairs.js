// Description:
//     Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
//
//     For example n = 3 result in:
//
// "I\n I\n  I"
// or printed:
//
//     I
// I
//  I
// Another example, a 7-step stairs should be drawn like this:
// I
//  I
//   I
//    I
//     I

// SOLUTION:

function drawStairs(n) {
    let result = ''
    for (let i=0; i<n; i++) {
        result+= ' '.repeat(i)+'I'
        if(i<n-1) result+='\n'
    }return result
}

