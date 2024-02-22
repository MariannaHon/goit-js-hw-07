const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const entering = event.target;
    const userEmail = entering.elements.email.value.trim();
    const userPassword = entering.elements.password.value.trim();

    if (userEmail === "" || userPassword === "") {
        alert('All form fields must be filled in');
        return;
    }

    const result = {
        email: userEmail,
        password: userPassword
    };

    console.log(result);

    form.reset();
})



const button = document.querySelector('button[type="submit"]');
button.classList.add('login');