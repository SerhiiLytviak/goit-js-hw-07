const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


inputEl.addEventListener('input', inputValue);

function inputValue(event) {
    textEl.setAttribute('style', `font-size:${event.currentTarget.value}px`);
}