'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const number = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    scoreDisplay.textContent = score;
  }
});

againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  number.textContent = '?';
  guessInput.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
