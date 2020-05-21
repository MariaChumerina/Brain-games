import { userName, getAnswerFromUser, greeting } from './cli.js';

export default function index(rule, getQuestion, getTrueAnswer) {
  const countOfRounds = 3;

  greeting();
  console.log(rule);
  for (let round = 1; round <= countOfRounds; round += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answerFromUser = getAnswerFromUser();
    const trueAnswer = getTrueAnswer(question);
    if (answerFromUser !== trueAnswer) {
      console.log(`"${answerFromUser}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
}
