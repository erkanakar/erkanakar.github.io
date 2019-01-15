   $(window).scroll(function () {
       var scroll = $(window).scrollTop();
       if (scroll >= 150) {
           $('.menu-row').addClass("white");
       } else {
           $('.menu-row').removeClass("white");
       }
   });

   $(document).ready(function () {
       $(".mobile-icon").on('click', function () {
           $('.menu-row').toggleClass("blue");
           $('.mobile-menu').toggleClass("show");
       });
   });