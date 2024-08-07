//Create an array containing all valid choices
const choices = ["rock", "paper", "scissors"];


// Get the computer choice
function getComputerChoice() {

    //Generate a random number between 0 and 2 to access choices array
    const choice = Math.floor(Math.random() * 3);

    //Return choice
    return choices[choice];
}

// Get the player choice
function getHumanChoice() {
    //Get User input
    const choice = prompt("Choose Rock, Paper or Scissors").toLowerCase().trim();

    //Parse user input and if valid return choice otherwise notify the user and restart
    if (choices.includes(choice)) {
        return choice;
    } else {
        alert(`${choice} is not a valid choice. Please try again!`);
        return getHumanChoice();
    }

}





//Define game logic

function playGame() {
    //declare score variables
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    //Define game logic for single round
    function playRound(humanChoice, computerChoice) {
        //define ending messages
        const win = `You win! ${humanChoice} beats ${computerChoice}!`;
        const lose = `You lose! ${computerChoice} beats ${humanChoice}!`;
        const tie = `You tie! You both chose ${humanChoice}`;

        //create switch statement for human choice with nested switch for computer choice
        switch (humanChoice) {
            case 'rock':
                switch (computerChoice) {
                    case 'rock':
                        return tie;
                    case 'paper':
                        computerScore++;
                        return lose;
                    case 'scissors':
                        humanScore++
                        return win;
                }
            case 'paper':
                switch (computerChoice) {
                    case 'rock':
                        humanScore++;
                        return win;
                    case 'paper':
                        return tie;
                    case 'scissors':
                        computerScore++;
                        return lose;
                }
            case 'scissors':
                switch (computerChoice) {
                    case 'rock':
                        computerScore++;
                        return lose;
                    case 'paper':
                        humanScore++;
                        return win;
                    case 'scissors':
                        return tie;
                }
        }

    }

    //Define game loop
    for(i = 0; i < rounds; i++){
        alert(playRound(getHumanChoice(), getComputerChoice()));
    }

    //Display final score
    alert(`Your score: ${humanScore}. CPU Score: ${computerScore}.`);
}

playGame();
