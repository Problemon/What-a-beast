import { removeClassHidden, addClassHidden } from './util.min.js';
import { launchGame } from './game.min.js';
import { hideLevel } from './level.min.js';

const splashScreen = document.querySelector('.splash-screen');
const gameEnd = document.querySelector('.end');
const buttonAgain = gameEnd.querySelector('.button--again');
const numberRightAnswers = gameEnd.querySelector('.end__right-answers');
const answersList = gameEnd.querySelector('.end__answer-list');

const glider = new Glider (answersList, {
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
});

const gliderInner = document.querySelector('.glider-track');


const hideEndGame = () => {
  addClassHidden(gameEnd);
};

const onButtonAgain = () => {
  hideEndGame();
  launchGame();
  gliderInner.innerHTML = '';
};

const templateAnswerItem = (img, title) => (`
    <li class="end__answer-item">
      <img class="end__answer-image" src="${img}" alt="">
      <h3 class="end__answer-title">${title}</h3>
    </li>
`);

const createRightAnswersList = (dataOfAnswers) => {
  const answersItems = dataOfAnswers.map((item) => {
    const {image, title} = item;
    return templateAnswerItem(image, title);
  });

  gliderInner.insertAdjacentHTML('beforeend', answersItems.join('\n'));
};

const showEndGameAnimation = () => {
  removeClassHidden(splashScreen);

  setTimeout(() => {
    addClassHidden(splashScreen);
    removeClassHidden(gameEnd);
  }, 3000);
};

const showEndGame = (level, givenRightAnswers) => {
  numberRightAnswers.innerHTML = `${givenRightAnswers.length}&nbsp;`;
  buttonAgain.addEventListener('click', onButtonAgain, {once: true});

  hideLevel(level);

  createRightAnswersList(givenRightAnswers);
  glider.refresh(true);

  showEndGameAnimation();
};

export { showEndGame };


