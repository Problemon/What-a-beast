import { renderMenu, showMenu } from './menu.min.js';
import { activeSettings } from './settings.min.js';
import { renderLevels } from './level.min.js';
import { renderSteps } from './step.min.js';

const launchGame = () => {
  showMenu();
};

const initGame = () => {
  renderMenu();

  renderLevels();
  const gameLevels = document.querySelectorAll('.level');

  renderSteps(gameLevels);

  activeSettings();
  launchGame();
};

window.addEventListener('load', initGame);

export {launchGame};

