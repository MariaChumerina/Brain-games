import checkAnswer from "./checkAnswer.js";

export default function logic() {
    const countOfLevels = 3;
    let isWin = true;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < countOfLevels; i += 1) {
        if (checkAnswer() === false) {
            isWin = false;
            break;
        }
        else console.log('Correct!');
    }
    if (isWin) console.log('Congratulations!');
}