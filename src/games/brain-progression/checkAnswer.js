import { userName } from '../../cli.js';

export default function checkAnswer(answer, condition) {
  function calcTrueAnswer() {
    const progression = condition.split(' ');
    const indexOfMissEl = progression.indexOf('..');
    let step = 0;
    let i = 0;
    while (!step) {
      const currentEl = progression[i];
      const nextEl = progression[i + 1];
      if (currentEl !== '..' && nextEl !== '..') {
        step = nextEl - currentEl;
      }
      i += 1;
    }
    return indexOfMissEl
      ? Number(progression[indexOfMissEl - 1]) + Number(step)
      : Number(progression[indexOfMissEl + 1]) - Number(step);
  }
  const trueAnswer = calcTrueAnswer();

  const isAnswerRight = () => {
    if (Number(answer) === trueAnswer) {
      return true;
    } console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
Let's try again, ${userName()}!`);
    return false;
  };

  return isAnswerRight(answer);
}
