const loginForm = document.querySelector(".login-form");
const handlerSubmit = (event) => {
  event.preventDefault();
  const emailValue = loginForm.email.value.trim();
  const passwordValue = loginForm.password.value.trim();
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }
  const dataForm = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(dataForm);
  loginForm.reset();
};

loginForm.addEventListener("submit", handlerSubmit);
