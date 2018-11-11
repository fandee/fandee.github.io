var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form"); 
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("js-modal-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("js-modal-show");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode == 27) {
		evt.preventDefault();
		popup.classList.remove("js-modal-show");
	}
});