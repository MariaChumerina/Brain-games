import readlineSync from 'readline-sync';
import { userName, greeting } from './cli.js';

export default function index(rule, makeCondition, checkFunction) {
  const countOfLevels = 3;

  greeting();
  console.log(rule);
  for (let i = 0; i < countOfLevels; i += 1) {
    const condition = makeCondition();
    console.log(`Question: ${condition}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkFunction(answer, condition) === false) {
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName()}!`);
  return true;
}
