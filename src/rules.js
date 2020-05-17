export const rules = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainCalc: 'What is the result of the expression?',
};

export function randomNumber() {
  return Math.floor(Math.random() * 101);
}

const operators = ['+', '-', '*'];
export function makeExpression() {
  const operator = operators[Math.floor(Math.random() * 3)];
  return `${randomNumber()} ${operator} ${randomNumber()}`;
}
