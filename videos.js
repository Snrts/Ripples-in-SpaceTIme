function changeVideo(id) {
    const label = "#" + id + "vid"
    var v = $(label);
    if ($("#" + id).is(":checked")) {
        v.attr("src", "videos/" + id + "holo.mp4");
    } else {
        v.attr("src", "videos/" + id + ".mp4");
    }
}
