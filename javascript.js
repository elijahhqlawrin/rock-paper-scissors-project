 /** Create an array called gameChoices[] containing three elements: "rock", "paper", and "scissors". */
 /** Create a function called playRound() that triggers the start of a new round.
 Give it two parameters, playerSelection and computerSelection. */
    /** Create a prompt() that asks player to choose between rock, paper, or scissors. */
        /** Pass input from prompt() to the parameter playerSelection.
         Make playerSelection case-insensitive so that the player can input "rock", "ROCK", "RocK", or any other variation. */
    /** Create a function called getComputerChoice that tells computer to
     randomly select one of the three elements from the array gameChoices[]. */
        /** Pass computer's random choice to the parameter computerSelection. */
    /** Set an if else statement that evaluates playerSelection against computerSelection. */
        /** For brevity, let playerSelection = a, and let computerSelection = b */
            /** If (a === "rock" && b === "rock" || a === "paper" && b === "paper" || a === "scissors" && b === "scissors")
             return ""Tie" */
            /** If (a === "rock" && b === "scissors" || a === "paper" && b === "rock" || a === "scissors" && b === "paper")
             return ""You win the round!" */
            /** If (a === "rock" && b === "paper" || a === "paper" && b === "scissors" || a === "scissors" && b === "rock")
             return ""You lose the round." */
 /** Create a funtion called game() that invokes the function playRound() five times. */
