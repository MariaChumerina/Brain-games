export default function getMisiingNumber(progression) {
  const partsOfProgression = progression.split(' ');
  const operator = partsOfProgression[1];
  const firstOperand = Number(partsOfProgression[0]);
  const secondOperand = Number(partsOfProgression[2]);
  if (operator === '+') return (firstOperand + secondOperand).toString();
  if (operator === '*') return (firstOperand * secondOperand).toString();
  return (firstOperand - secondOperand).toString();
}
