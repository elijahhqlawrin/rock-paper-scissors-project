 /** Create an array called gameChoices[] containing three elements: "rock", "paper", and "scissors". */
 const gameChoices = ["rock", "paper", "scissors"];
 /** Create a function called playRound() that triggers the start of a new round.
 Give it two parameters, playerSelection and computerSelection. */
 function playRound() {
    /** Create a prompt() that asks player to choose between rock, paper, or scissors. */
    let yourWeapon = prompt("Select your weapon");
    /** Make playerSelection case-insensitive so that the player can input "rock", "ROCK", "RocK", or any other variation. */
    return yourWeapon.toLowerCase();
 }
    /** Create a function called getComputerChoice that tells computer to
     randomly select one of the three elements from the array gameChoices[]. */
     function getComputerChoice() {
        let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        /** Pass computer's random choice to the parameter computerSelection. */
        return computerChoice;
     }

         /** Set an if else statement that evaluates yourWeapon against computerChoice. */
     function roundEvaluation(yourWeapon, computerChoice) {
            /** Set first set of conditions for player win. */
        if (yourWeapon === "rock" && computerChoice === "scissors") {
            return "You win the round!";
            /** Set second set of conditions for player win. */
        } else if (yourWeapon === "paper" && computerChoice === "rock") {
            return "You win the round.";
                /** Set third set of conditions for player win. */
        } else if (yourWeapon === "scissors" && computerChoice === "paper") {
            return "You win the round.";
                /** Set Conditions for a "Tie" */
        } else if (yourWeapon === computerChoice) {
            return "Tie";
        } else {
            return "You lose the round."
        }
    }
 /** Create a funtion called game() that invokes the function playRound() five times. */

/**
 *   if (a === "rock" && b === "scissors" || a === "paper" && b === "rock" || a === "scissors" && b === "paper") {
            return "You win the round!";
 *    } else if (a === "rock" && b === "paper" || a === "paper" && b === "scissors" || a === "scissors" && b === "rock") {
            return "You lose the round.";
 *    } else if (a === b === "rock" || a === b === "paper" || a === b === "scissors") {
            return "Tie";
        }
*/

