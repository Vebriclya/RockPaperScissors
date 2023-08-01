let pcWins = 0;
let playerWins = 0;
let winnerArray = [];

const buttons = document.querySelectorAll("button");
const gameArea = document.querySelector("#gameArea");
const battleDisplayDiv = document.createElement("p");
const resultDisplayDiv = document.createElement("p");
const battleLog = document.createElement("p");

battleDisplayDiv.setAttribute("style", "white-space: pre;");
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
      pcWins += 0;
      playerWins += 0;
    }

    if(pcWins === 5 || playerWins === 5){
        overallWinner(playerWins, pcWins);
    }
    
  });
});

gameArea.appendChild(battleDisplayDiv);
gameArea.appendChild(resultDisplayDiv);
gameArea.appendChild(battleLog);

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
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "It's a tie!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("It's a tie!");
      winner = "tie";
      break;
    //player rock vs pc paper = pc wins
    case playerTurn === "rock" && computerTurn === "paper":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //pc rock vs player paper = player wins
    case computerTurn === "rock" && playerTurn === "paper":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //pc rock vs player scissors = pc wins
    case computerTurn === "rock" && playerTurn === "scissors":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //player rock vs pc scissors = player wins
    case playerTurn === "rock" && computerTurn === "scissors":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //pc paper vs player rock = pc wins
    case computerTurn === "paper" && playerTurn === "rock":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //player paper vs pc rock = player wins
    case playerTurn === "paper" && computerTurn === "rock":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Player wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Player wins!");
      winner = "player";
      break;
    //player paper vs pc scissors = pc wins
    case playerTurn === "paper" && computerTurn === "scissors":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Computer wins!\r\n";
      console.log(`You played ${playerTurn} vs computers ${computerTurn}`);
      console.log("Computer wins!");
      winner = "pc";
      break;
    //pc paper vs player scissors = player wins
    case computerTurn === "paper" && playerTurn === "scissors":
      battleDisplayDiv.textContent = `You played ${playerTurn} vs computers ${computerTurn}\r\n`;
      battleDisplayDiv.textContent += "Player wins!\r\n";
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
    // Do nothing
  } else {
    console.log(
      "An error has occurred logging the winner. No winners have been logged."
    );
  }

  console.log(winnerArray);
}

function displayTotal(playerWins, pcWins){

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
