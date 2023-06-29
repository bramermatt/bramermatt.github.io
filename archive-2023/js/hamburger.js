function myFunction() {
    var x = document.getElementById("topnav-inline");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    document.addEventListener("touchend", function(e) {
        if (e.target.id === "hamburger"){
          document.querySelector('topnav-inline').classList.add('topnav-inline');
          document.getElementById('hamburger').style.visibility ='hidden';
          // document.getElementById('title').style.marginTop ='0';
        } else {
          // document.querySelector('topnav-inline').classList.remove('open');
          document.getElementById('topnav-inline').style.visibility ='visible';
          // document.getElementById('title').style.marginTop ='0';
        }
      });
      
      document.addEventListener("click", function(e) {
        if (e.target.id === "topnav-inline"){
          // document.querySelector('topnav-inline').classList.add('open');
          document.getElementById('topnav-inline').style.visibility ='hidden';
          // document.getElementById('title').style.marginTop ='0';
        } else {
          // document.querySelector('topnav-inline').classList.remove('open');
          document.getElementById('topnav-inline').style.visibility ='visible';
          // document.getElementById('title').style.marginTop ='0';
        }
      });
  }