
const input = document.querySelector('#name-input');
input.style.width = "360px";
input.style.height = "40px";
input.style.border = "1px solid #808080";
input.style.borderRadius = "4px";
input.style.fontSize = "16px";
input.style.lineHeight = "1.5";
input.style.letterSpacing = "0.04em";
input.style.color = "#2e2f42";
input.style.paddingLeft = "12px";


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




