const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = [];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
    const ingredientsItem = (document.createElement('li'));
    ingredientsItem.textContent = ingredient;
    elements.push(ingredientsItem);
});

ingredientsList.append(...elements);