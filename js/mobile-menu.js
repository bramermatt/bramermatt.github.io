function mobileMenu() {
  const menu = document.getElementById('nav-mobile');
  const icon = document.getElementById('menu-icon');
  
  if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
  } else {
      menu.classList.add('open');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
  }
}