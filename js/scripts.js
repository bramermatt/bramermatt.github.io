// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) {
            menuIcon.innerHTML = "&times;"; // Change to X
        } else {
            menuIcon.innerHTML = "&#9776;"; // Change to hamburger
        }
    });
});
