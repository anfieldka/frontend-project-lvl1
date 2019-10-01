import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../instruments';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};

export default () => {
  startGame(task, getQuestionAndAnswer);
};
