export default function getRandomNumber(leftBorder = 1, rightBorder = 100) {
  return Math.floor((Math.random() * (rightBorder - leftBorder)) + leftBorder);
}
