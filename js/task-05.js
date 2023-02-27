const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value.trim() === "") {
    textOutput.textContent = "Anonymous";
  }
 else textOutput.textContent = event.currentTarget.value;
});
