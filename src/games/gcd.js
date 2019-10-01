import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../instruments';

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let largerDivisor = Math.min(num1, num2);
  while (largerDivisor > 1) {
    if ((num1 % largerDivisor === 0) && (num2 % largerDivisor === 0)) {
      return largerDivisor;
    }
    largerDivisor -= 1;
  }
  return largerDivisor;
};

const getQuestionAndAnswer = () => {
  const first = getRandomInteger();
  const second = getRandomInteger();
  const question = `${first} ${second}`;
  const correctAnswer = findGcd(first, second);
  return cons(question, String(correctAnswer));
};


export default () => {
  startGame(task, getQuestionAndAnswer);
};
