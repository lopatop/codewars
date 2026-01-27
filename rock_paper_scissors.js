// Description:
//     Rules of the "Rock, Paper, Scissors" game are:
//
//     Rock beats Scissors,
//     Scissors beat Paper,
//     Paper beats Rock,
//     Two identical moves are a draw.
//     Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.
//
// Examples:
//     "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

//SOLUTION

const rps = (p1, p2) => {
    const inf = {
        r: 'rock',
        s: 'scissors',
        p: 'paper'
    }
    if(p1 == p2) return "Draw!"
    if (p1 == inf.r && p2 == inf.s ) return "Player 1 won!"
    if (p1 == inf.s && p2 == inf.p ) return "Player 1 won!"
    if (p1 == inf.p && p2 == inf.r ) return "Player 1 won!"

    return "Player 2 won!"



};