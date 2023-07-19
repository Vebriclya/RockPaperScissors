// Greet user
console.log("Welcome to Rock, Paper, Scissors!");

// Ask user to choose rock, paper, or scissors
// Check the entry is valid
let userTurn = getUserEntry();

// Randomly generate rock, paper, or scissors for the computer
let computerTurn = generateComputerTurn();
console.log(computerTurn);

// Compare the user entry and the computer entry
switch(true){
    case (computerTurn === userTurn):
        console.log("It's a tie!");
        break;
    case (computerTurn === "rock" && userTurn === "scissors"):
        console.log("")
    
}

// both values are the same = tie

//player rock vs pc paper = pc wins
//pc rock vs player paper = player wins

//pc rock vs player scissors = pc wins
//player rock vs pc scissors = player wins

//pc paper vs player rock = pc wins
//player paper vs pc rock = player wins

//player paper vs pc scissors = pc wins
//pc paper vs player scissors = player wins

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
            console.log(`You entered ${userChoice.toLowerCase()}`);
        }
        else{
            console.log(`Sorry, ${userChoice} isn't a valid entry.`);
        }
    }

    return userChoice;
}