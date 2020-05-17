import { userName } from '../../cli.js';

export default function checkAnswer(answer, condition) {
  const isEven = () => condition % 2 === 0;

  const isAnswerRight = () => {
    if ((answer === 'yes' && isEven(condition) === true) || (answer === 'no' && isEven(condition) === false)) {
      return true;
    } if (isEven(condition) === false) {
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
