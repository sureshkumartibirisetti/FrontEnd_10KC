// 4.	Define two functions:
// –	startGame that logs “Game Started!”
// –	endGame that logs “Game Over!”
// Inside the startGame function, call the endGame function.

function startGame(){
    console.log("Game Strated");
    endGame();
}
function endGame(){
    console.log("End Game");
}
startGame();