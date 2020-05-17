import { userName } from './cli.js';
import readlineSync from "readline-sync";

export default function index(rule, question, checkFunction) {
  const countOfLevels = 3;

  console.log(rule);
  for (let i = 0; i < countOfLevels; i += 1) {
    console.log(`Question: ${question()}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkFunction(answer) === false) {
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName()}!`);
  return true;
}
