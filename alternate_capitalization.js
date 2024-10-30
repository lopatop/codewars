// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// SOLUTION:

function capitalize(s) {
    let result = [];
    const arrS = s.split('');
    console.log(arrS);

    const index0 = arrS.map((el, index) =>
        index % 2 !== 1 ? el.toUpperCase() : el
    )
    const arr0 = index0.join('');
    result.push(arr0);


    console.log(index0.join('').split());
    const index1 = arrS.map((el, index) =>
        index % 2 === 1 ? el.toUpperCase() : el
    )
    const arr1 = index1.join('');
    result.push(arr1);
    return result;
};