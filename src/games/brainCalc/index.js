import { getRandomNumber } from '../../utils.js';
import playGame from '../../playGame.js';

function getTrueAnswer(firstOperand, secondOperand, operator) {
  switch (operator) {
    case ('+'):
      return (firstOperand + secondOperand).toString();
    case ('-'):
      return (firstOperand - secondOperand).toString();
    case ('*'):
      return (firstOperand * secondOperand).toString();
    default: return 'Something went wrong';
  }
}

export const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

function getTerms() {
  const operator = operators[getRandomNumber(3, 0)];
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const trueAnswer = getTrueAnswer(firstOperand, secondOperand, operator);

  return [question, trueAnswer];
}

export default function playBrainCalc() {
  playGame(rule, getTerms);
}
