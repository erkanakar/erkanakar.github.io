function focusBox() {
    $(".case").on("mouseover", function(){
        $(".case").not(this).css("padding", "2em 1.5em");
        $(this).css("padding", "1.25em .75em");
    });
    $(".case").on("mouseout", function(){
        $(".case").css("padding", "1.5em 1em");
    });
}


jQuery(document).ready(focusBox);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function MenuScroll() {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            $(".navbar").css({
                background: "#8dadb1",
            });
        } else {
            $(".main-menu").css({
                background: "none"
            });
        }
    });

}
jQuery(document).ready(MenuScroll);