(function ($) {
    'use strict';

    /*==================================
    // Sicky Headaer
    ==================================*/
    if ($(".header-sticky").length > 0) {
        var header_height = $(".header-sticky").height();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".header-sticky").addClass('fixedHeader animated slideInDown');
            } else {
                $(".header-sticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }

    /*==================================
    // mobile Menu 
    ==================================*/
    $(window).on("load", function (e) {
        $('.mobile_hamburger').on('click', function(e){
           e.preventDefault();
           $('.ar_navMenu').stop(true, true).slideToggle();
           $(this).toggleClass('active');
        });
     });

    /*============================================
    // Back to top button
    ==============================================*/
    var $backToTopBtn = $('.back-to-top');

    if ($backToTopBtn.length) {
        var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

        backToTop();

        $(window).on('scroll', function () {
            backToTop();
        });

        $backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*==================================
    // Funfact Countdown
    ==================================*/
    $(".countfact").appear();
    $(document.body).on("appear", ".countfact", function (e, $affected) {
        $affected.each(function () {
            var $this = $(this);
            if (!$this.hasClass("appeared")) {
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.attr("data-count")
                }, {
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="count-span">' + "$1" + "</span>" + "$2");
                            }
                        }
                        if ($this.hasClass("hasFraction")) {
                            var num = Math.abs(this.Counter);
                            num = num.toFixed(1).toString();
                        }
                        $(".counter", $this).html(num);
                    },
                });
                $this.addClass("appeared");
            }
        });
    });


    /*==================================
    * Blog Carousel
    ==================================*/
    var blogSlider = new Swiper(".ar_blog_slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3100,
            disableOnInteraction: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    });

    var overlay = $('.offcanvas-overlay'),
        panel = $('.offcanvas-wrapper'),
        panelclose = $('.offcanvas-close'),
        navToggle = $('.offcanvas-trigger');

    // Open the sidebar
    navToggle.on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('is-closed').addClass('is-opened');
        panel.addClass('active');
        overlay.addClass('show');
    });

    // Close the sidebar when the close button is clicked
    panelclose.on('click', function () {
        panel.removeClass('active');
        overlay.removeClass('show');
        navToggle.removeClass('is-opened').addClass('is-closed'); // Reset toggle button state
    });

    // Close the sidebar when clicking outside
    $(document).on('click', function (event) {
        if ((!$(event.target).closest(navToggle).length) && (!$(event.target).closest(panel).length)) {
            panel.removeClass('active');
            overlay.removeClass('show');
            navToggle.removeClass('is-opened').addClass('is-closed'); // Reset toggle button state
        }
    });




})(jQuery);