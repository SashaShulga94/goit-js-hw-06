// Напиши скрипт створення і очищення колекції елементів.Користувач вводить
// кількість елементів в input і натискає кнопку Створити, після чого рендериться
// колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй
// готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
// видаляючи всі створені елементи.
const controlField = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", getInputValue);
btnDestroy.addEventListener("click", destroyBoxes);

function getInputValue(evt) {
  const amount = controlField.valueAsNumber;
  if (!amount) return;
  createBoxes(amount);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement(`div`);
    const size = 30 + 10 * i;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    markup.push(box);
  }
  boxes.append(...markup);
}
function destroyBoxes() {
  boxes.innerHTML = ``;
}
