let pcWins = 0;
let playerWins = 0;

const buttons = document.querySelectorAll("button");
const gameArea = document.querySelector("#gameArea");
const battleDisplayP = document.createElement("p");
const runningTotalP = document.createElement("p");
const overallWinnerP = document.createElement("p");
const tryAgainButton = document.createElement("button");


battleDisplayP.setAttribute("style", "white-space: pre;");
overallWinnerP.setAttribute("style", "white-space: pre;");
tryAgainButton.textContent = "Try Again?";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const winner = playRound(button.id);

    logWin(winner);

    displayTotal(playerWins, pcWins);

    if(pcWins === 5 || playerWins === 5){
        overallWinner(playerWins, pcWins);
        disableButtons();
        gameArea.appendChild(tryAgainButton);
        tryAgainButton.addEventListener("click", restartGame);
    }
    
  });
});

gameArea.appendChild(battleDisplayP);
gameArea.appendChild(runningTotalP);
gameArea.appendChild(overallWinnerP);

/* ___________FUNCTIONS___________ */

function playRound(playerTurn) {
  let winner = "";
  let computerTurn = getComputerTurn();
  winner = battle(playerTurn, computerTurn);

  return winner;
}

function logWin(winner){
    if (winner === "pc") {
        pcWins += 1;
      } else if (winner === "player") {
        playerWins += 1;
      } else if (winner === "tie") {
        pcWins += 0;
        playerWins += 0;
      }
}

function disableButtons(){
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}

function enableButtons(){
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
}

function restartGame(){
    pcWins = 0;
    playerWins = 0;


    enableButtons();
    runningTotalP.textContent = "";
    overallWinnerP.textContent = "";
    gameArea.removeChild(tryAgainButton);
}

function getComputerTurn() {
  let computerTurn = Math.floor(Math.random() * 3) + 1;

  if (computerTurn === 1) {
    computerTurn = "rock";
  } else if (computerTurn === 2) {
    computerTurn = "paper";
  } else if (computerTurn === 3) {
    computerTurn = "scissors";
  } else {
    console.log("An error in the random calculation has occured.");
  }

  return computerTurn;
}

function battle(playerTurn, computerTurn) {
  let winner = "";

  switch (true) {
    // both values are the same = tie
    case computerTurn === playerTurn:
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "It's a tie!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("It's a tie!");
      winner = "tie";
      break;
    //player rock vs pc paper = pc wins
    case playerTurn === "rock" && computerTurn === "paper":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //pc rock vs player paper = player wins
    case computerTurn === "rock" && playerTurn === "paper":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //pc rock vs player scissors = pc wins
    case computerTurn === "rock" && playerTurn === "scissors":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //player rock vs pc scissors = player wins
    case playerTurn === "rock" && computerTurn === "scissors":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //pc paper vs player rock = pc wins
    case computerTurn === "paper" && playerTurn === "rock":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //player paper vs pc rock = player wins
    case playerTurn === "paper" && computerTurn === "rock":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //player paper vs pc scissors = pc wins
    case playerTurn === "paper" && computerTurn === "scissors":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //pc paper vs player scissors = player wins
    case computerTurn === "paper" && playerTurn === "scissors":
      battleDisplayP.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayP.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
  }

  return winner;
}

function displayTotal(playerWins, pcWins){
    runningTotalP.textContent = `Player wins: ${playerWins}     |     PC Wins: ${pcWins}`;
}

function overallWinner(playerWins, pcWins) {
  overallWinnerP.textContent = `You won ${playerWins} times, and the computer won ${pcWins} times.\r\n`;
  overallWinnerP.textContent += `Which means...\r\n`;

  if (playerWins > pcWins) {
    overallWinnerP.textContent +=
      "Congrats, you're officially better than the computer!";
  } else if (pcWins > playerWins) {
    overallWinnerP.textContent +=
      "The computer was better than you. How embarassing.";
  } else if (pcWins === playerWins) {
    overallWinnerP.textContent +=
      "You're about as good at this as the computer. Make of this what you will.";
  } else {
    overallWinnerP.textContent +=
      "An error occurred comparing winners. We don't know if you are smarter than the computer.";
  }
}
