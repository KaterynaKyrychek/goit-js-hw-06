const categoriesNum = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item');


console.log('Number of categories:', categories.children.length);

categoriesItem.forEach((category) => {console.log('category ', category.firstElementChild.textContent); console.log('element ', category.lastElementChild.children.length)});
