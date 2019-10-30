/* eslint-disable linebreak-style */
const refs = {
  input: document.querySelector('input[type="text"]'),
  name: document.getElementById('name-output'),
};

function handInput(e) {
  e.preventDefault();
  const { target } = e;
  console.log(target.value);
  refs.name.textContent = target.value;
}


refs.input.addEventListener('input', handInput);
