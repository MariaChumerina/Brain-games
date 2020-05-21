import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');

export function greeting() {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
}

export function getAnswerFromUser() {
  return readlineSync.question('Your answer: ');
}

export const conditions = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainCalc: 'What is the result of the expression?',
  brainGcd: 'Find the greatest common divisor of given numbers.',
  brainProgression: 'What number is missing in the progression?',
  brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};
