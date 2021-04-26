const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputValid);
inputEl.addEventListener('blur', onInputInvalid);

function onInputValid(event) {
    if (Number(event.currentTarget.value.length) === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
}

function onInputInvalid(event) {
    if (Number(event.currentTarget.value.length) !== Number(inputEl.dataset.length)) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}