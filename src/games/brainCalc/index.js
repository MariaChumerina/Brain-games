import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What is the result of the expression?';

function calc(a, b, operator) {
  switch (operator) {
    case ('+'):
      return (a + b);
    case ('-'):
      return (a - b);
    case ('*'):
      return (a * b);
    default: throw new Error('Something went wrong');
  }
}

const operators = ['+', '-', '*'];
function getRandomOperator() {
  const operatorsLength = operators.length;
  return operators[getRandomNumber(0, operatorsLength)];
}

function getQuiz() {
  const operator = getRandomOperator();
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = (calc(firstOperand, secondOperand, operator)).toString();

  return [question, answer.toString()];
}

export default function playBrainCalc() {
  playGame(rule, getQuiz);
}
