let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let flag = Math.floor( Math.random() * 3);
    if(flag == 1) {
        return "rock";
    }
    else if(flag == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You win! Your ${humanChoice} beats his ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! His ${computerChoice} beats your ${humanChoice}`)
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanSelection, computerChoice);
    }
    console.log(`${humanScore} - ${computerScore}`);
    if(humanScore > computerScore) {
        console.log("You win the game!");
    } else if(humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();