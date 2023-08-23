// Get the button:
mybuttonBottom = document.getElementById("myBtnBottom");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollBottom > 20 || document.documentElement.scrollBottom > 20) {
    mybuttonBottom.style.display = "block";
  } else {
    mybuttonBottom.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function bottomFunction() {
  document.body.scrollBottom = 0; // For Safari
  document.documentElement.scrollBottom = 0; // For Chrome, Firefox, IE and Opera
}