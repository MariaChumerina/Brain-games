export const rules = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainCalc: 'What is the result of the expression?',
}

export let number;
export function randomNumber() {
  number = Math.floor(Math.random() * 101);
  return number;
}


