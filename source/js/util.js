const getClassHidden = (element) => `${element.dataset.class}--hidden`;

export const removeClassHidden = (element) => {
  const classHidden = getClassHidden(element);
  setTimeout(() => {
    element.classList.remove(classHidden);
  }, 700);
};

export const addClassHidden = (element) => {
  const classHidden = getClassHidden(element);
  element.classList.add(classHidden);
};

export const switchingVisibility = (levelHidden, levelVisible) => {
  for (const element of levelHidden) {
    element.classList.add(getClassHidden(element));
  }

  setTimeout(() => {
    for (const element of levelVisible) {
      element.classList.remove(getClassHidden(element));
    }
  }, 700);
};
