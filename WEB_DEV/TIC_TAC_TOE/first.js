let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#new-game");
let message = document.querySelector(".msg-container");
let messageText = document.querySelector("#msg");

let O = true;
let count = 0;
message.classList.add("hide");

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () =>{
    O = true;
    count = 0;
    enableBoxes();
    message.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(O){
            box.innerText = "O";
            O = false;
        }
        else{
            box.innerText = "X";
            O = true;
        }
        checkWinner();
        box.disabled = true;
        count++;
    })
});

boxes.forEach((box) =>{
    box.style.fontSize = "5rem";
    box.style.color ="#001f4d";
})
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;

    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    messageText.innerText = `WINNER IS ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winningCombinations ){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 !=""&&val2 !=""&&val3 !=""){
            if(val1===val2&&val2===val3){
                showWinner(val1);
                return true;
            }

        }
    }
}

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", () => {
    resetGame();
    messageText.innerText = "New Game Started";
    message.classList.remove("hide");
});