document.addEventListener("DOMContentLoaded", loadImages, true);
 
var images = new Array(3), imageNum = 0;
 
function loadImages() {
    for (var i = 0; i < images.length; i++) {
        images[i] = new Image();
        images[i].addEventListener("load", trackProcess, true);
        images[i].src = "images/01.jpg";
    }
}
 
function trackProcess() {
    imageNum++;
    if (imageNum = images.length) {
        drawImages();
    }
}
 
function drawImages() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    for (var i = 0; i < images.length; i++) {
        context.drawImage(images[i], 200 * i, 0);
    }
}