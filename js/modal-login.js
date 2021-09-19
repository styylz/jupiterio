const link = document.querySelector(".login-link");

const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");

const login = document.querySelector("[name=login]");
const form = document.querySelector("form");
const password = document.querySelector("[name=password]");
const submit = document.querySelector(".submit");
let name = document.querySelector(".name");

let isStorageSupport = true;
const storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

// open
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("User-login");
    popup.classList.add("modal-show");
    login.focus();
    if(storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
} );

// close
close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");

})

// form
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if(!login.value || !password.value) {
        evt.preventDefault();
        console.log("Enter your login or password");
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }


})

// submit

submit.addEventListener("click", function () {
    alert("Message sent");
})