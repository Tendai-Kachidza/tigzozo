document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme")
})

// Hamburger

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click" , () => {
    hamMenu.classList.toogle("active");
    offScreenMenu.classList.toggle("active");
});