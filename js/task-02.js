const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function list(ingredients) {
  return ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.classList.add(".item");
    li.textContent = ingredient;
    return li;
  });
}
const recepyList = list(ingredients);
const ingredientsRef = document.querySelector(`#ingredients`);
ingredientsRef.append(...recepyList);

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1 Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2 Додасть назву інгредієнта як його текстовий вміст.
// 3 Додасть елементу клас item.
// 4 Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
