$(document).ready(function () {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-box").addClass("active");
        }
        else {
            $(".header-box").removeClass("active");
        }
    });
});
