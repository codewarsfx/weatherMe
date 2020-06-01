export const elements = {
  inputElement: document.querySelector('.submit__input'),
  buttonELement: document.querySelector('.submit__button'),
  formELement: document.querySelector('.submit'),
  mainElement: document.querySelector('.container'),
  mainContent: document.querySelector('.main__content'),
  asideDescription: document.querySelector('.weather__Description'),
  loader: document.querySelector('.loader'),
  asideElement: document.querySelector('aside'),
  mainSpan: document.querySelector('.main__header span '),
  weatherDescription: document.querySelector('.weather__Description'),
};

export const addLoader = () => {
  // 1. change display property of display
  elements.loader.style.display = 'block';
};

export const removeLoader = () => {
  // 1. change display property of display
  elements.loader.style.display = 'none';
};
