import { getRandomNumber } from '../../utils';

function isEven(number) {
  return number % 2 === 0;
}
export function getTrueAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export function getQuestion() {
  return getRandomNumber();
}
