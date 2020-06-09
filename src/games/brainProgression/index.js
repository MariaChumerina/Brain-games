import { getProgression, getRandomNumber } from '../../utils.js';

let progression;
let skippingNumber;
let indexOfSkippingEl;

export function getTrueAnswer() {
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

export function getQuestion() {
  return getProgressionWithSkipNum();
}
