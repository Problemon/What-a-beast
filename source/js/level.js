import { steps } from './step.min.js';
import { removeClassHidden, addClassHidden } from './util.min.js';

const RIGHT_ANSWERS = [
  [1, 1, 2, 3, 2, 1, 2, 1],
  [1, 2, 2, 1, 2, 3, 3, 1],
  [1, 2, 2, 1, 3, 2, 1, 2],
];

const gameLevels = document.querySelectorAll('.level');

const hideLevel = (level) => {
  addClassHidden(level);
};

const showLevel = (element) => {
  const indexLevel = Number(element.dataset.number) - 1;
  const currentLevel = gameLevels[indexLevel];
  const rightAnswersOfLevel = RIGHT_ANSWERS[indexLevel];

  removeClassHidden(currentLevel);
  steps.level = currentLevel;
  steps.rightAnswers = rightAnswersOfLevel;
  steps.givenRightAnswers = [];
  steps.showCurrentStep();
};

export { hideLevel, showLevel };
