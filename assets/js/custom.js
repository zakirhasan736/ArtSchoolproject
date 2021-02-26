(function ($) {
    "use strict";
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
      });
    /* -----------------------------------
	      	1. preloader
	     ----------------------------------- */

    $(window).on('load', function () {
        $("#preloader").delay(1000).addClass('loaded');
  
    });
      /* -----------------------------------
	           8. Isotope
	         ----------------------------------- */
             var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item'
                }
            })
                /* -----------------------------------
               9. MagnificPopup
    ----------------------------------- */
    $('#gellary').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.heroslide-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay:true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          
        ]
    });
    $('.testimonials-items-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay:true,
        asNavFor: '.testimonials-nav'
    });
    $('.testimonials-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonials-items-active',
        dots: false,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0
    });
        /*-------------------------------------
     Background function
     -------------------------------------*/
     $.fn.theme_background_image = function() {
        $(this).each(function() {
            var url = $(this).attr('data-image');
            if(url){
                $(this).css('background-image', 'url(' + url + ')');
            }
        });
    };
    $('.theme-bg-img').theme_background_image();

})(jQuery);