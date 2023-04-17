const signupBtn = document.querySelector("#signup_btn");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email && username && password) {
    postSignup({
      email: email.value,
      username: username.value,
      password: password.value,
    });
  }
});
