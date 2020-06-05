import { greeting, getAnswerFromUser } from './cli.js';

export default function index(game) {
  const countOfRounds = 3;

  const userName = greeting();
  console.log(game.rule);
  for (let round = 1; round <= countOfRounds; round += 1) {
    const question = game.getQuestion();
    console.log(`Question: ${question}`);
    const answerFromUser = getAnswerFromUser();
    const trueAnswer = game.getTrueAnswer(question);
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
