import { cons } from '@hexlet/pairs';
import testAnswer from '..';
import getRandomInteger from '../instruments';

const task = 'What is the result of the expression?.\n';

const getQuestionAndAnswer = () => {
  const operators = ['*', '+', '-'];
  const operatorIndex = getRandomInteger(0, operators.length - 1);
  const firstPart = getRandomInteger();
  const secondPart = getRandomInteger();
  const operator = operators[operatorIndex];
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
  testAnswer(task, getQuestionAndAnswer);
};
