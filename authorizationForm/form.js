'use strict';

const dom = {
	form: document.getElementById('form'),
	login: form.querySelector('#login'),
	pass: form.querySelector('#pass'),
	btn: form.querySelector('#submit'),
	invalidLogin: form.querySelector('.invalid-login'),
	invalidPass: form.querySelector('.invalid-pass'),
	validEmail: /^[\w.-]+@\w+\.[a-z]{2,4}$/i,
};

dom.form.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
	event.preventDefault();

	if (!dom.validEmail.test(dom.login.value)) {
		dom.login.classList.add('error');
		dom.invalidLogin.classList.add('invalid-active');
	} else {
		dom.login.classList.remove('error');
		dom.invalidLogin.classList.remove('invalid-active');
	}

	if (dom.pass.value.length < 8) {
		dom.pass.classList.add('error');
		dom.invalidPass.classList.add('invalid-active');
	} else {
		dom.pass.classList.remove('error');
		dom.invalidPass.classList.remove('invalid-active');
	}
}
