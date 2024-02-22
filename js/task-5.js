function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

changeBtn.addEventListener('click', event => {
  const changeColor = getRandomHexColor();
  spanColor.textContent = changeColor;
  bodyColor.style.backgroundColor = changeColor;
});

const text = document.querySelector('p');
text.classList.add('text-color');