/*==================================
* Strech Image 
==================================*/
// function zc_stretch() {
//     var windowWidth = window.innerWidth;

//     // Apply stretch logic only if the window width is greater than 1921px
//     if (windowWidth < 1921) {
//         document.querySelectorAll(".row .zc_stretch-element-inside-column").forEach(function (element) {
//             console.log('hello');
//             var row = element.closest(".row");
//             var cols = element.closest('[class^="col-"]');
//             var colsHeight = cols.offsetHeight;

//             var rect = element.getBoundingClientRect();
//             var rowRect = row.getBoundingClientRect();
//             var colsRect = cols.getBoundingClientRect();

//             var elementLeft = rect.left;
//             var elementRight = rect.right;
//             var rowLeft = rowRect.left + (parseFloat(getComputedStyle(row).paddingLeft) || 0);
//             var rowRight = windowWidth - rowRect.right + (parseFloat(getComputedStyle(row).paddingRight) || 0);

//             var colsLeft = colsRect.left;
//             var colsRight = windowWidth - colsRect.right;

//             var styles = {
//                 "marginLeft": "0px",
//                 "marginRight": "0px"
//             };

//             if (Math.round(rowLeft) === Math.round(colsLeft)) {
//                 var marginLeft = parseFloat(getComputedStyle(element).marginLeft) || 0;
//                 styles.marginLeft = (marginLeft - elementLeft) + "px";
//             }

//             if (Math.round(rowRight) === Math.round(colsRight)) {
//                 var marginRight = parseFloat(getComputedStyle(element).marginRight) || 0;
//                 styles.marginRight = (marginRight - (windowWidth - elementRight)) + "px";
//             }

//             Object.assign(element.style, styles);
//         });
//     } else {
//         // Reset styles when width is 1920px or below
//         document.querySelectorAll(".row .zc_stretch-element-inside-column").forEach(function (element) {
//             element.style.marginLeft = "";
//             element.style.marginRight = "-315px";
//         });
//     }
// }
// zc_stretch();
// window.addEventListener('resize', zc_stretch);

// /*==================================
// * Sicky Headaer
// ==================================*/
// window.addEventListener("scroll", function () {
//     const scrollBar = window.scrollY;
//     const headers = document.querySelectorAll(".header-sticky");

//     headers.forEach(header => {
//         if (scrollBar > 150) {
//             header.classList.add("sticky-on");
//         } else {
//             header.classList.remove("sticky-on");
//         }
//     });
// });

// /*==================================
// * Banner Carousel
// ==================================*/
// var zcFeedbackSlide = new Swiper(".zc_feedback_slider", {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: ".feedback-button-next",
//         prevEl: ".feedback-button-prev",
//     },
//     autoplay: {
//         delay: 3100,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 15
//         },
//         576: {
//             slidesPerView: 1,
//             spaceBetween: 20
//         },
//         768: {
//             slidesPerView: 1,
//             spaceBetween: 20
//         },
//         992: {
//             slidesPerView: 2,
//             spaceBetween: 24
//         },
//     }
// });

(function ($) {
    'use strict';

    // Funfact Countdown
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
    
})(jQuery);