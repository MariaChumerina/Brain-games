export default function getRandomNumber(rightBorder = 100, leftBorder = 1) {
  return Math.floor((Math.random() * (rightBorder - leftBorder)) + leftBorder);
}
