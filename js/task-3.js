
const input = document.querySelector('#name-input');
const guestName = document.querySelector('#name-output');
input.addEventListener('keydown', greet => {
    const pureValue = input.value.trim();
    if (pureValue === '') {
        guestName.textContent = 'Anonymous';
    }
    else {
        guestName.textContent = pureValue;
    }
});