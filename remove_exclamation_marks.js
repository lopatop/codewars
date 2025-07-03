// Description:
//     Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//SOLUTION

function removeExclamationMarks(s) {
    let newString = ''
    for(let i = 0; i<s.length; i++){
        if(s[i] !== '!'){
            newString+=s[i]
        }
    }
    return newString
}