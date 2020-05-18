import readlineSync from 'readline-sync';
import { userName, greeting } from './cli.js';

export default function index(rule, getQuestion, getTrueAnswer) {
  const countOfLevels = 3;

  greeting();
  console.log(rule);
  for (let i = 0; i < countOfLevels; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = getTrueAnswer(question);
    if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName()}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName()}!`);
  return true;
}
