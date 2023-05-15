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
          // document.getElementById('title').style.marginTop ='0';
        } else {
          // document.querySelector('topnav-inline').classList.remove('open');
          document.getElementById('inline-navbar').style.visibility ='visible';
          // document.getElementById('title').style.marginTop ='0';
        }
      });
      
      document.addEventListener("click", function(e) {
        if (e.target.id === "inline-navbar"){
          // document.querySelector('topnav-inline').classList.add('open');
          document.getElementById('inline-navbar').style.visibility ='hidden';
          // document.getElementById('title').style.marginTop ='0';
        } else {
          // document.querySelector('topnav-inline').classList.remove('open');
          document.getElementById('inline-navbar').style.visibility ='visible';
          // document.getElementById('title').style.marginTop ='0';
        }
      });
  }