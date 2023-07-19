// Greet user
console.log("Welcome to Rock, Paper, Scissors!");

// Ask user to choose rock, paper, or scissors
// Check the entry is valid
let playerTurn = getUserEntry();

// Randomly generate rock, paper, or scissors for the computer
let computerTurn = generateComputerTurn();

// Compare the user entry and the computer entry
switch(true){
    // both values are the same = tie
    case (computerTurn === playerTurn):
        console.log("It's a tie!");
        break;
    //player rock vs pc paper = pc wins
    case (playerTurn === "rock" && computerTurn === "paper"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Computer wins!");
        break;
    //pc rock vs player paper = player wins
    case (computerTurn === "rock" && playerTurn === "paper"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Player wins!");
        break;
    //pc rock vs player scissors = pc wins
    case (computerTurn === "rock" && playerTurn === "scissors"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Computer wins!");
        break;
    //player rock vs pc scissors = player wins
    case (playerTurn === "rock" && computerTurn === "scissors"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Player wins!");
        break;
    //pc paper vs player rock = pc wins
    case (computerTurn === "paper" && playerTurn === "rock"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Computer wins!");
        break;
    //player paper vs pc rock = player wins
    case (playerTurn === "paper" && computerTurn === "rock"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Player wins!");
        break;
    //player paper vs pc scissors = pc wins
    case (playerTurn === "paper" && computerTurn === "scissors"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Computer wins!");
        break;
    //pc paper vs player scissors = player wins
    case (computerTurn === "paper" && playerTurn === "scissors"):
        console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
        console.log("Player wins!");
        break;  
}



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
        }
        else{
            console.log(`Sorry, ${userChoice} isn't a valid entry.`);
        }
    }

    return userChoice;
}