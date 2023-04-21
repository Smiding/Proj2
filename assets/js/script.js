let buttons = document.querySelectorAll('.btn');
let result = document.querySelector('#result');
let playerChoiceElement = document.querySelector('#player-choice');
let computerChoiceElement = document.querySelector('#computer-choice');
let playerScore = 0;
let computerScore = 0;
let playerScoreElement = document.querySelector('#player-score');
let computerScoreElement = document.querySelector('#computer-score');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
      return;
    }

    let playerChoice = button.id;
    let computerChoice = getComputerSelection();
    let gameResult = playRound(playerChoice, computerChoice);
    result.textContent = gameResult;
    playerChoiceElement.textContent = `You chose ${playerChoice}`;
    computerChoiceElement.textContent = `The computer chose ${computerChoice}`;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    if (playerScore === 5) {
      alert("You win!");
      resetGame();
    } else if (computerScore === 5) {
      alert("Computer wins");
      resetGame();
    }
  });
});

function getComputerSelection() {
  let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper' || computerSelection === 'spock') {
      computerScore++;
      return 'You lose!';
    } else if (computerSelection === 'scissors' || computerSelection === 'lizard') {
      playerScore++;
      return 'You win!';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors' || computerSelection === 'lizard') {
      computerScore++;
      return 'You lose!';
    } else if (computerSelection === 'rock' || computerSelection === 'spock') {
      playerScore++;
      return 'You win!';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock' || computerSelection === 'spock') {
      computerScore++;
      return 'You lose!';
    } else if (computerSelection === 'paper' || computerSelection === 'lizard') {
      playerScore++;
      return 'You win!';
    }
  } else if (playerSelection === 'lizard') {
    if (computerSelection === 'rock' || computerSelection === 'scissors') {
      computerScore++;
      return 'You lose!';
    } else if (computerSelection === 'paper' || computerSelection === 'spock') {
      playerScore++;
      return 'You win!';
    }
  } else if (playerSelection === 'spock') {
    if (computerSelection === 'paper' || computerSelection === 'lizard') {
      computerScore++;
      return 'You lose!';
    } else if (computerSelection === 'rock' || computerSelection === 'scissors') {
      playerScore++;
      return 'You win!';
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = '';
  playerChoiceElement.textContent = '';
  computerChoiceElement.textContent = '';
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
}
