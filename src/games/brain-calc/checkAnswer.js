import { userName } from '../../cli.js';

export default function checkAnswer(answer, condition) {
  /* eslint no-eval: 0 */
  const trueAnswer = eval(condition);

  const isAnswerRight = () => {
    if (Number(answer) === trueAnswer) {
      return true;
    } console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName()}!`);
    return false;
  };

  return isAnswerRight(answer);
}
