import { cons } from '@hexlet/pairs';
import testAnswer from '..';
import getRandomInteger from '../instruments';

const task = 'Find the greatest common divisor of given numbers.\n';

const gcd = (num1, num2) => {
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
  const firstRandomNumber = getRandomInteger();
  const secondRandomNumber = getRandomInteger();
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = gcd(firstRandomNumber, secondRandomNumber);
  return cons(question, String(correctAnswer));
};


export default () => {
  testAnswer(task, getQuestionAndAnswer);
};
