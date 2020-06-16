import { getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

function isPrime(number) {
  for (let i = Math.round(number / 2); i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function getQuestionAndTrueAnswer() {
  const randomNumber = getRandomNumber();
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, trueAnswer];
}

export default function playBrainPrime() {
  playGame(rule, getQuestionAndTrueAnswer);
}
