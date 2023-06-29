function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  document.addEventListener("touchend", function(e) {
      if (e.target.id === "hamburger"){
        document.querySelector('nav-bar').classList.add('nav-bar');
        document.getElementById('hamburger').style.visibility ='hidden';
      } else {
        document.getElementById('nav-bar').style.visibility ='visible';
      }
    });
    
    document.addEventListener("click", function(e) {
      if (e.target.id === "nav-bar"){
        document.getElementById('nav-bar').style.visibility ='hidden';
      } else {
        document.getElementById('nav-bar').style.visibility ='visible';
      }
    });
}

// /* Open the sidenav */
// function openNav() {
//   document.getElementById("left-nav-bar").style.width = "100%";
// }

// /* Close/hide the sidenav */
// function closeNav() {
//   document.getElementById("left-nav-bar").style.width = "0";
// }