// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




// gpt

// document.addEventListener("DOMContentLoaded", function() {
//     // Get all elements with the class name "myImg"
//     var images = document.getElementsByClassName('myImg');
    
//     // Get the modal
//     var modal = document.getElementById('myModal');

//     // Get the modal content elements
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     // Loop through each image
//     for (var i = 0; i < images.length; i++) {
//         // Add an onclick event handler to each image
//         images[i].onclick = function(){
//             // Display the modal
//             modal.style.display = "block";

//             // Set the source and alt text of the clicked image to the modal content
//             modalImg.src = this.src;
//             captionText.innerHTML = this.alt;
//         }
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//     }
// });

