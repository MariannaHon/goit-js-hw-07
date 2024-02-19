function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

changeBtn.addEventListener('click', event => {
  spanColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
});