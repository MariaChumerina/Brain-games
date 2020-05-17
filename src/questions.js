export function randomNumber(rightBorder = 100, leftBorder = 0) {
  return Math.floor((Math.random() * rightBorder) + leftBorder);
}

const operators = ['+', '-', '*'];
export function makeExpression() {
  const randomOperator = operators[randomNumber(3)];
  return `${randomNumber()} ${randomOperator} ${randomNumber()}`;
}

export function makeTwoNumbers() {
  return `${randomNumber(100, 1)} ${randomNumber(100, 1)}`;
}

export function makeProgression() {
  const progression = [];
  progression[0] = randomNumber(10);
  const step = randomNumber(10, 1);
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  progression[randomNumber(10)] = '..';
  return progression.join(' ');
}
