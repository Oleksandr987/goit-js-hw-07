/* eslint-disable linebreak-style */
const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

function handInput(e) {
  if (e.currentTarget.value === '') {
    refs.name.textContent = 'незнакомец';
  } else {
    refs.name.textContent = e.currentTarget.value;
  }
}

refs.input.addEventListener('input', handInput);
