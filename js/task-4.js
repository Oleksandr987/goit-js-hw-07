/* eslint-disable linebreak-style */
const counterValue = {
  btnIn: document.querySelector('button[data-action="increment"]'),
  btnDec: document.querySelector('button[data-action="decrement"]'),
  spn: document.querySelector('#value'),
};
let counter = 0;

function increment() {
  counter += 1;
  counterValue.spn.textContent = counter;
}
function decrement() {
  counter -= 1;
  counterValue.spn.textContent = counter;
}
counterValue.btnDec.addEventListener('click', decrement);
counterValue.btnIn.addEventListener('click', increment);
