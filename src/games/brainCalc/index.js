import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What is the result of the expression?';

function getAnswerOfExpression(firstOperand, secondOperand, operator) {
  switch (operator) {
    case ('+'):
      return (firstOperand + secondOperand).toString();
    case ('-'):
      return (firstOperand - secondOperand).toString();
    case ('*'):
      return (firstOperand * secondOperand).toString();
    default: throw new Error('Something went wrong');
  }
}

const operators = ['+', '-', '*'];
function getRandomOperator() {
  return operators[getRandomNumber(3, 0)];
}

function getQuiz() {
  const operator = getRandomOperator();
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const trueAnswer = getAnswerOfExpression(firstOperand, secondOperand, operator);

  return [question, trueAnswer];
}

export default function playBrainCalc() {
  playGame(rule, getQuiz);
}
