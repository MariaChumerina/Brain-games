import { getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

let operator;
let firstOperand;
let secondOperand;

function getTrueAnswer() {
  if (operator === '+') return (firstOperand + secondOperand).toString();
  if (operator === '*') return (firstOperand * secondOperand).toString();
  return (firstOperand - secondOperand).toString();
}

export const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

function getExpression() {
  operator = operators[getRandomNumber(3, 0)];
  firstOperand = getRandomNumber();
  secondOperand = getRandomNumber();

  return `${firstOperand} ${operator} ${secondOperand}`;
}

function getQuestion() {
  return getExpression();
}

export default function playBrainCalc() {
  playGame(rule, getQuestion, getTrueAnswer);
}
