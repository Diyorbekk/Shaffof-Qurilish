$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-box").addClass("active");
        } else {
            $(".header-box").removeClass("active");
        }
    });

    $('.accordion-application').on('click', function () {
        $(this).toggleClass("bg-white bg-light-grey-F4");
        $(this).toggleClass("border-bottom border-0");
        $(this).find("i").toggleClass("icon-minus icon-plus");
        $(this).find("h4").css("border-bottom", "none");
        $(this).parent().find('.accordion-block').slideToggle();
    });


    $('.first-menu-link').on('click', function () {
        if ($('.two-menu').show() && $('.three-menu').show() && $('.four-menu').show() && $('.five-menu').show()) {
            $(".two-menu,.three-menu,.four-menu,.five-menu").hide('fast');
        }
        $('.two-menu-link,.three-menu-link,.four-menu-link,.five-menu-link').removeClass('active');
        $('.first-menu-link').addClass('active');
        $('.first-menu').show('fast');
        $('.header-menu').show('fast').addClass('border-top');
    });

    $('.two-menu-link').on('click', function () {
        if ($('.first-menu').show() && $('.three-menu').show() && $('.four-menu').show() && $('.five-menu').show()) {
            $(".first-menu,.three-menu,.four-menu,.five-menu").hide('fast');
        }
        $('.first-menu-link,.three-menu-link,.four-menu-link,.five-menu-link').removeClass('active');
        $('.two-menu-link').addClass('active');
        $('.two-menu').show('fast');
        $('.header-menu').show('fast')
    });

    $('.three-menu-link').on('click', function () {
        if ($('.first-menu').show() && $('.two-menu').show() && $('.four-menu').show() && $('.five-menu').show()) {
            $(".first-menu,.two-menu,.four-menu,.five-menu").hide('fast');
        }
        $('.first-menu-link,.two-menu-link,.four-menu-link,.five-menu-link').removeClass('active');
        $('.three-menu-link').addClass('active');
        $('.three-menu').show('fast');
        $('.header-menu').show('fast')
    });

    $('.four-menu-link').on('click', function () {
        if ($('.first-menu').show() && $('.two-menu').show() && $('.three-menu').show() && $('.five-menu').show()) {
            $(".first-menu,.two-menu,.three-menu,.five-menu").hide('fast');
        }
        $('.first-menu-link,.two-menu-link,.three-menu-link,.five-menu-link').removeClass('active');
        $('.four-menu-link').addClass('active');
        $('.four-menu').show('fast');
        $('.header-menu').show('fast')
    });

    $('.five-menu-link').on('click', function () {
        if ($('.first-menu').show() && $('.two-menu').show() && $('.three-menu').show() && $('.four-menu').show()) {
            $(".first-menu,.two-menu,.three-menu,.four-menu").hide('fast');
        }
        $('.first-menu-link,.two-menu-link,.three-menu-link,.four-menu-link').removeClass('active');
        $('.five-menu-link').addClass('active');
        $('.five-menu').show('fast');
        $('.header-menu').show('fast')
    });

    /* Map Function Start */
    $('.TT').on('click', function () {
        $('.TT').addClass('active').attr("popover");
        $('.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.UG').removeClass('active');

    });

    $('.TV').on('click', function () {
        $('.TV').addClass('active');
        $('.TT,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.NS').on('click', function () {
        $('.NS').addClass('active');
        $('.TT,.TV,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.NM').on('click', function () {
        $('.NM').addClass('active');
        $('.TT,.TV,.NS,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.AN').on('click', function () {
        $('.AN').addClass('active');
        $('.TT,.TV,.NS,.NM,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.BH').on('click', function () {
        $('.BH').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.FG,.JZ,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.FG').on('click', function () {
        $('.FG').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.JZ,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.JZ').on('click', function () {
        $('.JZ').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.NA,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.NA').on('click', function () {
        $('.NA').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.KD,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.KD').on('click', function () {
        $('.KD').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.SD,.SI,.UG,.SA').removeClass('active');
    });

    $('.SD').on('click', function () {
        $('.SD').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SI,.UG,.SA').removeClass('active');
    });

    $('.SI').on('click', function () {
        $('.SI').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.UG,.SA').removeClass('active');
    });

    $('.UG').on('click', function () {
        $('.UG').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.SA').removeClass('active');
    });

    $('.SA').on('click', function () {
        $('.SA').addClass('active');
        $('.TT,.TV,.NS,.NM,.AN,.BH,.FG,.JZ,.NA,.KD,.SD,.SI,.UG').removeClass('active');
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    /* Map Function End */


    /* Animation Number Function Start */

    $(document).ready(function () {
        var $animation = $('.appeals-box-insurance-animation-number');
        var animDuration = 1000;


        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');

                        $({countNum: $this.text()}).animate({
                                countNum: countTo
                            },

                            {

                                duration: 2000,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                                }

                            });
                    });


                }
            });

        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    });

    /* Animation Number Function End */



    $(document).click(function (e) {

        if (!$(e.target).hasClass("first-menu-link")
            && $(e.target).parents(".first-menu").length === 0) {
            $(".first-menu").hide();
        }
        if (!$(e.target).hasClass("two-menu-link")
            && $(e.target).parents(".two-menu").length === 0) {
            $(".two-menu").hide();
        }

        if (!$(e.target).hasClass("three-menu-link")
            && $(e.target).parents(".three-menu").length === 0) {
            $(".three-menu").hide();
        }

        if (!$(e.target).hasClass("four-menu-link")
            && $(e.target).parents(".four-menu").length === 0) {
            $(".four-menu").hide();
        }

        if (!$(e.target).hasClass("five-menu-link")
            && $(e.target).parents(".five-menu").length === 0) {
            $(".five-menu").hide();
        }
    });

    $(document).click(function (e) {
        e.preventDefault();
        if ($('.first-menu').css('display') === 'none' && $('.two-menu').css('display') === 'none' && $('.three-menu').css('display') === 'none' && $('.four-menu').css('display') === 'none' && $('.five-menu').css('display') === 'none') {
            $(".header-menu").hide(0);
            $('.first-menu-link,.two-menu-link,.three-menu-link,.four-menu-link,.five-menu-link').removeClass('active');
        }
        if ($('.first-menu').css('display') === 'block' && $('.two-menu').css('display') === 'block' && $('.three-menu').css('display') === 'block' && $('.four-menu').css('display') === 'block' && $('.five-menu').css('display') === 'block') {
            $('.header-menu').addClass('border-top');

        }

    });



});
