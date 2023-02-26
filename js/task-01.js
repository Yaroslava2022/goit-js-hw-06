const allEl = document.querySelectorAll(".item");
console.log("Number of categories:", allEl.length);

allEl.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
