import readlineSync from 'readline-sync';
import { name } from '../../cli.js';

export default function checkAnswer() {
    let number;
    const randomNumber = () => {
        number = Math.floor(Math.random() * 101);
        return number;
    };

    const isEven = (number) => {
        return number % 2 === 0;
    }

    console.log(`Question: ${randomNumber()}`);
    const answer = readlineSync.question('Your answer: ');
    const checkAnswer = (answer) => {
        if ((answer === 'yes' && isEven(number) === true )|| (answer === 'no' && isEven(number) === false))
            return true;
        else if (answer === 'yes') {
            console.log(`"yes" is wrong answer ;(. Correct answer was "no".\n' +
                'Let\'s try again, ${name}!`);
            return false;
        }
        else {
            console.log('"no" is wrong answer ;(. Correct answer was "yes".\n' +
                'Let\'s try again, !');
            return false;
        }
    }
    return checkAnswer(answer);
}