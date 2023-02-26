const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const itemEl = ingredients.map((ingridient) => {
  const ingridientItem = document.createElement("li");
  ingridientItem.classList.add("item");
  ingridientItem.textContent = ingridient;

  return ingridientItem;
});
listEl.append(...itemEl);

