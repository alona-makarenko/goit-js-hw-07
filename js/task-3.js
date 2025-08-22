const enterName = document.querySelector("#name-input");
const helloName = document.querySelector("#name-output");
const handlerInput = (event) => {
  const value = event.target.value.trim();
  if (value === "") {
    helloName.textContent = "Anonymous";
  } else {
    helloName.textContent = value;
  }
};

enterName.addEventListener("input", handlerInput);
