import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const firstRound = 1;
const finalRound = 3;

const checkCorrectAnswer = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const checkCorrect = correctAnswer === userAnswer;
  const output = checkCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(output);
  return checkCorrect;
};

export default (task, pair) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(task);
  const recursion = (round) => {
    if (round > finalRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const info = pair();
    const question = car(info);
    const correctAnswer = cdr(info);
    const checkCorrect = checkCorrectAnswer(question, correctAnswer);
    if (checkCorrect) {
      recursion(round + 1);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };
  recursion(firstRound);
};
