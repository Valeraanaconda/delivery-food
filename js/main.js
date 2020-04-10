const cardbutton = document.querySelector("#cardbutton");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cardbutton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open")
}

new.WOW().init();