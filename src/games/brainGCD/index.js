import playGame from '../../playGame.js';
import getRandomNumber from '../../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

function getGCD(a, b) {
  for (let i = b; i > 1; i -= 1) {
    if (b % i === 0 && a % i === 0) {
      return i.toString();
    }
  }
  return '1';
}

function getQuiz() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const answer = getGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
}

export default function playBrainGCD() {
  playGame(rule, getQuiz);
}
