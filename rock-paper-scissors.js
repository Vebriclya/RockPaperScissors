let pcWins = 0;
let playerWins = 0;
let winnerArray = [];

const buttons = document.querySelectorAll("button");
const gameArea = document.querySelector("#gameArea");
const displayBattle = document.createElement("p");
const displayResult = document.createElement("p");
const battleLog = document.createElement("p");

battleLog.setAttribute("style", "white-space: pre;");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const winner = playRound(button.id);
    logWin(winner);

    if (winner === "pc") {
      pcWins += 1;
    } else if (winner === "player") {
      playerWins += 1;
    } else if (winner === "tie") {
      pcWins += 1;
      playerWins += 1;
    }

    overallWinner(playerWins, pcWins);
  });
});

gameArea.appendChild(displayBattle);
gameArea.appendChild(displayResult);
gameArea.appendChild(battleLog);

// This loops through the winner array in order to calculate who won how many times
/*
winnerArray.forEach((winner) => {
  if (winner === "pc") {
    pcWins += 1;
  } else if (winner === "player") {
    playerWins += 1;
  } else if (winner === "tie") {
    pcWins += 1;
    playerWins += 1;
  } else {
    console.log("An error occured calculating win amounts.");
  }
});
*/
//console.log(winnerArray);
//overallWinner(playerWins, pcWins);

/* ___________FUNCTIONS___________ */

function playRound(playerTurn) {
  let winner = "";
  let computerTurn = getComputerTurn();
  winner = battle(playerTurn, computerTurn);

  return winner;
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
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "It's a tie!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("It's a tie!");
      winner = "tie";
      break;
    //player rock vs pc paper = pc wins
    case playerTurn === "rock" && computerTurn === "paper":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Computer wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //pc rock vs player paper = player wins
    case computerTurn === "rock" && playerTurn === "paper":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Player wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //pc rock vs player scissors = pc wins
    case computerTurn === "rock" && playerTurn === "scissors":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Computer wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //player rock vs pc scissors = player wins
    case playerTurn === "rock" && computerTurn === "scissors":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Player wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //pc paper vs player rock = pc wins
    case computerTurn === "paper" && playerTurn === "rock":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Computer wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //player paper vs pc rock = player wins
    case playerTurn === "paper" && computerTurn === "rock":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Player wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //player paper vs pc scissors = pc wins
    case playerTurn === "paper" && computerTurn === "scissors":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Computer wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //pc paper vs player scissors = player wins
    case computerTurn === "paper" && playerTurn === "scissors":
      displayBattle.textContent = `You played ${playerTurn} vs computers ${computerTurn}`;
      displayResult.textContent = "Player wins!";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
  }

  return winner;
}

function logWin(winner) {
  if (winner === "pc") {
    winnerArray.push("pc");
  } else if (winner === "player") {
    winnerArray.push("player");
  } else if (winner === "tie") {
    winnerArray.push("pc");
    winnerArray.push("player");
  } else {
    console.log(
      "An error has occurred logging the winner. No winners have been logged."
    );
  }

  console.log(winnerArray);
}

function overallWinner(playerWins, pcWins) {
  battleLog.textContent = `You won ${playerWins} times, and the computer won ${pcWins} times.\r\n`;
  battleLog.textContent += `Which means...\r\n`;

  if (playerWins > pcWins) {
    battleLog.textContent +=
      "Congrats, you're officially better than the computer!";
  } else if (pcWins > playerWins) {
    battleLog.textContent +=
      "The computer was better than you. How embarassing.";
  } else if (pcWins === playerWins) {
    battleLog.textContent +=
      "You're about as good at this as the computer. Make of this what you will.";
  } else {
    battleLog.textContent +=
      "An error occurred comparing winners. We don't know if you are smarter than the computer.";
  }
}
