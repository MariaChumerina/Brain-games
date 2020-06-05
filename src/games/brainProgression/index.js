import { getProgression } from '../../utils';

export function getTrueAnswer(strOfProgression) {
  const partsOfProgression = strOfProgression.split(' ');
  const indexOfMissEl = partsOfProgression.indexOf('..');
  let step = 0;
  let i = 0;
  while (!step) {
    const currentEl = partsOfProgression[i];
    const nextEl = partsOfProgression[i + 1];
    if (currentEl !== '..' && nextEl !== '..') {
      step = nextEl - currentEl;
    }
    i += 1;
  }
  return indexOfMissEl
    ? (Number(partsOfProgression[indexOfMissEl - 1]) + Number(step)).toString()
    : (Number(partsOfProgression[indexOfMissEl + 1]) - Number(step)).toString();
}

export const rule = 'What number is missing in the progression?';

export function getQuestion() {
  return getProgression();
}
