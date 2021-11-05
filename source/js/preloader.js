import {addClassHidden} from './util.min.js';

const preloader = document.querySelector('.preloader');

const checkLoad = () => {
  window.addEventListener('load', () => {
    addClassHidden(preloader);
    setTimeout(() => {
      preloader.style.zIndex = 0;
    }, 1000);
  });
};

export { checkLoad };
