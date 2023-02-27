const formInputEl = document.querySelector("#validation-input");
const elementLength = formInputEl.getAttribute("data-length");
formInputEl.addEventListener("blur", (event) => {
  if (event.target.value.trim().length === Number(elementLength)) {
    formInputEl.classList.remove("invalid");
    formInputEl.classList.add("valid");
  } else {
    formInputEl.classList.remove("valid");
    formInputEl.classList.add("invalid");
  }
});
