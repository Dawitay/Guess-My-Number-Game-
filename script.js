'use strict';
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = '🤗 Corect number!')
);

document.querySelector('.number').textContent = '13';
console.log((document.querySelector('.number').textContent = '13'));

document.querySelector('.score').textContent = '10';
console.log((document.querySelector('.score').textContent = '10'));

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('number').style.width = '15rem';
  });

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😫 This is not number!';

    //When player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🤗 Corect number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when player loses
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!😪';
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!😪';
    }
  }
});
