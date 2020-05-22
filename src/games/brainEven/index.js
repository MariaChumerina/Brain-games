function isEven(number) {
  return number % 2 === 0;
}
export default function transformIsEvenToStr(number) {
  return isEven(number) ? 'yes' : 'no';
}
