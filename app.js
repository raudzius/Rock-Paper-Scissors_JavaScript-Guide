const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

function getPlayerChoice() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

function getComputerChoice() {
  const randomValue = Math.random();

  if (randomValue < 0.34) return ROCK;
  if (randomValue < 0.67) return PAPER;
  return SCISSORS;
}

function getWinner(cChoice, pChoice) {
  if (cChoice === pChoice) return RESULT_DRAW;
  if ((cChoice === ROCK && pChoice === PAPER) || (cChoice === PAPER && pChoice === SCISSORS) || (cChoice === SCISSORS && pChoice === ROCK)) return RESULT_PLAYER_WINS;
  return RESULT_COMPUTER_WINS;
}

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning === true) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice},\nComputer picked: ${computerChoice},\nTherefore you `;
  if (winner === RESULT_DRAW) message += 'had a draw.';
  if (winner === RESULT_PLAYER_WINS) message += 'won.';
  if (winner === RESULT_COMPUTER_WINS) message += 'lost.';
  alert(message);
  console.log(message);
  gameIsRunning = false;
});
