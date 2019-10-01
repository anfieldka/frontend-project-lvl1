import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../instruments';

const task = 'Answer "yes" if number even otherwise answer "no"';
const isEven = number => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};

export default () => {
  startGame(task, getQuestionAndAnswer);
};
