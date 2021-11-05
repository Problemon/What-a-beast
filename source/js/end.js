import { removeClassHidden, addClassHidden } from './util.min.js';
import { launchGame } from './game.min.js';
import { hideLevel } from './level.min.js';

const splashScreen = document.querySelector('.splash-screen');
const gameEnd = document.querySelector('.end');
const buttonAgain = gameEnd.querySelector('.button--again');
const numberRightAnswers = gameEnd.querySelector('.end__right-answers');
const answersList = gameEnd.querySelector('.end__answer-list');

const glider = new Glider (answersList, {
  slidesToShow: 2,
  slidesToScroll: 1,
  scrollLock: true,
  scrollPropagate: true,
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

  localStorage.removeItem('isEnded');
  localStorage.removeItem('rightAnswers');
  localStorage.removeItem('givenRightAnswers');
  localStorage.removeItem('level');
  localStorage.removeItem('indexLevel');
};

const templateAnswerItem = (img) => (`
    <li class="end__answer-item">
      <img class="end__answer-image" src="${img}" alt="">
    </li>
`);

const createRightAnswersList = (dataOfAnswers) => {
  const answersItems = dataOfAnswers.map((item) => {
    const {image} = item;
    return templateAnswerItem(image);
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

const showEndGame = (level, givenRightAnswers, rightAnswers) => {
  localStorage.setItem('isEnded', true);

  numberRightAnswers.innerHTML = `${givenRightAnswers.length} / ${rightAnswers.length}&nbsp;`;
  buttonAgain.addEventListener('click', onButtonAgain, {once: true});

  hideLevel(level);

  createRightAnswersList(givenRightAnswers);
  glider.refresh(true);

  showEndGameAnimation();

};

export { showEndGame };


