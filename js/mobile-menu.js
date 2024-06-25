function mobileMenu() {
  const menu = document.getElementById('nav-mobile');
  const icon = document.getElementById('menu-icon');
  const menuItems = document.querySelectorAll('.nav-mobile li a'); // Select all menu items
  
  if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
  } else {
      menu.classList.add('open');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
  }

  // Close menu when a menu item is clicked
  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          menu.classList.remove('open');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
      });
  });
}
