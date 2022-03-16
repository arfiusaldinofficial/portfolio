(function($) {
    'use strict';


    jQuery(document).ready(function() {

        /*----------------------------------------------------*/
        /* Preloader 
        /*----------------------------------------------------*/

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.loader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


        /*----------------------------------------------------*/
        /* Portoflio Popup
        /*----------------------------------------------------*/

        var lightboxInlineIframe = GLightbox({
            selector: '.glightbox'
        });

        /*----------------------------------------------------*/
        /* Testimonial Slider
        /*----------------------------------------------------*/
        $('#testimonial-list').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            nav: false,
            dots: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 2,
                }
            }
        })

        /*----------------------------------------------------*/
        /* MixitUp 
        /*----------------------------------------------------*/

        $('.portfolio-list').mixItUp();

        /*----------------------------------------------------*/
        /* CHANGE MENU BACKGROUND
        /*----------------------------------------------------*/

        var headertopoption = $(window);
        var headTop = $('.header.fixed-top');

        headertopoption.on('scroll', function() {
            if (headertopoption.scrollTop() > 80) {
                headTop.addClass('menu-stick-bg');
            } else {
                headTop.removeClass('menu-stick-bg');
            }
        });


        /*----------------------------------------------------*/
        /* SMOTH SCROLL
        /*----------------------------------------------------*/

        $('a.nav-link').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /*----------------------------------------------------*/
        /* NAV BAR COLOSE
        /*----------------------------------------------------*/
        $(".navbar-nav a").on('click', function() {
            $(".navbar-collapse").removeClass("show");
        });
        



    })

})(jQuery);