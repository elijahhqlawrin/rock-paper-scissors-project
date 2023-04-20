/** Create an array containing three elements: rock, paper, and scissors. */
const gameChoices = ["rock", "paper", "scissors"];

/** Write a function that selects a random number between 0 and 1
 * rounds down to the nearest number
 * and multiplies it by the number of elements in the array gameChoices. */
function getComputerChoice() {
    let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerChoice;
}

/** Write a function that checks the winner of a game round.
 * Give it two paramenters: a, b.
 * Set conditions for parameters.
 *  If a = b, return "tie".
 *  If a > b in any case, return "human".
 *  If a < b in any case, return "computer".
 */
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

/** Write a function controls a game round.
 * Pass the same two parameter from earlier.
 * Asign the previous function to a new variable result.
 * Write an if else statement.
 *  If result = "tie", return string "tie game.".
 *  Else if result = "human", return string "human wins" and specify which choice beats which.
 *  Else if result = "computer", return string "computer wins" and specify which choice beats which.
 */
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

/** Write a function that shows the human player an input field.
 * Prompt player to make a selection between rock, paper, or scissors.
 * If input field is left empty, repeat prompt until given text.
 * Convert player input to lowercase.
 * If input field is given text, then return input.
*/
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

/** Write a function to run all game functions.
 * Create two variables that track the scores of the human and computer players, and initialize at 0.
 * Write a for loop that increments either score depending on the seults of each round played.
 * Set the loop to repeat 5 times.
 * Signal when the game is over by logging "end game" after 5 rounds.
 * If human player score > computer score, log "human player wins".
 * If human player score < computer score, log "computer wins".
 * If human player score = computer score, log "tie game".
*/
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

/** Invoke function game() */
game()