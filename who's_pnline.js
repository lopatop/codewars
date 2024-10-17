// Description:
// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:
// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:
// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).


// SOLUTION:

const whosOnline = (friends) => {
    const result = {};
    if (friends.length === 0) {
        return result
    } else {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].status === "offline") {
                if (result.offline) {
                    result.offline.push(friends[i].username)
                } else {
                    result.offline = [friends[i].username]
                }
            } else if (friends[i].lastActivity <= 10) {
                if (result.online) {
                    result.online.push(friends[i].username)
                } else {
                    result.online = [friends[i].username]
                }
            } else {
                if (result.away) {
                    result.away.push(friends[i].username)
                } else {
                    result.away = [friends[i].username]
                }
            }
        } return result
    }
}