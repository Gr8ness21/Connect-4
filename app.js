// *Comments for structure and organization
// Game consists of players, two "tokens", rows and columns. I need to...

// 1. Establish variables and Set up a 6 row - 7 collumn board
// 2. Fill the board with empty spaces
// 3. Create a game loop end of game will signal start of a new one
// 5. Ask Player for move then try
// 6. If it works -> check for winner -> if there is a winner end game, record score, switch players.
$(document).ready(function(){
// push functions into my established grid. Using "this" will localize commands. Makes jquery more easily readable.
    const connect4 = new Connect4('#connect4');
//new grid must have "new" in front of it to work with jquery.
    console.log("working");
})

class Connect4{
    constructor(selector){
        const $grid = $(selector);
        document.getElementByID('#connect4');
    }
}