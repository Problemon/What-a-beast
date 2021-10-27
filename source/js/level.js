import { DATA } from './data.min.js'
import { steps, renderStepsOfLevel } from './step.min.js';
import { removeClassHidden, addClassHidden } from './util.min.js';

const gameLevels = document.querySelectorAll('.level');

const hideLevel = (level) => {
  addClassHidden(level);
};

const showLevel = (element) => {
  const indexLevel = Number(element.dataset.number) - 1;
  const currentLevel = gameLevels[indexLevel];
  const rightAnswersOfLevel = DATA.ANSWERS[indexLevel];

  removeClassHidden(currentLevel);
  steps.level = currentLevel;
  steps.rightAnswers = rightAnswersOfLevel;
  steps.givenRightAnswers = [];
  steps.showCurrentStep();
};

const renderSteps = () => {
  gameLevels.forEach((level, levelIndex) => level.insertAdjacentHTML('beforeend', renderStepsOfLevel(levelIndex).join('\n')))
};

renderSteps();

export { hideLevel, showLevel };
