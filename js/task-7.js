/* eslint-disable linebreak-style */
const refs = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
refs.setAttribute('step', 2);
refs.setAttribute('min', 1);
refs.setAttribute('max', 150);
text.style.fontSize = '18px';
refs.value = Number.parseInt(text.style.fontSize);
refs.addEventListener('input', () => {
  text.style.fontSize = `${refs.value}px`;
});
