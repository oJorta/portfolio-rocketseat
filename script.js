let menu = document.querySelector("#menu-icon");
let aside = document.querySelector("#user-info");
let close = document.querySelector("#close");

menu.addEventListener("click", () =>{
    aside.classList.toggle("menu-active")
})  
close.addEventListener("click", () =>{
    aside.classList.toggle("menu-active")
})  

