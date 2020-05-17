import { userName } from '../../cli.js';

export default function checkAnswer(answer, condition) {
  const numbers = condition.split(' ').sort();
  function calcTrueAnswer() {
    const firstNumber = Number(numbers[1]);
    const secondNumber = Number(numbers[0]);
    if (secondNumber % firstNumber === 0) return firstNumber;
    for (let i = firstNumber; i > 1; i -= 1) {
      if (secondNumber % i === 0 && firstNumber % i === 0) {
        return i;
      }
    }
    return 1;
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
