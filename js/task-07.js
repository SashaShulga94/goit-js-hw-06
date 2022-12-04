// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeControlInput = document.querySelector("#font-size-control");
const textSizeSpan = document.querySelector("#text");

fontSizeControlInput.addEventListener("input", userText);

function userText(evt) {
  textSizeSpan.style.fontSize = evt.currentTarget.value + "px";
}

console.dir(fontSizeControlInput);

console.dir(userText);
