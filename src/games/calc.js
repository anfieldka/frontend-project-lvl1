import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../instruments';

const task = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const getQuestionAndAnswer = () => {
  const firstOpeand = getRandomInteger();
  const secondOperand = getRandomInteger();
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${firstOpeand} ${operator} ${secondOperand}`;
  let correctAnswer;

  switch (operator) {
    case '*':
      correctAnswer = firstOpeand * secondOperand;
      break;
    case '+':
      correctAnswer = firstOpeand + secondOperand;
      break;
    case '-':
      correctAnswer = firstOpeand - secondOperand;
      break;
    default:
      break;
  }
  return cons(question, String(correctAnswer));
};

export default () => {
  startGame(task, getQuestionAndAnswer);
};
