import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../instruments';

const task = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const getQuestionAndAnswer = () => {
  const firstPart = getRandomInteger();
  const secondPart = getRandomInteger();
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${firstPart} ${operator} ${secondPart}`;
  let correctAnswer;

  switch (operator) {
    case '*':
      correctAnswer = firstPart * secondPart;
      break;
    case '+':
      correctAnswer = firstPart + secondPart;
      break;
    case '-':
      correctAnswer = firstPart - secondPart;
      break;
    default:
      break;
  }
  return cons(question, String(correctAnswer));
};

export default () => {
  startGame(task, getQuestionAndAnswer);
};
