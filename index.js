let userScore = 0 ;
let computerScore = 0;

const choices=document.querySelectorAll('.choice');
const msgDisplay=document.querySelector('#msg');
const score=document.querySelector('.score');
const user=document.querySelector('#user-score');
const computer=document.querySelector('#comp-score');
const gencompChoice=()=>{
    const arr=["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const updateColor=(userScore, computerScore) =>{
    if(userScore > computerScore){
        user.style.backgroundColor = "green";
        computer.style.backgroundColor = "red";
    } else if(userScore < computerScore){
        user.style.backgroundColor = "red";
        computer.style.backgroundColor = "green";
    } else {
        user.style.backgroundColor = " burlywood";
        computer.style.backgroundColor = " burlywood";
    }
}
const playGame=(userChoice)=>{
    const computerChoice=gencompChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    //determining the winner
    if(userChoice===computerChoice){
        //console.log("It's a tie!");
        msgDisplay.textContent = "Draw! Play again";
        msgDisplay.style.backgroundColor = "black";
        updateColor(userScore, computerScore);
        
    }
    else if((userChoice==="rock" && computerChoice==="scissors")||(userChoice==="paper" && computerChoice==="rock")||
           (userChoice==="scissors" && computerChoice==="paper")){
        //console.log(`You win! ${userChoice} beats ${computerChoice}.`);
        msgDisplay.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        msgDisplay.style.backgroundColor = "green";

        userScore++;
        user.textContent = userScore;
        updateColor(userScore, computerScore);
    }
    else{
        //console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
        msgDisplay.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        msgDisplay.style.backgroundColor = "red";
        computerScore++;
        computer.textContent = computerScore;
        updateColor(userScore, computerScore);
    }

}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});