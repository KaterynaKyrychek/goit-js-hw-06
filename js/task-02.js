const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsArr = ingredients.map((ingredient) => {
  const categoryItem = document.createElement("li");
  categoryItem.classList.add("item");
  categoryItem.textContent = ingredient;
  return categoryItem;
});

document.querySelector('#ingredients').append(...ingredientsArr);

