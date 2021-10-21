import { removeClassHidden, addClassHidden } from './util.min.js';
import { launchGame } from './game.min.js';

const gameEnd = document.querySelector('.end');
const buttonAgain = gameEnd.querySelector('.button--again');

const hideEndGame = () => {
  addClassHidden(gameEnd);
};

const playAgain = () => {
  hideEndGame();
  launchGame();
};

const onButtonAgain = () => {
  buttonAgain.addEventListener('click', playAgain, {once: true});
};

const showEndGame = () => {
  removeClassHidden(gameEnd);
  onButtonAgain();
};

export { showEndGame };


