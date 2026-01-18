// Description:
//     Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!
//
// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
//
//     So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!
//
//     Example:
//
// "Sky scra per" -> "Skyscraper"
// If the building contains no ghosts, return the string:
//
//     "You just wanted my autograph didn't you?"

//SOLUTION


function ghostBusters(building) {
    if(building.includes(' ') == false) return "You just wanted my autograph didn't you?"
    let res = ''
    for(let i = 0; i < building.length; i++){
        building[i] == ' '? null : res+=building[i]
    }
    return res
}
