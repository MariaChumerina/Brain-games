import playGame from '../../playGame.js';
import { getRandomNumber } from '../../utils.js';

function calcTrueAnswer(firstRandomNumber, secondRandomNumber) {
  for (let i = secondRandomNumber; i > 1; i -= 1) {
    if (secondRandomNumber % i === 0 && firstRandomNumber % i === 0) {
      return i.toString();
    }
  }
  return '1';
}

const rule = 'Find the greatest common divisor of given numbers.';

function getTerms() {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const trueAnswer = calcTrueAnswer(firstRandomNumber, secondRandomNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  return [question, trueAnswer];
}

export default function playBrainGCD() {
  playGame(rule, getTerms);
}
