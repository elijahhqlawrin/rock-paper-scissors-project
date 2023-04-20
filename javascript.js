const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerChoice;
}

function evaluateRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        return "Tie";
    } else if ((humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "scissors" && computerSelection == "paper") ||
        (humanSelection == "paper" && computerSelection == "rock")
    ) {
        return "Human";
    }
    else {
        return "Computer";
    }
}


function playRound(humanSelection, computerSelection) {
    const result = evaluateRound(humanSelection, computerSelection);
    if (result == "Tie") {
        return "Tie Game."
    } else if (result == "Human") {
        return `Human Wins! ${humanSelection} defeats ${computerSelection}`
    } else {
        return `Human Wins! ${computerSelection} defeats ${humanSelection}`
    }
}

function getHumanChoice() {
    let humanInput = false;
    while (humanInput == false) {
        const humanChoice = prompt("Choose your weapon: Rock, Paper, or Scissors.");
        if (humanChoice == null) {
            continue;
        }
        const humanChoiceUncapitalize = humanChoice.toLowerCase();
        if (gameChoices.includes(humanChoiceUncapitalize)) {
            humanInput = true;
            return humanChoiceUncapitalize;
        }
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("<><><><><><><><><><><>");
        if (evaluateRound(humanSelection, computerSelection) == "Human") {
            humanScore++;
        } else if (evaluateRound(humanSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    console.log("End Game")
    if (humanScore > computerScore) {
        console.log("Human player defeated the Computer. Human player wins!");
    } else if (computerScore > humanScore) {
        console.log("Computer defeated the Human player. Computer wins!");
    } else {
        console.log("Human player and Computer are evenly matched. Neither wins.")
    }
}

game()