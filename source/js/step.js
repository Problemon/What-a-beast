import { showEndGame } from './end.min.js';
import { backToElections } from './elections.min.js';
import { addClassHidden, removeClassHidden } from './util.min.js';
import { hideOptions } from './options.min.js';

const buttonNext = document.querySelector('.options__button--next');
const buttonBack = document.querySelector('.options__button--back');

let indexStep = 0;

const steps = {
  level: null, // get from level.js
  rightAnswers: null, // get from level.js
  givenRightAnswers: null, // get from level.js

  getCurrentStep () {
    this.steps = this.level.querySelectorAll('.step');
    return this.steps[indexStep];
  },

  getDataOfAnswer(element) {
    const stepItem = element.closest('.step__item');
    const stepItemImageSrc = stepItem.querySelector('.step__image').src;
    const stepTitleText = this.currentStep.querySelector('.step__title').textContent;
    const answerData = {
      image: stepItemImageSrc,
      title: stepTitleText,
    };

    return answerData;
  },

  checkAnswer() {
    this.givenAnswerOfStep = this.stepList.querySelector('input:checked');
    const rightAnswerOfStep = this.rightAnswers[indexStep];
    const givenAnswerOfStepValue = Number(this.givenAnswerOfStep.value);

    if (rightAnswerOfStep === givenAnswerOfStepValue) {
      const dataOfAnswer = this.getDataOfAnswer(this.givenAnswerOfStep);
      this.givenRightAnswers.push(dataOfAnswer);
    }
  },

  onStepListChange () {
    buttonNext.classList.remove('button--hidden');
  },

  hideCurrentStep () {
    addClassHidden(this.currentStep);
    this.givenAnswerOfStep.checked = false;
    buttonNext.classList.add('button--hidden');
  },

  showCurrentStep () {
    this.currentStep = this.getCurrentStep();
    this.stepList = this.currentStep.querySelector('.step__list');

    removeClassHidden(this.currentStep);
    this.stepList.addEventListener('change', () => this.onStepListChange(), {once: true});
  },
};

const onButtonNextClick = () => {
  steps.checkAnswer();

  if (indexStep === steps.steps.length - 1) {
    hideOptions();
    steps.hideCurrentStep();
    showEndGame(steps.givenRightAnswers);
    indexStep = 0;
  } else {
    steps.hideCurrentStep();
    indexStep += 1;
    steps.showCurrentStep();
  }
};

const onButtonBackClick = () => {
  if (indexStep === 0) {
    backToElections(steps.level);
  } else {
    steps.hideCurrentStep();
    indexStep -= 1;
    steps.showCurrentStep();
  }
};

buttonBack.addEventListener('click', () => onButtonBackClick());
buttonNext.addEventListener('click', () => onButtonNextClick());

export {steps};
