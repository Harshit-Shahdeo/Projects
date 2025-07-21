let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll('.choice');
let userscoreboard = document.querySelector('#user');
let computerscoreboard = document.querySelector('#comp');
let msg = document.querySelector('.msg');

const compmove = () =>{
    let moves = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random()* moves.length);
    return moves[rand];
}

const playGame = (userChoice) => {
    let compchoice = compmove();

    if(userChoice === compchoice){
        msg.innerText ="It's a draw! You both chose " + userChoice;
        // To set a background color, we must override the CSS that makes the text transparent
        msg.style.background = "#081b31";
        msg.style.webkitTextFillColor = "white";
    } 
    else if((userChoice) === 'rock' && compchoice === 'scissors' ||
            (userChoice === 'paper' && compchoice === 'rock') ||
            (userChoice === 'scissors' && compchoice === 'paper')){
                userscore++;
                userscoreboard.innerText = userscore;
                msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
                msg.style.background = "green";
                msg.style.webkitTextFillColor = "white";
            }
            else{
                computerscore++;
                computerscoreboard.innerText = computerscore;
                msg.innerText = `You lose! ${compchoice} beats your ${userChoice}`;
                msg.style.background = "red";
                msg.style.webkitTextFillColor = "white";
              }
};

choices.forEach(choice =>{
    choice.addEventListener('click', () => {
        const userchoice = choice.id;
        playGame(userchoice);
    });
});