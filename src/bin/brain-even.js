#!/usr/bin/env node

import { randomNum, takeAnswer, testAnswer } from '../index';

const helloWord = 'Answer "yes" if number even otherwise answer "no".\n';

const getRandCorrAns = numbers => (numbers % 2 === 0 ? 'yes' : 'no');

export default () => {
  testAnswer(helloWord, randomNum, takeAnswer, getRandCorrAns);
};
