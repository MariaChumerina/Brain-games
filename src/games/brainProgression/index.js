import { getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What number is missing in the progression?';


export function getProgression() {
  const progression = [];
  progression[0] = getRandomNumber(10);
  const step = getRandomNumber(10);
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
}

function getProgressionWithSkipNum(progression, indexOfSkippingEl) {
  const copyProgression = progression.slice();
  copyProgression[indexOfSkippingEl] = '..';
  return copyProgression.join(' ');
}

function getTerms() {
  const progression = getProgression();
  const indexOfSkippingEl = getRandomNumber(9, 0);
  const skippingNumber = progression[indexOfSkippingEl];
  const question = getProgressionWithSkipNum(progression, indexOfSkippingEl);
  const trueAnswer = skippingNumber.toString();
  return [question, trueAnswer];
}

export default function playBrainProgression() {
  playGame(rule, getTerms);
}
