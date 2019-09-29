import { cons } from '@hexlet/pairs';
import testAnswer from '..';
import getRandomInteger from '../instruments';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const checkPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = checkPrime(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};

export default () => {
  testAnswer(task, getQuestionAndAnswer);
};
