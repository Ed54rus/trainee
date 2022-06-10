"use strict";

const dom = {
  form: document.getElementById("form"),
  login: form.querySelector("#login"),
  pass: form.querySelector("#pass"),
  passCopy: form.querySelector("#pass-copy"),
  btn: form.querySelector("#submit"),
  invalidLogin: form.querySelector(".invalid-login"),
  invalidPass: form.querySelector(".invalid-pass"),
  invalidPassCopy: form.querySelector(".invalid-pass-copy"),
  validEmail: /^[\w.-]+@\w+\.[a-z]{2,4}$/i,
};

// dom.form.addEventListener('submit', submitFormHandler);
dom.login.addEventListener("change", checkLogin);
dom.login.addEventListener("change", checkPass);
dom.login.addEventListener("change", checkPassCopy);

function checkLogin() {
  if (!dom.validEmail.test(dom.login.value)) {
    dom.login.classList.add("error");
    dom.invalidLogin.classList.add("invalid-active");
  } else {
    dom.login.classList.remove("error");
    dom.invalidLogin.classList.remove("invalid-active");
  }
}

function checkPass() {
  if (dom.pass.value.length < 8) {
    dom.pass.classList.add("error");
    dom.invalidPass.classList.add("invalid-active");
  } else {
    dom.pass.classList.remove("error");
    dom.invalidPass.classList.remove("invalid-active");
  }
}

function checkPassCopy() {
  for (let i = 0; i < dom.passCopy.value.length; i++) {
    if (dom.passCopy.value[i] !== dom.pass.value[i]) {
      dom.passCopy.classList.add("error");
      dom.invalidPassCopy.classList.add("invalid-active");
    } else {
      dom.passCopy.classList.remove("error");
      dom.invalidPassCopy.classList.remove("invalid-active");
    }
  }
}

function submitFormHandler(event) {
  event.preventDefault();

  if (!dom.validEmail.test(dom.login.value)) {
    dom.login.classList.add("error");
    dom.invalidLogin.classList.add("invalid-active");
  } else {
    dom.login.classList.remove("error");
    dom.invalidLogin.classList.remove("invalid-active");
  }

  if (dom.pass.value.length < 8) {
    dom.pass.classList.add("error");
    dom.invalidPass.classList.add("invalid-active");
  } else {
    dom.pass.classList.remove("error");
    dom.invalidPass.classList.remove("invalid-active");
  }
}
