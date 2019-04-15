// *Comments for structure and organization
// Game consists of players, two "tokens", rows and columns. I need to...

// 1. Establish variables and Set up a 6 row - 7 collumn board
// 2. Fill the board with empty spaces
// 3. Create a game loop end of game will signal start of a new one
// 5. Ask Player for move then try
// 6. If it works -> check for winner -> if there is a winner end game, record score, switch players.
let $board = [];
const playerToken = "p"

$(document).ready(function(){
// push functions into my established grid. Using "this" will localize commands. Makes jquery more easily readable.

//Build board
const $board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','','']
    ];


//  render board
// const render = () =>{
//     const $board = document.getElementById('connect4');
//     // let doc = ``;
// }
// render();


//Make columns clickable
$('.column').click(function(){
    $this = $(this);
    $this.html(playerToken);
    const c = $this.data('c');
    const r = $this.data('r');
    $board[r][c] = playerToken;
    console.log($board);
});

// function findLastEmptyCell(){
//     const spots = $(`.column[data-c='${column}']`);
//     for(let r = spots.length - 1; r>=0; r++){
//         const $spots = $(spots[r]);
//         if($spots.hasClass('empty')){
//             return $spots;
//             console.log("working")
//         }
//     }
//     return null
// };

// $board.on('mouseenter', 'column.empty', function(){
//     const column = $(this).data('column');
//     const $lastEmptyCell = findLastEmptyCell(column);
//     $lastEmptyCell.addClass('player1');
// })





















});
