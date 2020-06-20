import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

function getTerms() {
  const randomNumber = getRandomNumber();
  const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, trueAnswer];
}

export default function playBrainEven() {
  playGame(rule, getTerms);
}
