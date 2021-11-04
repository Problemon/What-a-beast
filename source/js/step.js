import { DATA } from './data.min.js';
import { showEndGame } from './end.min.js';
import { backToElections } from './elections.min.js';
import { addClassHidden, removeClassHidden } from './util.min.js';

const buttonNext = document.querySelector('.options__button--next');
const buttonBack = document.querySelector('.options__button--back');

let steps;
let givenRightAnswers = [];
let givenNodeAnswer;
let currentStep;
let stepList;
let currentLevel;
let currentRightAnswers;

let indexStep = 0;

const renderStepAnswer = (image, indexImage, numbers, isRounded) => (`
  <label class="step__item">
    <input class="step__radio visually-hidden" type="radio" value="${indexImage + 1}" name="${numbers[0]}-${numbers[1]}">
    <picture>
      <source srcset="img/items/${image}.webp 1x, img/items/${image}@2x.webp 2x">
      <img class="step__image ${isRounded ? 'step__image--rounded' : ''}" src="img/items/${image}.png" srcset="img/items/${image}@2x.png 2x" width="300" height="300" alt="" draggable="false">
    </picture>
    <div class="step__check-mark"></div>
  </label>
`);

const renderStepAnswers = (dataStep, numbers) => {
  const {images, isRounded} = dataStep;
  const answersMarkup = images.map((image, indexImage) => renderStepAnswer(image, indexImage, numbers, isRounded));

  return (`
    <fieldset class="step__list">
      ${answersMarkup.join('\n')}
    </fieldset>
  `);
};

const renderStep = (dataStep, numbers) => {
  const {title} = dataStep;

  return (`
    <li class="level__step step step--hidden container" data-class="step">
      <header class="step__header">
        <h2 class="step__title title title--step">${title}</h2>
      </header>
        ${renderStepAnswers(dataStep, numbers)}
    </li>
  `);
};

const renderStepsOfLevel = (level, levelIndex) => {
  const dataStepsOfLevel = DATA.LEVELS[levelIndex];

  const nodeSteps = dataStepsOfLevel.map((dataStep, number) => {
    const nodeStep = renderStep(dataStep, [levelIndex, number]);

    return nodeStep;
  });

  level.insertAdjacentHTML('beforeend', nodeSteps.join('\n'));
};

const renderSteps = (levels) => {
  levels.forEach((level, levelIndex) => renderStepsOfLevel(level, levelIndex));
};

const onStepListChange = () => {
  buttonNext.classList.remove('button--hidden');
};

const showCurrentStep = () => {
  currentStep = steps[indexStep];
  stepList = currentStep.querySelector('.step__list');

  removeClassHidden(currentStep);
  stepList.addEventListener('change', onStepListChange);
};

const getCheckedAnswer = () => stepList.querySelector('input:checked');

const getDataOfAnswer = (element) => {
  const stepItem = element.closest('.step__item');
  const stepItemImageSrc = stepItem.querySelector('.step__image').src;
  const answerData = {
    image: stepItemImageSrc,
  };

  return answerData;
};

const clearStepListChange = () => {
  stepList.removeEventListener('change', onStepListChange);
};

const hideCurrentStep = () => {
  const checkedAnswer = getCheckedAnswer();

  if(checkedAnswer) {
    checkedAnswer.checked = false;
  }

  buttonNext.classList.add('button--hidden');

  clearStepListChange();
  addClassHidden(currentStep);
};

const checkAnswer = () => {
  givenNodeAnswer = getCheckedAnswer();
  const rightAnswerOfStep = currentRightAnswers[indexStep];
  const givenAnswerOfStepValue = Number(givenNodeAnswer.value);

  if (rightAnswerOfStep === givenAnswerOfStepValue) {
    const dataOfAnswer = getDataOfAnswer(givenNodeAnswer);
    givenRightAnswers.push(dataOfAnswer);
  }
};

const onButtonNextClick = () => {
  checkAnswer();

  if (indexStep === steps.length - 1) {
    hideCurrentStep();

    showEndGame(currentLevel, givenRightAnswers, currentRightAnswers);

    givenRightAnswers = [];
    indexStep = 0;
  } else {
    hideCurrentStep();
    indexStep += 1;
    showCurrentStep();
  }
};

const onButtonBackClick = () => {
  if (indexStep === 0) {
    backToElections(currentLevel);

    givenRightAnswers = [];
  } else {
    hideCurrentStep();
    indexStep -= 1;
    showCurrentStep();
  }
};

const setLogicOfSteps = (level, rightAnswers) => {
  currentLevel = level;
  currentRightAnswers = rightAnswers;
  steps = level.querySelectorAll('.step');

  showCurrentStep();
};

buttonBack.addEventListener('click', () => onButtonBackClick());
buttonNext.addEventListener('click', () => onButtonNextClick());

export {setLogicOfSteps, renderSteps};
