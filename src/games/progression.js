import { cons } from '@hexlet/pairs';
import testAnswer from '..';
import getRandomInteger from '../instruments';

const task = 'What number is missing in the progression?\n';

const getQuestionAndAnswer = () => {
  const startProgression = getRandomInteger();
  const stepOfProgression = getRandomInteger();
  const lengthOfProgression = 10;
  const missedElementIndex = getRandomInteger(0, lengthOfProgression - 1);
  const correctAnswer = String(startProgression + stepOfProgression * missedElementIndex);
  let question = '';

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === missedElementIndex) {
      question += '.. ';
    } else {
      question += `${startProgression + stepOfProgression * i} `;
    }
  }

  return cons(question, correctAnswer);
};

export default () => {
  testAnswer(task, getQuestionAndAnswer);
};
