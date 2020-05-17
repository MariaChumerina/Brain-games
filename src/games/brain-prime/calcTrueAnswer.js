export default function calcTrueAnswer(number) {
  let trueAnswer = 'yes';
  for (let i = Math.round(number / 2); i > 1; i -= 1) {
    if (number % i === 0) {
      trueAnswer = 'no';
    }
  }
  return trueAnswer;
}