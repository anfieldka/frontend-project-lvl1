import readlineSync from 'readline-sync';

export const ques = () => readlineSync.question('May I have your name? ');
export const randomNum = () => Math.round(Math.random() * 100) + 1;
export const ques2 = () => readlineSync.question('Your answer: ');
export const evengame = (name) => {
  const rand = randomNum();
  let parity = 'yes';
  if (rand % 2 === 0) {
    parity = 'yes';
  } else { parity = 'no'; }
  console.log(`Question: ${rand}`);
  const ans = ques2();
  if (ans === parity) {
    return 'Correct!';
  } console.log(`'${ans}' is wrong answer ;(. Correct answer was ${parity}.\nLets try again, ${name}!`);
  return `'${ans}' is wrong answer ;(. Correct answer was ${parity}.\nLets try again, ${name}!`;
};
