'use strict';

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

function getRandomInt(maxLimit) {
  return Math.floor(Math.random() * maxLimit);
}

function getComputerChoice() {
  let choice = ['Rock', 'Paper', 'Scissor'];
  let i = getRandomInt(1000) % 3;
  return choice[i];
}

function getFinalResultMessage() {
  let resultMessage = '';
  if (playerScore === computerScore) {
    resultMessage = "It's a tie.";
  } else if (playerScore > computerScore) {
    resultMessage = 'You Win!';
  } else {
    resultMessage = 'You Lose!';
  }

  return resultMessage;
}

const scoreContainer = document.getElementById('score');

const won_lose_tie = document.getElementById('won-lose-tie');
const compChoice = document.getElementById('comp-choice');

function setResult(winner) {
  let msg = '';

  switch (true) {
    case winner === 'n':
      msg = "It's a Tie 👔";
      won_lose_tie.style.color = 'black';
      break;
    case winner === 'p':
      msg = `You Win! 😎`;
      won_lose_tie.style.color = 'green';
      break;
    case winner === 'c':
      msg = `You Lose! 😞`;
      won_lose_tie.style.color = 'red';
      break;
  }

  won_lose_tie.textContent = msg;
  compChoice.textContent = `Computer chose ${computerSelection}`;
}

function playRound(selection) {
  playerSelection = selection.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();

  let winner = 'c'; // "c" --> computer  "p" --> player "n" --> none
  switch (true) {
    case playerSelection === computerSelection:
      winner = 'n';
      break;
    case playerSelection === 'rock' && computerSelection === 'scissor':
      winner = 'p';
      break;
    case playerSelection === 'paper' && computerSelection === 'rock':
      winner = 'p';
      break;
    case playerSelection === 'scissor' && computerSelection === 'paper':
      winner = 'p';
      break;
  }

  setResult(winner);

  if (winner === 'p') playerScore++;
  if (winner === 'c') computerScore++;

  scoreContainer.textContent = `You = ${playerScore}\nComputer = ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    scoreContainer.textContent += '\n' + getFinalResultMessage();
    playerScore = 0;
    computerScore = 0;
  }
}

let rock_btn = document.getElementById('rock-btn');
let paper_btn = document.getElementById('paper-btn');
let scissor_btn = document.getElementById('scissor-btn');

console.log(rock_btn);
console.log(paper_btn);
console.log(scissor_btn);

rock_btn.addEventListener('click', function () {
  playRound('Rock');
});
paper_btn.addEventListener('click', function () {
  playRound('Paper');
});
scissor_btn.addEventListener('click', function () {
  playRound('Scissor');
});
