import { cons, car, cdr } from '@hexlet/pairs';
import { randomNum, takeAnswer, testAnswer } from '../index';

const helloWord = 'Find the greatest common divisor of given numbers.\n';

const numGenerator = () => {
  const pair = cons(randomNum(), randomNum());
  return `${car(pair)} ${cdr(pair)}`;
};

const getRandCorrAns = (express) => {
  let count = 0;
  const arr = new Array(3);
  arr[0] = '';
  arr[1] = '';
  for (let i = 0; i < express.length; i += 1) {
    if (express[i] === ' ') {
      count += 1;
    } else { arr[count] += express[i]; }
  }
  let max = 0;
  let min = 0;
  if (Number(arr[0]) >= Number(arr[1])) {
    max = Number(arr[0]);
    min = Number(arr[1]);
  } else {
    max = Number(arr[1]);
    min = Number(arr[0]);
  }
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i.toString();
    }
  }
  return NaN;
};

export default () => {
  testAnswer(helloWord, numGenerator, takeAnswer, getRandCorrAns);
};
