function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEL = document.querySelector("button[data-create]");
const delEl = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");
const controlEl = document.querySelector("#controls");


const createBoxes = () => {
  const amount = controlEl.firstElementChild.value;
  for  ( let i=1; i <= amount; i +=1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = 30 + 10*(i-1) + "px";
    newDiv.style.height = 30 + 10*(i-1) + "px";
     divEl.append(newDiv);
       };
 };
createEL.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  divEl.innerHTML = " ";
  controlEl.firstElementChild.value = "0"
};

delEl.addEventListener('click', destroyBoxes);

