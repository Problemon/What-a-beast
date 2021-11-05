import { DATA } from './data.min.js';
import { setLogicOfSteps} from './step.min.js';
import { removeClassHidden, addClassHidden } from './util.min.js';

const gameOptions = document.querySelector('.options');

const templateLevel = () => (`
  <ul class="options__level level level--hidden" data-class="level">
  </ul>
`);

const renderLevels = () => {
  const nodeLevels = DATA.LEVELS.map(() => templateLevel());
  const {background} = DATA.OPTIONS;

  gameOptions.style.backgroundImage = `url("img/background/${background}.jpg")`;
  gameOptions.insertAdjacentHTML('afterbegin', nodeLevels.join('\n'));
};

const hideOptions = () => {
  addClassHidden(gameOptions);
};

const showOptions = () => {
  removeClassHidden(gameOptions);
};

const hideLevel = (level) => {
  addClassHidden(level);

  hideOptions();
};

const showLevel = (indexLevel) => {
  const gameLevels = gameOptions.querySelectorAll('.level');

  const currentLevel = gameLevels[indexLevel];
  const rightAnswersOfLevel = DATA.ANSWERS[indexLevel];

  showOptions();
  removeClassHidden(currentLevel);
  setLogicOfSteps(currentLevel, rightAnswersOfLevel);
};

export { hideLevel, showLevel, renderLevels };
