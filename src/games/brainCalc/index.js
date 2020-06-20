import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What is the result of the expression?';

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

const operators = ['+', '-', '*'];
function getRandomOperator() {
  return operators[getRandomNumber(3, 0)];
}

function getTerms() {
  const operator = getRandomOperator();
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const trueAnswer = getTrueAnswer(firstOperand, secondOperand, operator);

  return [question, trueAnswer];
}

export default function playBrainCalc() {
  playGame(rule, getTerms);
}
