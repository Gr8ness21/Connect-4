// 1. Establish variables and Set up a 6 row - 7 collumn board
// 2. Fill the board with empty spaces
// 3. Create a game loop end of game will signal start of a new one
// 5. Ask Player for move then try
// 6. If it works -> check for winner -> if there is a winner end game, record score, switch players.

// STEP ONE: CREATE A 6*7 GRID/TABLE
$(document).ready(function () {
    // STEP ONE: CREATE A 6*7 GRID/TABLE
    const connect4 = new Connect4("#connect4")
});
//Create a class that comands will push to
class Connect4 {
    //using a constructor to create rows and columns,can later be used to incorporate additional functions.
    //selector will call all functions to the ID of connect 4 in the html.
    constructor(selector) {
        this.selector = selector;
        this.Rows = 6;
        this.Cols = 7;
        this.player = "yellow";
        this.buildGrid();
        this.allEventListeners();
    };

    //create a function that builds creates divs to serve as grid.
    buildGrid() {
        const $game = $(this.selector);
        for (let row = 0; row < this.Rows; row++) {
            const $row = $("<div>")
                .addClass("row");
            //columns must be nested inside of the rows. for-loop will generate columns.
            for (let col = 0; col < this.Cols; col++) {
                const $col = $("<div>")
                    .addClass("empty column")
                    .attr("data-column", col)
                    .attr("data-row", row)
                $row.append($col);
            }
            $game.append($row);
        }
    }

    //STEP TWO: Create Event Listeners - token drop, player two piece, hover over column, etc.

    allEventListeners() {
        //grabbing DOM elements and making them do things!
        const $game = $(this.selector);
        const now = this;
        //used when needing to make specific changes locally, an indicator like "now" or "that" can be used.

        function findAvailableSpot(col){
            const spots = $(`.column[data-column='${col}']`);
            for(let c = spots.length - 1; c >= 0; c--){
                const $spots = $(spots[c]);
                if ($spots.hasClass("empty")){
                    return $spots;
                }
            }
            return null;
        }

        //in order to identify specific spots in the grid, I have to add values or coordinates to empty spots.
        // display place holder on hover
        $game.on('mouseover', '.empty.column', function () {
            const col = $(this).data("column");
            const $emptyBottomSpot = findAvailableSpot(col);
            $emptyBottomSpot.addClass("yourMove");
        });
        //remove placeholder off hover
        $game.on('mouseleave', '.column', function() {
            $(".column").removeClass("yourMove");
        });

        //drop token on click
        $game.on('click', '.empty.column', function (){
            const col = $(this).data("column");
            const $emptyBottomSpot = findAvailableSpot(col);
            $emptyBottomSpot.removeClass("empty");
            $emptyBottomSpot.addClass(now.player);
            now.player = (now.player === "yellow") ? "red" : "yellow";
            //question marks can be used for inline conditional statment
            $(this).trigger('mouseover');
        });

    }

    //STEP THREE: Check for wins
// Check for diagnal wins
// Check for Vertical Wins
// Check for Horizontal Wins

// Trigger modal pop up that fills screen with option to refresh page and start a new round



    //// Modal
// document.getElementById('button').addEventListener('click',function(){
//     document.querySelector('.modal').style.display='flex';
// });

// document.querySelector('.close').addEventListener('click',function(){
//     document.querySelector('.modal').style.display='none';
// });

    //End of functions
};

// $(document).ready(function () {
//     // STEP ONE: CREATE A 6*7 GRID/TABLE
//     const connect4 = new Connect4("#connect4")
// });
