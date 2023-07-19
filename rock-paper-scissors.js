// Greet user
console.log("Welcome to Rock, Paper, Scissors!");

// Ask user to choose rock, paper, or scissors
// Check the entry is valid
let userTurn = getUserEntry();

// Randomly generate rock, paper, or scissors for the computer
let computerTurn = generateComputerTurn();
console.log(computerTurn);

// Compare the user entry and the computer entry

// If one is rock and the other is scissors, rock wins

// If one is rock and the other is paper, paper wins

// If one is paper and the other is scissors, scissors win

// Print the winner

// Ask user if they want to play again, otherwise quit

/* ___________FUNCTIONS___________ */

function generateComputerTurn(){
    let computerTurn = Math.floor(Math.random() * 3) + 1;

    if(computerTurn === 1){
        computerTurn = "rock";
    }
    else if(computerTurn === 2){
        computerTurn = "paper";
    }
    else if(computerTurn === 3){
        computerTurn = "scissors";
    }else{
        console.log("An error in the random calculation has occured.");
    }

    return computerTurn;
}

function getUserEntry(){
    let verifyEntry = false;
    let userChoice = "";

    while(verifyEntry === false){
        userChoice = prompt("Please choose rock, paper, or scissors");
        if(userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors"){
            verifyEntry = true;
            console.log(`You entered ${userChoice}`);
        }
        else{
            console.log(`Sorry, ${userChoice} isn't a valid entry.`);
        }
    }

    return userChoice;
}