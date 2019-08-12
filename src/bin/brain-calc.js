#!/usr/bin/env node

import { cons, car, cdr } from '@hexlet/pairs';
import { randomNum, takeAnswer, testAnswer } from '../index';

const randomInt = () => Math.floor(Math.random() * (4 - 1)) + 1;

const helloWord = 'What is the result of the expression?.\n';

const expressGenerator = () => {
  const pair = cons(randomNum(), randomNum());
  const point = randomInt();
  let operation = '';
  if (point === 1) {
    operation = '*';
  } else if (point === 2) {
    operation = '+';
  } else operation = '-';
  return `${car(pair)} ${operation} ${cdr(pair)}`;
};

const getRandCorrAns = (express) => {
  let count = 0;
  const arr = new Array(3);
  arr[0] = '';
  arr[1] = '';
  arr[2] = '';
  for (let i = 0; i < express.length; i += 1) {
    if (express[i] === ' ') {
      count += 1;
    } else { arr[count] += express[i]; }
  }
  if (arr[1] === '*') {
    return Number(arr[0]) * Number(arr[2]);
  } if (arr[1] === '+') {
    return Number(arr[0]) + Number(arr[2]);
  } return Number(arr[0]) - Number(arr[2]);
};

export default () => {
  testAnswer(helloWord, expressGenerator, takeAnswer, getRandCorrAns);
};
