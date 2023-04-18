/**
 Write a function that can determine the winner when given two inputs, one from each player.
    Rock-rock, rock-paper, rock-scissors, paper-paper, paper-scissors, scissors-scissors, 
 Begin round.
    Each round should be run by a funciton called playRound with two parameters (playerSelection, computerSelection).
        The playerSelection parameter should be case-insensitive.
    Use prompt() to ask user to select a weapon: rock, paper, or scissors.
        User types in weapon of choice and hits enter. Choice is returned to function.
    Computer inputs a random weapon of choice. Use with a function called getComputerChoice that will return either a rock, paper, or scissors.
        Return a string annuoncing the winner of the round: "You win/lose! ___ beats ___"
            If tie, make no changes to score.
 Begin next round.
    Repeat lines 5-9 for a total of five rounds.
        Announce winner/loser after final round.
 Nest round funciton inside another function called game().
 */

 const gameChoices = [
    "rock",
    "paper",
    "scissors"
 ];

 function getComputerChoice() {
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice;
 }

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
        return "You win!";
    } else if (computerSelection > playerSelection) {
        return "You lose!";
    } else {
        return "Tie";
    }   
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();