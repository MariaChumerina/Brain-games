import checkAnswer from './games/brain-even/checkAnswer.js';
import { userName } from './cli.js';

export default function index(rule) {
  const countOfLevels = 3;

  console.log(rule);
  for (let i = 0; i < countOfLevels; i += 1) {
    if (checkAnswer() === false) {
      return false;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
  return true;
}
