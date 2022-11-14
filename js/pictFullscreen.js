window.onload = () => {
    // (A) GET ALL IMAGES
    let all = document.getElementsByClassName("zoomE");
   
    // (B) CLICK TO GO FULLSCREEN
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        // (B1) EXIT FULLSCREEN
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
          if (document.exitFullscreen) { document.exitFullscreen(); }
          else { document.webkitCancelFullScreen(); }
        }
   
        // (B2) ENTER FULLSCREEN
        else {
          if (i.requestFullscreen) { i.requestFullscreen(); }
          else { i.webkitRequestFullScreen(); }
        }
      };
    }}
  };