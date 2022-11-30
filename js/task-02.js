const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
console.log(list);

list.classList.add(".item");

console.log(list.classList);
const firstItem = document.createElement("li");
firstItem.textContent = [ingredients].slice(" ");
list.append(firstItem);

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
