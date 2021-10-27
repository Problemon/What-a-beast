import { removeClassHidden, addClassHidden } from './util.min.js';
import { launchGame } from './game.min.js';

const splashScreen = document.querySelector('.splash-screen')
const gameEnd = document.querySelector('.end');
const buttonAgain = gameEnd.querySelector('.button--again');
const numberRightAnswers = gameEnd.querySelector('.end__right-answers');
const answersList = gameEnd.querySelector('.end__answer-list');
const answeritemTemplate = answersList.querySelector('#answer')
  .content
  .querySelector('.end__answer-item');

const hideEndGame = () => {
  addClassHidden(gameEnd);
};

const onButtonAgain = () => {
  hideEndGame();
  launchGame();
};

const createRightAnswersList = (dataOfAnswers) => {
  dataOfAnswers.forEach((item) => {
    const answerItem = answeritemTemplate.cloneNode(true);
    const answerItemImgae = answerItem.querySelector('.end__answer-image');
    const answerItemTitle = answerItem.querySelector('.end__answer-title');
    const {image, title} = item;

    answerItemImgae.src = image;
    answerItemTitle.textContent = title;

    answersList.appendChild(answerItem);
  });
};

const showEndGame = (givenRightAnswers) => {
  numberRightAnswers.innerHTML = `${givenRightAnswers.length}&nbsp;`;
  buttonAgain.addEventListener('click', onButtonAgain, {once: true});

  answersList.innerHTML = '';

  createRightAnswersList(givenRightAnswers);
  removeClassHidden(splashScreen);

  setTimeout(() => {
    addClassHidden(splashScreen);
    removeClassHidden(gameEnd);
  }, 3000)
};

export { showEndGame };


