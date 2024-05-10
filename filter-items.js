// Apply filtering logic when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    filterItem('all'); // Filter initially by 'all' category
});

function filterItem(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") {
        // If 'all' category is selected, show all items
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
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


// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
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



