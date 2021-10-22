import { showEndGame } from './end.min.js';
import { backToElections } from './elections.min.js';
import { addClassHidden, removeClassHidden } from './util.min.js';
import { hideOptions } from './options.min.js';

const steps = {
  indexStep: 0,
  level: null, // get from level.js
  rightAnswers: null, // get from level.js
  givenRightAnswers: null, // get from level.js


  getCurrentStep () {
    this.steps = this.level.querySelectorAll('.step');
    return this.steps[this.indexStep];
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
    const rightAnswerOfStep = this.rightAnswers[this.indexStep];
    const givenAnswerOfStepValue = Number(this.givenAnswerOfStep.value);

    if (rightAnswerOfStep === givenAnswerOfStepValue) {
      const dataOfAnswer = this.getDataOfAnswer(this.givenAnswerOfStep);
      this.givenRightAnswers.push(dataOfAnswer);
    }
  },

  onStepListChange () {
    this.buttonNext.classList.remove('button--hidden');
  },

  onButtonNextClick () {
    this.checkAnswer();

    if (this.indexStep === this.steps.length - 1) {
      hideOptions();
      this.hideCurrentStep();
      showEndGame(this.givenRightAnswers);
      this.indexStep = 0;
    } else {
      this.hideCurrentStep();
      this.indexStep += 1;
      this.showCurrentStep();
    }
  },

  onButtonBackClick () {
    if (this.indexStep === 0) {
      backToElections(this.level);
    } else {
      this.hideCurrentStep();
      this.indexStep -= 1;
      this.showCurrentStep();
    }
  },

  hideCurrentStep () {
    addClassHidden(this.currentStep);
    this.givenAnswerOfStep.checked = false;
    this.buttonNext.classList.add('button--hidden');
  },

  showCurrentStep () {
    this.currentStep = this.getCurrentStep();
    this.buttonNext = this.currentStep.querySelector('.step__button--next');
    this.buttonBack = this.currentStep.querySelector('.step__button--back');
    this.stepList = this.currentStep.querySelector('.step__list');

    removeClassHidden(this.currentStep);

    this.buttonBack.addEventListener('click', () => this.onButtonBackClick(), {once: true});
    this.stepList.addEventListener('change', () => this.onStepListChange(), {once: true});
    this.buttonNext.addEventListener('click', () => this.onButtonNextClick(), {once: true});
  },
};

export {steps};
