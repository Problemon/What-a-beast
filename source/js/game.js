import { showMenu } from './menu.min.js';

const launchGame = () => {
  showMenu();
};

window.addEventListener('load', launchGame);

export {launchGame};

