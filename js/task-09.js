function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  const changeColor = getRandomHexColor();
  
  document.body.style.backgroundColor = changeColor;
  spanColorEl.textContent = changeColor;
  console.log(changeColor);
});
