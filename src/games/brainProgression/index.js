import { getProgression, getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What number is missing in the progression?';

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
