import readlineSync from 'readline-sync';

const sayHello = (helloWord) => {
  console.log('Welcome to the Brain Games!');
  console.log(helloWord);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const randomNum = () => Math.round(Math.random() * 100) + 1;

export const takeAnswer = (numbers) => {
  const gamerAnswer = readlineSync.question(`Question: ${numbers}\nYour answer: `);
  return gamerAnswer;
};

export const testAnswer = (helloWord, generator, ans, corectAns) => {
  const gamerName = sayHello(helloWord);

  for (let i = 0; i < 3; i += 1) {
    const randGenerator = generator();
    const gamerAnswer = ans(randGenerator);
    const correctAnswer = corectAns(randGenerator);
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${gamerName}!`);
    }
  }

  return console.log(`Congratulations, ${gamerName}!`);
};
