/* eslint-disable linebreak-style */
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = { list: document.querySelector('#ingredients') };
const elems = ingredients.map((e) => {
  const li = document.createElement('li');
  li.textContent = e;
  return li;
});
refs.list.append(...elems);
