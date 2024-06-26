// Apply filtering logic when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
  filterItem('none'); // Initially hide all items
});

function filterItem(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") {
      // If 'all' category is selected, show all items
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";
      }
  } else if (c == "none") {
      // If 'none' is selected, hide all items
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
  } else {
      // Otherwise, show items matching the selected category and hide others
      for (i = 0; i < x.length; i++) {
          if (x[i].className.indexOf(c) > -1) {
              x[i].style.display = "block";
          } else {
              x[i].style.display = "none";
          }
      }
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.querySelector(".filter-items");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
  var current = btnContainer.querySelector(".active-filter");
  if (current) {
    current.classList.remove("active-filter");
  }
  this.classList.add("active-filter");
});
}

// Ensure active filter class persists during scroll
window.addEventListener('scroll', function() {
var activeButton = btnContainer.querySelector(".active-filter");
if (activeButton) {
  activeButton.classList.add("active-filter");
}
});