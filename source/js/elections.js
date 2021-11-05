import { DATA } from './data.min.js';
import { addClassHidden, removeClassHidden } from './util.min.js';
import { showMenu } from './menu.min.js';
import { showLevel, hideLevel } from './level.min.js';

const gameElections = document.querySelector('.elections');
const gameElectionHeader = gameElections.querySelector('.elections__header');
const gameElectionsList = document.querySelector('.elections__list');
const electionsButtonBack = gameElections.querySelector('.elections__button--back');

const templateElectionsTitle = (title) => (`
  <h2 class="elections__title title">${title}</h2>
`);

const templateElectionsItem = (image, number) => (`
  <li class="elections__item" data-number="${number}">
    <picture>
      <source srcset="img/items/${image}.webp 1x, img/items/${image}@2x.webp 2x">
      <img class="elections__image" src="img/items/${image}.png" srcset="img/items/${image}@2x.png 2x" width="200"
        height="200" alt="" draggable="false">
    </picture>
  </li>
`);

const renderElections = () => {
  const {title, images, background} = DATA.ELECTIONS;

  const nodeElectionsItems = images.map((image, index) => templateElectionsItem(image, index + 1));

  gameElections.style.backgroundImage = `url("img/background/${background}.jpg")`;

  gameElectionHeader.insertAdjacentHTML('beforeend', templateElectionsTitle(title));
  gameElectionsList.insertAdjacentHTML('beforeend', nodeElectionsItems.join('\n'));
};

const hideElections = () => {
  addClassHidden(gameElections);
};

const onButtonBackElectionsClick = () => {
  hideElections();
  showMenu();
};

const onElectionsClick = (evt) => {
  const electionsItem = evt.target.closest('.elections__item');
  const indexLevel = Number(electionsItem.dataset.number) - 1;

  localStorage.setItem('indexLevel', String(indexLevel));

  if (electionsItem) {
    hideElections();
    showLevel(indexLevel);
  }
};

const showElections = () => {
  removeClassHidden(gameElections);

  electionsButtonBack.addEventListener('click', onButtonBackElectionsClick, {once: true});
  gameElectionsList.addEventListener('click', onElectionsClick, {once: true});
};

const backToElections = (level) => {
  showElections();
  hideLevel(level);
};


export {backToElections, showElections, hideElections, renderElections};
