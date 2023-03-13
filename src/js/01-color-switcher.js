const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const setBodyBackgroundColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

let changeColorInterval;

const startChangeColor = () => {
  changeColorInterval = setInterval(setBodyBackgroundColor, 1000);
  startButton.setAttribute('disabled', true);
};

const stopChangeColor = () => {
  clearInterval(changeColorInterval);
  startButton.removeAttribute('disabled');
};

startButton.addEventListener('click', startChangeColor);
stopButton.addEventListener('click', stopChangeColor);
