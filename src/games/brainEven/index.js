import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

function getTerms() {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

export default function playBrainEven() {
  playGame(rule, getTerms);
}
