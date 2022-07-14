'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
const hightScore = document.querySelector('.highscore');
const numberBlock = document.querySelector('.number');
const scoreText = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const inputField = document.querySelector('.guess');
const messageBlock = document.querySelector('.message');
messageBlock.style.color = 'yellow';
const bodyElement = document.querySelector('body');
let guessNumber;

const textAndColorHandler = function (text, color) {
	messageBlock.style.color = color;
	messageBlock.textContent = text;
};

const scoreDecreasing = function () {
	score--;
	scoreText.textContent = score;
}

const againButton = document.querySelector('.again');
againButton.addEventListener('click', () => {
	numberBlock.textContent = '?';
	bodyElement.style.backgroundColor = '#222';
	inputField.value = '';
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(secretNumber);
	messageBlock.textContent = 'Start guessing...';
	messageBlock.style.color = 'yellow';
	numberBlock.style.width = '15rem';
	score = 20;
	scoreText.textContent = score;
	checkButton.setAttribute('disabled', 'disabled');
	checkButton.removeAttribute('disabled', 'disabled');
})

checkButton.addEventListener('click', function () {
	guessNumber = +inputField.value;
	if (!guessNumber) {
		textAndColorHandler('Enter number!!!', 'red');
	} else if (guessNumber === secretNumber) {
		textAndColorHandler('❤ Correct number. Grats!', 'blue');
		bodyElement.style.backgroundColor = 'green';
		numberBlock.style.width = '30rem';
		numberBlock.textContent = secretNumber;
		if (hightScore.textContent < scoreText.textContent) {
			hightScore.textContent = scoreText.textContent;
		};
	} else if (score > 1) {
		if (guessNumber > secretNumber) {
			scoreDecreasing();
			textAndColorHandler(' Too high', 'red');
		} else if (guessNumber < secretNumber) {
			scoreDecreasing();
			textAndColorHandler('Too low', 'red');
		}
	} else {
		scoreDecreasing();
		messageBlock.textContent = 'You lost the game';
		checkButton.setAttribute('disabled', 'disabled');
	}
})