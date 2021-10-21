import { addClassHidden, removeClassHidden } from './util.min.js';
import { showElections } from './elections.min.js';

const gameMenu = document.querySelector('.menu');
const gameButtonPlay = document.querySelector('.button--play');

const hideMenu = () => {
  addClassHidden(gameMenu);
};

const onButtonPlayClick = () => {
  hideMenu();
  showElections();
};

const showMenu = () => {
  removeClassHidden(gameMenu);

  gameButtonPlay.addEventListener('click', onButtonPlayClick, {once: true});
};

export { showMenu };
