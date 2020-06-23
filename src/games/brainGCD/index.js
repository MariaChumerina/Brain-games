import playGame from '../../playGame.js';
import getRandomNumber from '../../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

function calcGCD(firstRandomNumber, secondRandomNumber) {
  for (let i = secondRandomNumber; i > 1; i -= 1) {
    if (secondRandomNumber % i === 0 && firstRandomNumber % i === 0) {
      return i.toString();
    }
  }
  return '1';
}

function getTerms() {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const answer = calcGCD(firstRandomNumber, secondRandomNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  return [question, answer];
}

export default function playBrainGCD() {
  playGame(rule, getTerms);
}
