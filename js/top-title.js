myID = document.getElementById("topTitle");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 40) {
    myID.className = "cta show"
  } else {
    myID.className = "cta hide"
  }
};

window.addEventListener("scroll", myScrollFunc);