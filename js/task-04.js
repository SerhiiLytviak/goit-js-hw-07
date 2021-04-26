const buttons = document.querySelectorAll('#counter button');
const buttonDecrement = buttons[0];
const buttonIncrement = buttons[1];
const span = document.querySelector('#value');
let counterValue = 0;

buttonDecrement.addEventListener('click', onDecrementButtonClick);
buttonIncrement.addEventListener('click', onIncrementButtonClick)

function onDecrementButtonClick() {
    if ('click') {
        counterValue -= 1;
        span.textContent = counterValue; 
    }
};

function onIncrementButtonClick() {
    if ('click') {
        counterValue += 1;
        span.textContent = counterValue;
    }
};