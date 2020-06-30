import readlineSync from 'readline-sync';

export default function playGame(rule, getQuestionAndAnswer) {
  const countOfRounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let round = 1; round <= countOfRounds; round += 1) {
    const [question, trueAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answerFromUser = readlineSync.question('Your answer: ');
    if (answerFromUser !== trueAnswer) {
      console.log(`"${answerFromUser}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
