import { getExpression } from '../../utils';

export function getTrueAnswer(strOfExpression) {
  const partsOfExpression = strOfExpression.split(' ');
  const operator = partsOfExpression[1];
  const firstOperand = Number(partsOfExpression[0]);
  const secondOperand = Number(partsOfExpression[2]);
  if (operator === '+') return (firstOperand + secondOperand).toString();
  if (operator === '*') return (firstOperand * secondOperand).toString();
  return (firstOperand - secondOperand).toString();
}

export const rule = 'What is the result of the expression?';

export function getQuestion() {
  return getExpression();
}
