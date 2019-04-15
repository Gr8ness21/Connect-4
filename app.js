// 1. Establish variables and Set up a 6 row - 7 collumn board
// 2. Fill the board with empty spaces
// 3. Create a game loop end of game will signal start of a new one
// 5. Ask Player for move then try
// 6. If it works -> check for winner -> if there is a winner end game, record score, switch players.

//Create a class that comands will push to
class Connect4{
//using a constructor to create rows and columns,can later be used to incorporate additional functions.
//selector will call all functions to the ID of connect 4 in the html.
    constructor(selector){
    this.rows = 6
    this.cols = 7

    const $grid = $(selector);
    $grid.html("working");
    };







//End of functions
};

$(document).ready(function(){
// STEP ONE: CREATE A 6*7 GRID/TABLE
const connect4 = new Connect4("#connect4")
});
