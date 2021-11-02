import { checkLoad } from './preloader.min.js';
import { activeSettings } from './settings.min.js';
import { renderMenu, showMenu } from './menu.min.js';
import { renderElections } from './elections.min.js';
import { renderLevels } from './level.min.js';
import { renderSteps } from './step.min.js';

const launchGame = () => {
  showMenu();
};

const initGame = () => {
  renderMenu();
  renderElections();
  renderLevels();
  const gameLevels = document.querySelectorAll('.level');
  renderSteps(gameLevels);

  activeSettings();
  launchGame();

  checkLoad();
};

initGame();

export {launchGame};

