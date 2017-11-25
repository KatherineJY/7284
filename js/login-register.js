var toLogin = document.querySelector(".tologin");
var loginContainer = document.querySelector(".login-container");
var toRegister = document.querySelector(".toRegister");
var registerContainer = document.querySelector(".register-container");
var loginBtn = document.querySelector(".login-btn");
var hasLogined = document.querySelector(".hasLogined");
var closeBtns = document.querySelectorAll(".close-btn");
var registerBtn = document.querySelector(".register-btn");
var registerToLogin = document.querySelector(".registerToLogin");

toLogin.onclick = function(){
    loginContainer.style.display = "flex";
}

toRegister.onclick = function(){
    registerContainer.style.display = "flex";
}

loginBtn.onclick = function(){
    toLogin.style.display = "none";
    hasLogined.style.display = "flex";
    loginContainer.style.display = "none";
}

registerToLogin.onclick = function(){
    registerContainer.style.display = "none";
    loginContainer.style.display = "flex";
}

registerBtn.onclick = function(){
    registerContainer.style.display = "none";
    loginContainer.style.display = "flex";
}

closeBtns[0].onclick = function(){
    loginContainer.style.display = "none";
}

closeBtns[1].onclick = function(){
    registerContainer.style.display = "none";
}