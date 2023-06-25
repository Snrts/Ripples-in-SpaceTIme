function changeVideo(id) {
    const label = "#" + id + "vid"
    var v = $(label);
    if ($("#" + id).is(":checked")) {
        v.attr("src", "videos/" + id + "holo.mp4");
    } else {
        v.attr("src", "videos/" + id + ".mp4");
    }
}

function toggleplay(id) {
    const code = id.replace("play","");
    const button = document.getElementById(id);
    const video = document.getElementById(code + "vid");
    if (video.paused || video.ended) {
        button.innerHTML = '<div class="border-x-4 w-3  border-themeorange h-4"></div>';
        video.play();
    } else {
        button.innerHTML = '<svg class="w-5 h-5 pl-0.5" viewBox="0 0 24 24" fill="none" stroke="#E79B25" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
        video.pause();
    }
}

function goFullscreen(id) {
    const code = id.replace("full","");
    var element = document.getElementById(code+"vid");       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }  
  }