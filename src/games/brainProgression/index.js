import { getProgression, getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

let progression;
let skippingNumber;
let indexOfSkippingEl;

function getTrueAnswer() {
  return skippingNumber.toString();
}

export const rule = 'What number is missing in the progression?';

function getProgressionWithSkipNum() {
  progression = getProgression();
  indexOfSkippingEl = getRandomNumber(9, 0);
  skippingNumber = progression[indexOfSkippingEl];
  progression[indexOfSkippingEl] = '..';

  return progression.join(' ');
}

function getQuestion() {
  return getProgressionWithSkipNum();
}

export default function playBrainProgression() {
  playGame(rule, getQuestion, getTrueAnswer);
}
