const signupBtn = document.querySelector("#signup_btn");
const signinBtn = document.querySelector("#signin_btn");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

if (signupBtn) {
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
}

if (signinBtn) {
  signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ddddddasddsds");
    if (email && password) {
      postSignin({
        email: email.value,
        password: password.value,
      });
    }
  });
}
