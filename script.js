const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initGame(){
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer = "X"){
        currentPlayer ="0";
    }
    else {
        currentPlayer = "x"
    }
    gameInfo.innerText =`Current Player - ${currentPlayer}`;
}


function handleClick(){
    if(gameGrid[index] ===""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();

        checkGameOver();
    }
}


boxes.forEach((box, index)=>{
    box.addEventListener("click", ()=>{
        handleClick(index); 
    });
});