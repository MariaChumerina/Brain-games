function index(number) {
  for (let i = Math.round(number / 2); i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
export default function transformIsPrimeToStr(number) {
  return index(number) ? 'yes' : 'no';
}
