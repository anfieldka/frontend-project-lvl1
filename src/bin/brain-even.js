#!/usr/bin/env node

import { ques, evengame } from '../index';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const name = ques();
console.log(`Hello, ${name}!`);

for (let i = 0; i < 3; i += 1) {
  if (evengame(name) !== 'Correct!') {
    break;
  }
  console.log('Correct!');
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
