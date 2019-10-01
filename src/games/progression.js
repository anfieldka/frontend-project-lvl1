import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../instruments';

const task = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getQuestionAndAnswer = () => {
  const startProgression = getRandomInteger();
  const stepOfProgression = getRandomInteger();
  const missedElementIndex = getRandomInteger(0, lengthOfProgression - 1);
  const correctAnswer = String(startProgression + stepOfProgression * missedElementIndex);
  let question = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === missedElementIndex) {
      question = `${question} ..`;
    } else {
      question = `${question} ${(startProgression + stepOfProgression * i)}`;
    }
  }

  return cons(question.trim(), correctAnswer);
};

export default () => {
  startGame(task, getQuestionAndAnswer);
};
