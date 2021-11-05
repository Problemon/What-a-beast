import { checkLoad } from './preloader.min.js';
import { activeSettings } from './settings.min.js';
import { renderMenu, showMenu } from './menu.min.js';
import { renderElections } from './elections.min.js';
import { renderLevels } from './level.min.js';
import { renderSteps } from './step.min.js';
import { showLevel } from './level.min.js';
import { showEndGame } from './end.min.js';

const indexLevel = Number(localStorage.getItem('indexLevel'));
const isEnded = localStorage.getItem('isEnded');

const launchGame = () => {
  showMenu();
};

const resumeGame = () => {
  showLevel(indexLevel);
};

const initGame = () => {
  renderMenu();
  renderElections();
  renderLevels();
  const gameLevels = document.querySelectorAll('.level');
  renderSteps(gameLevels);

  activeSettings();

  if (isEnded) {
    const givenAnswers = JSON.parse(localStorage.getItem('givenRightAnswers'));
    const rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));

    showEndGame(gameLevels[indexLevel], givenAnswers, rightAnswers);
  } else if (indexLevel) {
    resumeGame(indexLevel);
  } else {
    launchGame();
  }

  checkLoad();
};

initGame();


export {launchGame};

