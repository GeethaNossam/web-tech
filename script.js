const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");


registerLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
});

loginLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup");
});
iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup");
});
