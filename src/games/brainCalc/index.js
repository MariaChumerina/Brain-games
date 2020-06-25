import getRandomNumber from '../../utils.js';
import playGame from '../../playGame.js';

export const rule = 'What is the result of the expression?';

function calc(a, b, operator) {
  switch (operator) {
    case ('+'):
      return (a + b).toString();
    case ('-'):
      return (a - b).toString();
    case ('*'):
      return (a * b).toString();
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
  const answer = calc(firstOperand, secondOperand, operator);

  return [question, answer];
}

export default function playBrainCalc() {
  playGame(rule, getQuiz);
}
