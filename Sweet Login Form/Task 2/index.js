let show = document.getElementById("show");

let password = document.getElementById("password");
function visible() {
  if (password.type == "password") {
    password.type = "text";

    show.classList.add("bx-show");

    show.classList.remove("bx-hide");
  } else {
    password.type = "password";
    show.classList.remove("bx-show");
    show.classList.add("bx-hide");
  }
}
function onSubmit() {
  const email = document.getElementById("email");

  const password = document.getElementById("password");
  if (email.value === "") {
    const err = document.querySelector(".validate-icon-email");

    err.removeAttribute("style");
    return false;
  }

  if (password.value === "") {
    const pass = document.querySelector(".validate-icon-pwd");
    const eye = document.querySelector(".eye-btn");

    pass.removeAttribute("style");
    eye.style.display = "none";
    return false;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  email.value = "";
  password.value = "";
}

function emailFocus() {
  const err = document.querySelector(".validate-icon-email");
  err.style.display = "none";
  const error = document.querySelector(".err-msg");
  error.innerText = "";
}

function passwordFocus() {
  const eye = document.querySelector(".eye-btn");
  const pass = document.querySelector(".validate-icon-pwd");
  const error = document.querySelector(".err-msg");
  error.innerText = "";
  pass.style.display = "none";
  eye.removeAttribute("style");
}

function showErrMsg(msg) {
  const err = document.querySelector(".err-msg");

  err.innerText = msg;
}
