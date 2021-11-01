import { DATA } from './data.min.js';
import { addClassHidden, removeClassHidden } from './util.min.js';
import { showElections } from './elections.min.js';

const gameMenu = document.querySelector('.menu');
const gameButtonPlay = gameMenu.querySelector('.button--play');

const templateMenu = (image) => (`
  <picture>
    <source srcset="img/decor/${image}.webp 1x, img/decor/${image}@2x.webp 2x">
    <img class="menu__title" src="img/decor/${image}.png" srcset="img/decor/${image}@2x.webp 2x" width="500" height="400"
      alt="Кто живет в лесу?" draggable="false">
  </picture>
`);

const renderMenu = () => {
  const {background, image} = DATA.MENU;

  gameMenu.insertAdjacentHTML('afterbegin', templateMenu(image));

  gameMenu.style.backgroundImage = `url("../img/background/${background}.jpg")`;
};

const hideMenu = () => {
  addClassHidden(gameMenu);
};

const onButtonPlayClick = () => {
  hideMenu();
  showElections();
};

const showMenu = () => {
  removeClassHidden(gameMenu);
  gameButtonPlay.addEventListener('click', onButtonPlayClick, {once: true});
};

export { showMenu, renderMenu };
