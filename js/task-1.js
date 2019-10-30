/* eslint-disable linebreak-style */
const categories = document.querySelectorAll('#categories li.item');
console.log(categories);
const child = `В списке ${categories.length} категории`;
console.log(child);
categories.forEach((e) => console.dir(`Категоря:${e.firstElementChild.textContent}
\nКоличество элементов: ${e.lastElementChild.children.length} `));
