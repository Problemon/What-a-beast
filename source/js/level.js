import StepsControle from './step.min.js';
import { removeClassHidden, addClassHidden } from './util.min.js';

const ANSWERS = [
  [1, 1],
  [],
  [],
];

const gameLevels = document.querySelectorAll('.level');

const hideLevel = (level) => {
  addClassHidden(level);
};

const showLevel = (element) => {
  const indexLevel = Number(element.dataset.number) - 1;
  const currentLevel = gameLevels[indexLevel];
  const answersOfLevel = ANSWERS[indexLevel];
  const stepControle = new StepsControle(currentLevel, answersOfLevel);

  removeClassHidden(currentLevel);
  stepControle.activeButtons();
  stepControle.showCurrentStep();
};

export { hideLevel, showLevel };
