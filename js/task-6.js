function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('button[data-create]');
createBtn.classList.add('create');

const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.classList.add('destroy');

const text = document.querySelector('input[type="number"]');
text.classList.add('input-boxes');

const boxForBoxes = document.querySelector('#boxes');


function createBoxes(amount) {

  destroyBoxes();

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

createBtn.addEventListener('click', () => {
  const amount = parseInt(text.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    text.value = '';
  }
  else {
    alert('Please, enter a number between 1 and 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

const body = document.querySelector('body');
body.classList.add('container-boxes');

