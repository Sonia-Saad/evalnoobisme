//tentative 1 (ou 21579640252540) fonction change background image 
var image1 = images("src" / Annexes / background.jpg);
var image2 = images("src" / Annexes / background.jpg);


function changeImage(image2) {
    var image2 = $("/Annexes/background.jpg");
    myimage.attr('src' /Annexes/traffic.png );

    setTimeout(function () {

        change_background('/Annexes/traffic.png');

    }, 2000);

    //tentative bis
var image = document.getElementById("image");

image.addEventListener('mouseover', function () {
    image.src = "/Annexes/traffic.png"
    })
    image.addEventListener('mouseout', function () {
        image.src = "/Annexes/background.jpg"
    })
  