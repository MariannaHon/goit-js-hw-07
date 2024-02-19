function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const text = document.querySelector('input');
const boxForBoxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');

function createBoxes(amount) {
  if (amount > 1 && amount < 100) {

  }
}
