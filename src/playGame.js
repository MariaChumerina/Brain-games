import { greeting, getAnswerFromUser } from './cli.js';

export default function playGame(rule, getQuestionAndAnswer) {
  const countOfRounds = 3;

  const userName = greeting();
  console.log(rule);
  for (let round = 1; round <= countOfRounds; round += 1) {
    const [question, trueAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answerFromUser = getAnswerFromUser();
    if (answerFromUser !== trueAnswer) {
      console.log(`"${answerFromUser}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
