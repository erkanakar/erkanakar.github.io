$(window).ready(function () {
    for (let index = 1; index <= $('.post').length; index++) {

        var sourceImage = document.getElementById(index);
        var colorThief = new ColorThief();
        var color = colorThief.getColor(sourceImage);
        document.getElementById("post-head-" + index).style.backgroundColor = "rgb(" + color + ")";
    }
});

$('.mobile-icon').on('click', function () {
    $('.menu-col').toggleClass('height');
    $('.menu').toggleClass('show');
});