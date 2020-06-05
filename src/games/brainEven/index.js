function isEven(number) {
  return number % 2 === 0;
}
export function transformIsEvenToStr(number) {
  return isEven(number) ? 'yes' : 'no';
}

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
