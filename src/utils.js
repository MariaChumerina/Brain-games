export function getRandomNumber(rightBorder = 100, leftBorder = 1) {
  return Math.floor((Math.random() * rightBorder) + leftBorder);
}

export function getTwoRandomNumbers() {
  return `${getRandomNumber(100, 1)} ${getRandomNumber(100)}`;
}


export function getProgression() {
  const progression = [];
  progression[0] = getRandomNumber(10);
  const step = getRandomNumber(10);
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
}
