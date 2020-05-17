import { userName } from '../../cli.js';
import { number } from "../../rules.js";

export default function checkAnswer(answer) {
  const isEven = () => number % 2 === 0;

  const isAnswerRight = () => {
    if ((answer === 'yes' && isEven(number) === true) || (answer === 'no' && isEven(number) === false)) {
      console.log('Correct!');
      return true;
    } if (isEven(number) === false) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".
Let's try again, ${userName()}!`);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".
Let's try again, ${userName()}!`);
    }

    return false;
  };

  return isAnswerRight(answer);
}
