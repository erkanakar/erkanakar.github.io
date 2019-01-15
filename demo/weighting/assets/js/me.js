$(window).ready(function(){
    for (let index = 1; index <= $('.post').length ; index++) {
        
        var sourceImage = document.getElementById(index);
    var colorThief = new ColorThief();
    var color = colorThief.getColor(sourceImage);
    document.getElementById("post-head-" + index ).style.backgroundColor = "rgb(" + color + ")";
    }
    // var sourceImage = document.getElementById("target");
    // var colorThief = new ColorThief();
    // var color = colorThief.getColor(sourceImage);
    // document.getElementById("post-head").style.backgroundColor = "rgb(" + color + ")";
    // $('.post-head').css('background-color', 'rgb(' + color + ')');
   });

   $('.mobile-icon').on('click', function() {
       $('.menu-row').toggleClass('blue');
       $('.mobile-menu').toggleClass('show');
   });

   $(window).scroll(function(){
       var scroll = $(window).scrollTop();
       if (scroll >= 150) {
           $('.menu-row').addClass("blue");
           console.log("erkan");
       }
       else {
           $('.menu-row').removeClass("blue");
       }
   });