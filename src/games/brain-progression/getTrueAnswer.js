export default function getTrueAnswer(condition) {
  const progression = condition.split(' ');
  const indexOfMissEl = progression.indexOf('..');
  let step = 0;
  let i = 0;
  while (!step) {
    const currentEl = progression[i];
    const nextEl = progression[i + 1];
    if (currentEl !== '..' && nextEl !== '..') {
      step = nextEl - currentEl;
    }
    i += 1;
  }
  return indexOfMissEl
    ? (Number(progression[indexOfMissEl - 1]) + Number(step)).toString()
    : (Number(progression[indexOfMissEl + 1]) - Number(step)).toString();
}
