

// Get the computer choice

function getComputerChoice(){
    //Create an array containing possible choices
    const choices = ["rock", "paper", "scissors"];

    //Generate a random number between 0 and 2 to access choices array
    const choice = Math.floor(Math.random() * 3);

    //Return choice
    return choices[choice];
}

console.log(getComputerChoice());