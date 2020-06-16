import { getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

function isEven(number) {
  return number % 2 === 0;
}

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestionAndTrueAnswer() {
  const randomNumber = getRandomNumber();
  const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, trueAnswer];
}

export default function playBrainEven() {
  playGame(rule, getQuestionAndTrueAnswer);
}
