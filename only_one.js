// Description:
//     Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False
//
// Input	Expected Output
//     []	False
//     [True, False, False]	True
//     [True, False, False, True]	False
//     [False, False, False, False]	False

//SOLUTION

function onlyOne(...arg) {
    let count = 0
    if(arg.length === 0) return false
    for(let i = 0; i < arg.length; i++){
        if(arg[i] == true){
            count++
        }
    }
    return count == 1? true : false
}