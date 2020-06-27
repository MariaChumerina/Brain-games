import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What number is missing in the progression?';

export function getProgression(firstNumber, step) {
  const progression = [];
  progression.push(firstNumber);
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = (i + 1) * step;
  }

  return progression;
}

function makeQuestion(progression, indexOfSkippedEl) {
  const copyProgression = progression.slice();
  copyProgression[indexOfSkippedEl] = '..';
  return copyProgression.join(' ');
}

function getQuiz() {
  const [minFirstNum, maxFirstNum] = [1, 10];
  const firstNumOfProgression = getRandomNumber(minFirstNum, maxFirstNum);
  const [minStep, maxStep] = [1, 10];
  const step = getRandomNumber(minStep, maxStep);
  const progression = getProgression(firstNumOfProgression, step);
  const indexOfSkippedEl = getRandomNumber(0, progression.length);
  const skippedNumber = progression[indexOfSkippedEl];
  const question = makeQuestion(progression, indexOfSkippedEl);
  const answer = skippedNumber.toString();
  return [question, answer];
}

export default function playBrainProgression() {
  playGame(rule, getQuiz);
}
