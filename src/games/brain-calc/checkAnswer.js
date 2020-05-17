import { userName } from '../../cli.js';

export default function checkAnswer(answer, condition) {
  function calcTrueAnswer() {
    const arr = condition.split(' ');
    const operator = arr[1];
    const firstOperand = Number(arr[0]);
    const secondOperand = Number(arr[2]);
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
