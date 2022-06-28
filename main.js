// TASK 1
// Write a set of 'if' statements that will determine the winner.
// create a set of variables for each move
// create 3 possible moves for each player e.g. rock vs scissors = rock win
// TASK 2
// Create functions for computer's choice
//Create functions for player's choice
//Create function for winner
// TASK 3 
// Create a prompt for the player to input their choice
// Make sure it returns their selection so it shows on screen
// TASK 4
// Add Math.random to the computerchoice function as well as choices.length
// TASK 5
// Create a while loop 
// Follow up with a confirm()
// TASK 6 
//
const choices = ["rock", "paper", "scissor"]

function game(){
    round()
}

// declaring selections
function round(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    const winner = getWinner(playerSelection, computerSelection)
    console.log("Player picked:" + playerSelection)
    console.log("Computer picked:" + computerSelection)
    console.log(winner)
   

// computer randomly picks rock, paper, scissors
function computerChoice(){
    return choices[Math.floor(Math.random()* choices.length)]
}

//player picks a choice
function playerChoice(){
    let playerSelection = prompt("Please type 'Rock', 'Paper' or 'Scissor'.")
    return playerSelection
}
 
//if statement to check if either user wins or computer wins or tie
function getWinner(playerMove, computerMove){
     if (playerMove === computerMove){
        return "Tie"
     } else if (
     (playerMove === "rock" && computerMove === "scissor") ||
     (playerMove === "paper" && computerMove === "rock") ||
     (playerMove === "scissor" && computerMove === "paper")
     ){
        return "Player Win"
     } else {
        return "Computer Win"
     }
     
}

}

game();