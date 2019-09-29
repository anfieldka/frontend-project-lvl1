import { cons } from '@hexlet/pairs';
import testAnswer from '..';
import getRandomInteger from '../instruments';

const task = 'Answer "yes" if number even otherwise answer "no".\n';
const checkEven = number => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = checkEven(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};

export default () => {
  testAnswer(task, getQuestionAndAnswer);
};
