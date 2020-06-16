import { getProgression, getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What number is missing in the progression?';

function getProgressionWithSkipNum(progression, indexOfSkippingEl) {
  progression[indexOfSkippingEl] = '..';
  return progression.join(' ');
}

function getQuestionAndTrueAnswer() {
  const progression = getProgression();
  const indexOfSkippingEl = getRandomNumber(9, 0);
  const skippingNumber = progression[indexOfSkippingEl];
  const question = getProgressionWithSkipNum(progression, indexOfSkippingEl);
  const trueAnswer = skippingNumber.toString();
  return [question, trueAnswer];
}

export default function playBrainProgression() {
  playGame(rule, getQuestionAndTrueAnswer);
}
