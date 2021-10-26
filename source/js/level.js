import { DATA } from './data.min.js'
import { steps } from './step.min.js';
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

export { hideLevel, showLevel };
