import { randomNum, takeAnswer, testAnswer } from '../index';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const helloWord = 'What number is missing in the progression?\n';

const progGenerator = () => {
  const arr = new Array(10);
  arr[0] = randomNum();
  const progStep = randomInt(2, 9);
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + progStep;
  }
  const emptyCell = randomInt(0, 10);
  arr[emptyCell] = '..';
  return `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`;
};

const getRandCorrAns = (express) => {
  let count = 0;
  const arr = new Array(10);
  arr[0] = '';
  arr[1] = '';
  arr[2] = '';
  arr[3] = '';
  arr[4] = '';
  arr[5] = '';
  arr[6] = '';
  arr[7] = '';
  arr[8] = '';
  arr[9] = '';
  for (let i = 0; i < express.length; i += 1) {
    if (express[i] === ' ') {
      count += 1;
    } else { arr[count] += express[i]; }
  }
  let i = 0;
  while (i < 10) {
    if (arr[i] === '..') {
      if (i === 0) {
        return (Number(arr[i + 1]) - (Number(arr[i + 2]) - Number(arr[i + 1]))).toString();
      } if (i === 9) {
        return (Number(arr[i - 1]) + (Number(arr[i - 1]) - Number(arr[i - 2]))).toString();
      } return ((Number(arr[i - 1]) + Number(arr[i + 1])) / 2).toString();
    }
    i += 1;
  }
  return NaN;
};

export default () => {
  testAnswer(helloWord, progGenerator, takeAnswer, getRandCorrAns);
};
