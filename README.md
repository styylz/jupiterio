# Jupiter.io

## Introduction

>This project is about company JUPITER. JUPITER is a lead tech company in front-end development, providing best decision for clients. Fast and responsive web-sites are generated in a short time, providing efficient and quality oriented solutions. JUPITER focus to create happy clients. We as a team believe, that, decisions need to be implemented in time. Agile method let us to create and remake web-sites overnight. JUPITER is clients first needs, later on payments. We implement products which are sustainable. 

## Code Samples

>  JS Login

const link = document.querySelector(".login-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = document.querySelector("[name=login]");
const form = document.querySelector("form");
const password = document.querySelector("[name=password]");
const submit = document.querySelector(".submit");

let isStorageSupport = true;
const storage = "";

<!-- Checks if localStora stores login -->
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

<!-- On click opens Modal Window -->
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

<!-- On click on cross closes Modal Window -->
// close
close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");

})

<!-- Checks if login or password exists, if not shake animation activates at modal window -->
<!--  -->
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

<!-- On submit click calls alert window -->
// submit
submit.addEventListener("click", function () {
    alert("Message sent");
})

## Installation

> Simply add all files to local environment or server and run it. Main page is index.html. All files are highly sorted. To find other pages, go to directory "pages". 
