'use strict';
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔ no number';
  } else if (number === guess) {
    document.querySelector('.message').textContent = ' 🎉 correct number';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#FF1493';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈 Too high' : '📈 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😫 you lost the game';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = ' rgb(202, 56, 105';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
