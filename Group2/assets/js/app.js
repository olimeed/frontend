// Hamburger JS
const ham = document.querySelector(".hamburger");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const navbar = document.querySelector(".Mobile-menu");
const body = document.querySelector("html");


const menuOpen = e => {
    console.log("hey ninja");
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
    navbar.classList.toggle("MMmenu");
    body.classList.toggle("no-scroll");

};
ham.addEventListener("click", menuOpen);



const scrollButton = document.querySelector("#scroll");

scrollButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


