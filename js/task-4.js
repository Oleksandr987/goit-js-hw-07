/* eslint-disable linebreak-style */
const counterValue = {
  btns: document.querySelector('#counter'),
  spn: document.querySelector('#value'),
};

const state = {
  counter: 0,
  increment() {
    state.counter += 1;
    counterValue.spn.textContent = state.counter;
  },
  decrement() {
    state.counter -= 1;
    counterValue.spn.textContent = state.counter;
  },
};

function handClick({ target }) {
  state[target.dataset.action]();
  counterValue.spn.textContent = state.counter;
}


counterValue.btns.addEventListener('click', handClick);
