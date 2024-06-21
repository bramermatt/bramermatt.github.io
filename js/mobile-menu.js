// scripts.js
function mobileMenu() {
  const navMobile = document.getElementById("nav-mobile");
  const menuIcon = document.getElementById("menu-icon");

  navMobile.classList.toggle("active");
  if (navMobile.classList.contains("active")) {
      menuIcon.classList.replace("fa-bars", "fa-times");
  } else {
      menuIcon.classList.replace("fa-times", "fa-bars");
  }
}
