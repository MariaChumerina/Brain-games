export function randomNumber() {
  return Math.floor(Math.random() * 101);
}

const operators = ['+', '-', '*'];
export function makeExpression() {
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  return `${randomNumber()} ${randomOperator} ${randomNumber()}`;
}

export function makeTwoNumbers() {
  return `${randomNumber()} ${randomNumber()}`;
}
