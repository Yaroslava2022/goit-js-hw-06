const allEl = document.querySelectorAll(".item");
console.log("Number of categories:", allEl.length);

allEl.forEach((element) => {
  const titleEl = element.firstElementChild.firstChild;
  const listEl = element.lastElementChild.children;
  console.log("Category:", titleEl.textContent);
  console.log("Elements:", listEl.length);
});
