// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// SOLUTION: 
function solution(str){
    return str.split('').reverse().join('');
  }

  // SOLUTION 2:
  
  function solution(str) {
    let element = '';
    for (let i = str.length - 1; i >= 0; i--) {
        element += str[i];
    }
    return element;
}