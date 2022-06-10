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

dom.form.addEventListener("submit", submitFormHandler);
dom.login.addEventListener("change", checkLogin);
dom.pass.addEventListener("change", checkPass);
if (dom.passCopy) {
  dom.passCopy.addEventListener("change", checkPassCopyLength);
}

function checkLogin() {
  if (!dom.validEmail.test(dom.login.value)) {
    dom.login.classList.add("error");
    dom.invalidLogin.classList.add("invalid-active");
  } else {
    dom.login.classList.remove("error");
    dom.invalidLogin.classList.remove("invalid-active");

    return true;
  }
}

function checkPass() {
  if (dom.pass.value.length < 8 && dom.pass.value.length !== 0) {
    dom.pass.classList.add("error");
    dom.invalidPass.classList.add("invalid-active");
  } else {
    dom.pass.classList.remove("error");
    dom.invalidPass.classList.remove("invalid-active");
    return true;
  }
}

function checkPassCopy() {
  let regexp = new RegExp(dom.passCopy.value);

  if (!regexp.test(dom.pass.value)) {
    dom.passCopy.classList.add("error");
    dom.invalidPassCopy.classList.add("invalid-active");
  } else {
    dom.passCopy.classList.remove("error");
    dom.invalidPassCopy.classList.remove("invalid-active");
    return true;
  }
}

function checkPassCopyLength() {
  if (dom.pass.value.length !== dom.passCopy.value.length) {
    dom.passCopy.classList.add("error");
    dom.invalidPassCopy.classList.add("invalid-active");
    console.log("длина паролей не совпадает");
  } else {
    dom.passCopy.classList.remove("error");
    dom.invalidPassCopy.classList.remove("invalid-active");
    return true;
  }
}

function submitFormHandler(event) {
  if (
    !(checkLogin() && checkPass() && checkPassCopy() && checkPassCopyLength())
  ) {
    event.preventDefault();
    console.log("есть ошибки заполнения");
    return;
  }
  console.log("форма отправлена");
}
