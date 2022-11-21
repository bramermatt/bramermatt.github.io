function myFunction() {
    var x = document.getElementById("inline-navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    document.addEventListener("touchend", function(e) {
        if (e.target.id === "hamburger"){
          document.querySelector('inline-navbar').classList.add('inline-navbar');
          document.getElementById('hamburger').style.visibility ='hidden';
        } else {
          document.getElementById('inline-navbar').style.visibility ='visible';
        }
      });
      
      document.addEventListener("click", function(e) {
        if (e.target.id === "inline-navbar"){
          document.getElementById('inline-navbar').style.visibility ='hidden';
        } else {
          document.getElementById('inline-navbar').style.visibility ='visible';
        }
      });
  }