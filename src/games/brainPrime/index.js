import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  for (let i = Math.round(number / 2); i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export function getQuiz() {
  const question = getRandomNumber();
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, trueAnswer];
}

export default function playBrainPrime() {
  playGame(rule, getQuiz);
}
