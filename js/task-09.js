function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = document.body.style.backgroundColor;
});
