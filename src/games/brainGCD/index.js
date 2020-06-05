import { getTwoRandomNumbers } from '../../utils.js';

export function getTrueAnswer(strWithTwoNumbers) {
  const numbers = strWithTwoNumbers.split(' ');
  const firstNumber = Number(numbers[0]);
  const secondNumber = Number(numbers[1]);
  for (let i = secondNumber; i > 1; i -= 1) {
    if (secondNumber % i === 0 && firstNumber % i === 0) {
      return i.toString();
    }
  }
  return '1';
}

export const rule = 'Find the greatest common divisor of given numbers.';

export function getQuestion() {
  return getTwoRandomNumbers();
}
