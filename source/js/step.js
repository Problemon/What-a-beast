import { showEndGame } from './end.min.js';
import { backToElections } from './elections.min.js';
import { addClassHidden, removeClassHidden } from './util.min.js';
import { hideOptions } from './options.min.js';

export default class StepsControle {
  constructor(level, rightAnswers) {
    this.level = level;
    this.rightAnswers = rightAnswers;
    this.numberStep = 1;
    this.steps = this.level.querySelectorAll('.step');
    this.stepsButtonBack = this.level.querySelectorAll('.step__button--back');
  }

  showCurrentStep () {
    removeClassHidden(this.currentStep);
  }

  showStep(step) {
    removeClassHidden(step);
  }

  hideStep(step) {
    addClassHidden(step);
    this.stepList.removeEventListener('change', this.onStepListChange);
  }

  onButtonBackClick() {
    if (this.numberStep === 1) {
      backToElections(this.level);
    } else {
      this.numberStep -= 1;
      this.prevStep = this.steps[this.numberStep - 1];

      this.hideStep(this.currentStep);
      this.showStep(this.prevStep);
      this.activeButtons();
    }
  }

  onStepListChange (evt) {
    this.buttonNext.classList.remove('button--hidden');
  }

  onButtonNextClick() {
    if (this.numberStep === this.steps.length) {
      hideOptions();
      addClassHidden(this.currentStep);
      showEndGame();
    } else {
      this.numberStep += 1;
      this.nextStep = this.steps[this.numberStep - 1];

      this.hideStep(this.currentStep);
      this.showStep(this.nextStep);
      this.activeButtons();
    }
  }


  activeButtons() {
    this.currentStep = this.steps[this.numberStep - 1];
    this.buttonNext = this.currentStep.querySelector('.step__button--next');
    this.stepList = this.currentStep.querySelector('.step__list');
    const buttonBack = this.currentStep.querySelector('.step__button--back');

    buttonBack.addEventListener('click', () => this.onButtonBackClick(), {once: true});
    this.stepList.addEventListener('change', this.onStepListChange(evt));
    this.buttonNext.addEventListener('click', () => this.onButtonNextClick(), {once: true});
  }
}
