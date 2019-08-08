import readlineSync from 'readline-sync';

export const ques = () => {
	return readlineSync.question('May I have your name? ');
}
