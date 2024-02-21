function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
body.style.background = "#fff";

const control = document.querySelector('#controls');
control.style.backgroundColor = "#F6F6FE";
control.style.padding = "32px";
control.style.width = "486px";
control.style.margin = "0 auto";

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const text = document.querySelector('input[type="number"]');
const boxForBoxes = document.querySelector('#boxes');
boxForBoxes.style.display = "flex";
boxForBoxes.style.gap = "16px";
boxForBoxes.style.padding = "32px";
boxForBoxes.style.backgroundColor = "#F6F6FE";
boxForBoxes.style.width = "486px";
boxForBoxes.style.margin = "16px auto";

function createBoxes(amount) {

  const collection = Array.from({ length: amount }, (_, index) => 30 + index * 10);
  const boxes = collection.map(size => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });
  boxes.forEach(box => boxForBoxes.appendChild(box));
}

function destroyBoxes() {
  boxForBoxes.innerHTML = '';
}

createBtn.addEventListener('click', (create) => {
  const amount = parseInt(text.value);
  if (amount > 1 && amount < 100) {
    createBoxes(amount);
    text.value = '';
  }
  else {
    alert('Please, enter a number between 1 and 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

