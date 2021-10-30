import { showMenu } from './menu.min.js';
import { activeSettings } from './settings.min.js';


const launchGame = () => {
  activeSettings();
  showMenu();
};

window.addEventListener('load', launchGame);

export {launchGame};

