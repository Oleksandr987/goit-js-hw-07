/* eslint-disable linebreak-style */
const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputLength = input.value.length;
  console.log(inputLength);
  if (inputLength === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else if (inputLength === 0) {
    input.classList.remove('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
