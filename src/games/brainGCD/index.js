import { getTwoRandomNumbers } from '../../utils.js';
import playGame from '../../playGame.js';

function calcTrueAnswer(firstRandomNumber, secondRandomNumber) {
  for (let i = secondRandomNumber; i > 1; i -= 1) {
    if (secondRandomNumber % i === 0 && firstRandomNumber % i === 0) {
      return i.toString();
    }
  }
  return '1';
}

const rule = 'Find the greatest common divisor of given numbers.';

function getQuestionAndAnswer() {
  const [firstRandomNumber, secondRandomNumber] = getTwoRandomNumbers();
  const trueAnswer = calcTrueAnswer(firstRandomNumber, secondRandomNumber);
  return [`${firstRandomNumber} ${secondRandomNumber}`, trueAnswer];
}

export default function playBrainGCD() {
  playGame(rule, getQuestionAndAnswer);
}
