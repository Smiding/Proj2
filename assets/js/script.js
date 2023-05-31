// Select all elements with btn
let buttons = document.querySelectorAll('.btn');

// Select elements to display game results and scores
let result = document.querySelector('#result');
let playerChoiceElement = document.querySelector('#player-choice');
let computerChoiceElement = document.querySelector('#computer-choice');
let playerScore = 0;
let computerScore = 0;
let playerScoreElement = document.querySelector('#player-score');
let computerScoreElement = document.querySelector('#computer-score');

// Add event listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
      return;
    }


    // Get player's choice
    let playerChoice = button.id;
    // Get a random computer choice
    let computerChoice = getComputerSelection();
    // Play a round of the game
    let gameResult = playRound(playerChoice, computerChoice);

    // Update the game result
    result.textContent = gameResult;
    playerChoiceElement.textContent = `You chose ${playerChoice}`;
    computerChoiceElement.textContent = `The computer chose ${computerChoice}`;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;


    // Check if either player or computer has reached a score of 5
    if (playerScore === 5) {
      alert("You win!");
      resetGame();
    } else if (computerScore === 5) {
      alert("Computer wins");
      resetGame();
    }
  });
});


//Random computer choice
function getComputerSelection() {
  let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


// Play a round of the game and show results
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


// Reset the game when finished
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = '';
  playerChoiceElement.textContent = '';
  computerChoiceElement.textContent = '';
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
}
