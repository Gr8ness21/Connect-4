// 1. Establish variables and Set up a 6 row - 7 collumn board
// 2. Fill the board with empty spaces
// 3. Create a game loop end of game will signal start of a new one
// 5. Ask Player for move then try
// 6. If it works -> check for winner -> if there is a winner end game, record score, switch players.

// STEP ONE: CREATE A 6*7 GRID/TABLE
//Create a class that comands will push to
class Connect4{
//using a constructor to create rows and columns,can later be used to incorporate additional functions.
//selector will call all functions to the ID of connect 4 in the html.
    constructor(selector){
    this.selector = selector;
    this.buildGrid();
    this.Rows = 6;
    this.Cols = 7;
    debugger;
    };
//create a function that builds creates divs to serve as grid.
buildGrid(){
    const $game = $(this.selector);
    for(let row = 0; row < this.Rows; row++){
    const $row = $("<div>")
    .addClass("row");
    $game.append($row);
    }
    console.log($game.html())
}







//End of functions
};

$(document).ready(function(){
// STEP ONE: CREATE A 6*7 GRID/TABLE
const connect4 = new Connect4("#connect4")
});
