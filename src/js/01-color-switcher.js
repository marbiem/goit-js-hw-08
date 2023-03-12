const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColor = () => {
  console.log('hello');
  body.style.backgroundColor = getRandomHexColor();
};

const stopChangeColor = () => {};

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', stopChangeColor);
