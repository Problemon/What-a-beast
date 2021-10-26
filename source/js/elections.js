import { addClassHidden, removeClassHidden } from './util.min.js';
import { showMenu } from './menu.min.js';
import { showLevel, hideLevel } from './level.min.js';
import { hideOptions, showOptions } from './options.min.js';

const gameElections = document.querySelector('.elections');
const gameElectionsList = document.querySelector('.elections__list');
const electionsButtonBack = gameElections.querySelector('.elections__button--back');

const hideElections = () => {
  addClassHidden(gameElections);
};

const onButtonBackElectionsClick = () => {
  hideElections();
  showMenu();
};

const onElectionsClick = (evt) => {
  const electionsItem = evt.target.closest('.elections__item');

  if (electionsItem) {
    hideElections();
    showOptions();
    showLevel(electionsItem);
  }
};

const showElections = () => {
  removeClassHidden(gameElections);

  electionsButtonBack.addEventListener('click', onButtonBackElectionsClick, {once: true});
  gameElectionsList.addEventListener('click', onElectionsClick, {once: true});
};

const backToElections = (level) => {
  showElections();
  hideOptions();
  hideLevel(level);
};


export {backToElections, showElections, hideElections};
