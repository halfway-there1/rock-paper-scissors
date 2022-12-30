function getRandomInt(maxLimit) {
  return Math.floor(Math.random() * maxLimit);
}

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let i = getRandomInt(1000) % 3;
  console.log(i);
  return choice[i];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return null;
  }

  let winner = "c"; // "c" --> computer  "p" --> player
  if (playerSelection === "rock" && computerSelection === "scissor") {
    winner = "p";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner = "p";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    winner = "p";
  }

  if (winner === "p") {
    return "p";
  } else {
    return "c";
  }
}

function getFinalResultMessage(p_score, c_score) {
  let resultMessage;
  if (p_score === c_score) {
    resultMessage = "It's a tie.";
  } else if (p_score > c_score) {
    resultMessage = "You Win!";
  } else {
    resultMessage = "You Lose!";
  }

  return resultMessage;
}

function getRoundResultMessage(
  playerSelection,
  computerSelection,
  roundResult
) {
  if (roundResult === null) return "It's a tie";

  let resultMessage;
  if (roundResult === "p") {
    resultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  return resultMessage;
}

function game() {
  let p_score = 0,
    c_score = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter your move.(Rock/Paper/Scissor)",
      "Paper"
    );
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    alert(
      getRoundResultMessage(playerSelection, computerSelection, roundResult)
    );

    p_score += roundResult === "p";
    c_score += roundResult === "c";
  }

  alert("FINAL STANDING : " + getFinalResultMessage(p_score, c_score));
}

game();
