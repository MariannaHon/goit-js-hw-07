
const input = document.querySelector('#name-input');


const guestName = document.querySelector('#name-output');
input.addEventListener('input', () => {
    const pureValue = input.value.trim();
    if (pureValue === '') {
        guestName.textContent = 'Anonymous';
    }
    else {
        guestName.textContent = pureValue;
    }
});

const name = document.querySelector('h1');
name.classList.add('title-anonymous');



