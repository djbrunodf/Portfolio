const info = document.querySelector(".info");
const navMenu = document.querySelector(".nav-menu");
const link = document.querySelectorAll(".link");

info.addEventListener("click", () => {
    info.classList.toggle("active");
    navMenu.classList.toggle("active");
})

link.forEach((link) => 
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        info.classList.remove("active");
}));
