export default function getGCD(twoNumbers) {
  const numbers = twoNumbers.split(' ');
  const firstNumber = Number(numbers[0]);
  const secondNumber = Number(numbers[1]);
  for (let i = secondNumber; i > 1; i -= 1) {
    if (secondNumber % i === 0 && firstNumber % i === 0) {
      return i.toString();
    }
  }
  return '1';
}