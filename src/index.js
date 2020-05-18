import readlineSync from 'readline-sync';
import { getUserName, greeting } from './cli.js';

export default function index(rule, getQuestion, getTrueAnswer) {
  const countOfRounds = 3;

  greeting();
  console.log(rule);
  for (let round = 1; round <= countOfRounds; round += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = getTrueAnswer(question);
    if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${getUserName()}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${getUserName()}!`);
  return true;
}
