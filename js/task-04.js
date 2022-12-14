// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його
// значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй
// її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueTotal = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');

const counterValue = {
  value: 0,

  changeValueUp() {
    this.value += 1;
  },

  changeValueDown() {
    this.value -= 1;
  },
};
decrementBtn.addEventListener("click", () => {
  counterValue.changeValueDown();
  valueTotal.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  counterValue.changeValueUp();
  valueTotal.textContent = counterValue.value;
});
