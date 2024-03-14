function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
  }

  // Add event listeners to each link to close the mobile menu when clicked
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#mobile-menu a");
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            closeNav();
        });
    });
});