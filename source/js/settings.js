import { removeClassHidden, addClassHidden } from './util.min.js';

const buttonSettings = document.querySelector('.button--settings');
const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup__close');
const popupFade = popup.querySelector('.popup__fade');

const onButtonSettingsClick = () => {
  removeClassHidden(popup);
};

const onButtonCloseClick = () => {
  addClassHidden(popup);
};

const onFadeClick = () => {
  addClassHidden(popup);
};

const onWindowKedown = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    addClassHidden(popup);
  }
};

const activeSettings = () => {
  buttonSettings.addEventListener('click', onButtonSettingsClick);
  buttonClose.addEventListener('click', onButtonCloseClick);
  popupFade.addEventListener('click', onFadeClick);
  window.addEventListener('keydown', onWindowKedown);
};

export { activeSettings };
