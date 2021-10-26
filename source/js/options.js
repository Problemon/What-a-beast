import { addClassHidden, removeClassHidden } from './util.min.js';

const gameOptions = document.querySelector('.options');

const hideOptions = () => {
  addClassHidden(gameOptions);
};

const showOptions = () => {
  removeClassHidden(gameOptions);
};

export {hideOptions, showOptions};
