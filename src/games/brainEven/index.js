import { getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

function isEven(number) {
  return number % 2 === 0;
}
function getTrueAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestion() {
  return getRandomNumber();
}

export default function playBrainEven() {
  playGame(rule, getQuestion, getTrueAnswer);
}
