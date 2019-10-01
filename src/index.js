import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const firstRound = 1;
const finalRound = 3;

const startGame = (task, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(task);

  const iter = (round) => {
    if (round > finalRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const info = getQuestionAnswer();
    const question = car(info);
    const correctAnswer = cdr(info);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const checkCorrect = correctAnswer === userAnswer;
    const output = checkCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    console.log(output);
    if (checkCorrect) {
      iter(round + 1);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(firstRound);
};

export default startGame;
