import { takeAnswer, testAnswer } from '../index';

const helloWord = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const getRandCorrAns = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const randomInt = () => Math.floor(Math.random() * (100 - 2)) + 2;

export default () => {
  testAnswer(helloWord, randomInt, takeAnswer, getRandCorrAns);
};
