// Description:
//     Get ASCII value of a character.
//
//     For the ASCII table you can refer to http://www.asciitable.com/

// SOLUTION:

function getASCII(c){
    return c.split('').reduce((acc,el)=> acc+ el.charCodeAt(0),0)
}