export default function isPrime(number) {
  for (let i = Math.round(number / 2); i > 1; i -= 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}
