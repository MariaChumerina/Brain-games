import checkAnswer from './checkAnswer.js';
import { userName } from '../../cli.js';

export default function play() {
  const countOfLevels = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < countOfLevels; i += 1) {
    if (checkAnswer() === false) {
      return false;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
}
