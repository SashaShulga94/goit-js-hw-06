// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст
//  щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні
//  файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validationInput = document.querySelector("#validation-input");
const valueAtribute = validationInput.getAttribute(`data-length`);

function changeClass(className) {
  validationInput.classList.add(className);
}
function replaceClass(oldClass, newClass) {
  validationInput.classList.replace(oldClass, newClass);
}
function checkNumberOfSymbol() {
  if (validationInput.value.length !== Number(valueAtribute)) {
    validationInput.classList.add(`invalid`);
  } else validationInput.classList.replace(`invalid`, `valid`);
}
validationInput.addEventListener(`blur`, checkNumberOfSymbol);

// =============================MISTAKE=========================

// validationInput.addEventListener("blur", userParol);
// function userParol(evt) {
//   if (
//     evt.currentTarget.value.length >= 7 ||
//     evt.currentTarget.value.length <= 5
//   ) {
//     validationInput.style.borderColor = "#f44336";
//   } else {
//     validationInput.style.borderColor = "#4caf50";
//   }
// }
// console.dir(userParol);
