import readlineSync from 'readline-sync';
import { userName } from '../../cli.js';

export default function checkAnswer() {
  let number;

  const randomNumber = () => {
    number = Math.floor(Math.random() * 101);
    return number;
  };

  const isEven = () => number % 2 === 0;

  console.log(`Question: ${randomNumber()}`);
  const answer = readlineSync.question('Your answer: ');
  const isAnswerRight = () => {
    if ((answer === 'yes' && isEven(number) === true) || (answer === 'no' && isEven(number) === false)) {
      console.log('Correct!');
      return true;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".
Let's try again, ${userName()}!`);
    return false;
  };

  return isAnswerRight(answer);
}
