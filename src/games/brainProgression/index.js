import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What number is missing in the progression?';

export function getProgression() {
  const progression = [];
  progression[0] = getRandomNumber(10);
  const step = getRandomNumber(10);
  for (let i = 0; i < 10; i += 1) {
    progression[i] = (i + 1) * step;
  }

  return progression;
}

function getProgressionWithSkippedNum(progression, indexOfSkippingEl) {
  const copyProgression = progression.slice();
  copyProgression[indexOfSkippingEl] = '..';
  return copyProgression.join(' ');
}

function getQuiz() {
  const progression = getProgression();
  const indexOfSkippedEl = getRandomNumber(9, 0);
  const skippedNumber = progression[indexOfSkippedEl];
  const question = getProgressionWithSkippedNum(progression, indexOfSkippedEl);
  const answer = skippedNumber.toString();
  return [question, answer];
}

export default function playBrainProgression() {
  playGame(rule, getQuiz);
}
