import { userName } from '../../cli.js';

export default function checkAnswer(answer, condition) {
  function calcTrueAnswer() {
    const partsOfExpression = condition.split(' ');
    const operator = partsOfExpression[1];
    const firstOperand = Number(partsOfExpression[0]);
    const secondOperand = Number(partsOfExpression[2]);
    if (operator === '+') return firstOperand + secondOperand;
    if (operator === '*') return firstOperand * secondOperand;
    if (operator === '-' && firstOperand > secondOperand) {
      return firstOperand - secondOperand;
    }
    return secondOperand - firstOperand;
  }
  const trueAnswer = calcTrueAnswer();

  const isAnswerRight = () => {
    if (Number(answer) === trueAnswer) {
      return true;
    } console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName()}!`);
    return false;
  };

  return isAnswerRight(answer);
}
