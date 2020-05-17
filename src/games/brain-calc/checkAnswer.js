import { userName } from '../../cli.js';
import { expression } from "../../rules.js";

export default function checkAnswer(answer) {
  const trueAnswer = eval(expression);

  const isAnswerRight = () => {
    if (Number(answer) === trueAnswer) {
      return true;
    }  else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName()}!`);
    }
    return false;
  };

  return isAnswerRight(answer);
}
