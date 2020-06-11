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
function getTrueAnswer(number) {
  return isPrime(number) ? 'yes' : 'no';
}

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function getQuestion() {
  return getRandomNumber();
}

export default function playBrainPrime() {
  playGame(rule, getQuestion, getTrueAnswer);
}
