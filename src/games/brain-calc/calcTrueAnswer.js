export default function calcTrueAnswer(condition) {
    const partsOfExpression = condition.split(' ');
    const operator = partsOfExpression[1];
    const firstOperand = Number(partsOfExpression[0]);
    const secondOperand = Number(partsOfExpression[2]);
    if (operator === '+') return (firstOperand + secondOperand).toString();
    if (operator === '*') return (firstOperand * secondOperand).toString();
    return (firstOperand - secondOperand).toString();
  }

