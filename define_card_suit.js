// Description:
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// SOLUTION:

function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs';
    } else if (card.includes('♦')) {
        return 'diamonds';
    } else if (card.includes('♥')) {
        return 'hearts';
    } else if (card.includes('♠')) {
        return 'spades';
    }
}

//SOLUTION 2:

function defineSuit(card) {
    switch (card.slice(-1)) {
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        case '♠': return 'spades';
    }
}