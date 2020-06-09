import { getRandomNumber } from '../../utils.js';

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

const operators = ['+', '-', '*'];

function getExpression() {
  const randomOperator = operators[getRandomNumber(3, 0)];
  return `${getRandomNumber()} ${randomOperator} ${getRandomNumber()}`;
}

export function getQuestion() {
  return getExpression();
}
