const getClassHidden = (element) => `${element.dataset.class}--hidden`;

const removeClassHidden = (element) => {
  const classHidden = getClassHidden(element);
  element.classList.remove(classHidden);
};

const addClassHidden = (element) => {
  const classHidden = getClassHidden(element);
  element.classList.add(classHidden);
};

export {removeClassHidden, addClassHidden};
