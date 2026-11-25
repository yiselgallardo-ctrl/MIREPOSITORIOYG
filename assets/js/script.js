/*
|-----------------------------------------------------
| Template Name: Smart- Digital Agency & Creative Portfolio HTML Template
| Author: Themesfamily
| Developer: Themesfamily
| Version: 1.0.2
|-----------------------------------------------------
|-----------------------------------------------------
*/
/***************************************************
==================== JS ======================
****************************************************
01. PRELOADER JS
02. ATTACHMENT IMAGE JS
03.	STICKY HEADER JS
04. MOBILE MENU 
05. SCROLL MENU
06. BACK TO TOP
07. START CLIENT JS
08. WOW SCROLL
09. START COUNTER
10. LIGHTCASE JS
11. START JARALLAX JS
12. MAILCHAMP JS
13. START BLOG GALLERY JS 
14. START PARTNER JS 
15. START GALLERY JS 
****************************************************/

(function ($) {
    "use strict";
	
    /*--------------------------------------------------------------
	01.	PRELOADER JS
	--------------------------------------------------------------*/
	$(window).on('load', function() { 
		// Preloader
		setTimeout(function(){
			$('.atf_preloader').addClass('loaded');
		}, 1000);
	}); 
    /*--------------------------------------------------------------
	PRELOADER JS
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	02.	ATTACHMENT IMAGE JS
	--------------------------------------------------------------*/
    var bg = $(".atf_attach_bg");
    bg.css("background-image", function () {
        var attach = "url(" + $(this).data("background") + ")";
        return attach;
    });
    /*--------------------------------------------------------------
	03.	STICKY HEADER JS
	--------------------------------------------------------------*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
				$(".atf-sticky-header").removeClass("atf-sticky-active");
			} else {
				$('.atf-sticky-header').addClass('atf-sticky-active');
			}
    });
    /*--------------------------------------------------------------
	04.	MOBILE MENU 
	--------------------------------------------------------------*/
    var atfHamburger = $(".atf-mobile-menu-active > ul").clone();
    var atfHamburgerMenu = $(".atf-hamburger-menu nav");
    atfHamburgerMenu.append(atfHamburger);
    if ($(atfHamburgerMenu).find(".sub-menu").length != 0) {
        $(atfHamburgerMenu).find(".sub-menu").parent().append('<button class="atf-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var atfSidebarMenu = $(".atf-hamburger-menu nav > ul > li button.atf-menu-close, .atf-hamburger-menu nav > ul li.menu-item-children > a, .atf-hamburger-menu nav > ul > li.atf-nav-item > a");
    $(atfSidebarMenu).on("click", function (e) {
        console.log(e);
        e.preventDefault();
        if (!$(this).parent().hasClass("active")) {
            $(this).parent().addClass("active");
            $(this).siblings(".sub-menu").slideDown();
        } else {
            $(this).siblings(".sub-menu").slideUp();
            $(this).parent().removeClass("active");
        }
    });
	

    // Hamburger Js
    $(".atf-hamburger-toogle").on("click", function () {
        $(".atf-hamburger").addClass("atf-hamburger-open");
        $(".atf-hamburger-overlay").addClass("atf-hamburger-overlay-open");
		$("body").addClass("menu-open");
    });
		
    $(".atf-hamburger-close-toggle,.atf-hamburger-overlay").on("click", function () {
        $(".atf-hamburger").removeClass("atf-hamburger-open");
        $(".atf-hamburger-overlay").removeClass("atf-hamburger-overlay-open");
		$("body").removeClass("menu-open");
    });
	// Make Hamburger independently scrollable
	$(".atf-hamburger").on('wheel touchmove', function(e){
		e.stopPropagation(); // prevent Lenis from blocking
	});
	$(".atf-hamburger-menu nav > ul.atf-onepage-menu li a").on("click", function () {
        $(".atf-hamburger").removeClass("atf-hamburger-open");
        $(".atf-hamburger-overlay").removeClass("atf-hamburger-overlay-open");
    });


    /*--------------------------------------------------------------
	05.	SCROLL MENU
	--------------------------------------------------------------*/
    function scrollPage() {
        $(".atf-onepage-menu li a").on('click',function () {
            $(".atf-onepage-menu li a.active").removeClass("active");
            $(this).addClass("active");

            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $($(this).attr("href")).offset().top - 100,
                    },
                    300
                );
            return false;
        });
    }
    scrollPage();
	
    /*--------------------------------------------------------------
	06.	BACK TO TOP
	--------------------------------------------------------------*/
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {
			$('#back_to_top').addClass('active');
			$('.back_to_top').addClass('affix');
		} else {
			$('#back_to_top').removeClass('active');
			$('.back_to_top').removeClass('affix');
		}
	});

	/* --------------------------------------------------------
	07.	START CLIENT JS
	--------------------------------------------------------- */
	
	const $slider = $('.testimonial-slider');

    // Initialize slick
    $slider.slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true
    });

    // Avatar click handler
    $('.avatar').on('click', function(){
		const slideIndex = $(this).data('slide');
		$slider.slick('slickGoTo', slideIndex);
    });
	
	/* --------------------------------------------------------
	END CLIENT JS
	--------------------------------------------------------- */
	
    /* --------------------------------------------------------
	08.	WOW SCROLL
	--------------------------------------------------------- */
    var wow = new WOW({
        //disabled for mobile
        mobile: false,
    });

    wow.init();

	/* --------------------------------------------------------
	09. START COUNTER
	--------------------------------------------------------- */
	$('.counter-number').counterUp({
		delay: 15,
		time: 2000
	});
    /* --------------------------------------------------------
	10.	LIGHTCASE JS
	--------------------------------------------------------- */
    $("a[data-rel^=lightcase]").lightcase({
        transition: "elastic" /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */,
        swipe: true,
        maxWidth: 1170,
        maxHeight: 600,
    });
	/* --------------------------------------------------------
	11.	START JARALLAX JS
	--------------------------------------------------------- */
	$('.jarallax').jarallax({
	  speed: 0.3,
	});
   /* --------------------------------------------------------
	12. MAILCHAMP JS
	--------------------------------------------------------- */
	$("#mc-form").ajaxChimp({
		url: "https://themesfamily.us22.list-manage.com/subscribe/post?u=e056d9c3aeb53b20aff997467&amp;id=e307d7e1b8&amp;f_id=0012cee1f0",
		/* Replace Your AjaxChimp Subscription Link */
	});
	
	/* --------------------------------------------------------
	13. START BLOG GALLERY JS 
		--------------------------------------------------------- */
	$('.atf__blog_slider_active').slick({
		arrows: true,
		dots: false,
		autoplay:false,
		infinite: true,
		speed: 300,
		slidesToShow:1,
		slidesToScroll: 1,
		prevArrow: '<a class="slick-prev"><i class="fa-light fa-arrow-left" alt=" Icon"></i></a>',
		nextArrow: '<a class="slick-next"><i class="fa-light fa-arrow-right" alt="Icon"></i></a>',
	});
	/* --------------------------------------------------------
	END BLOG GALLERY JS 
	--------------------------------------------------------- */	
	/* --------------------------------------------------------
	14. START PARTNER JS 
		--------------------------------------------------------- */
	$('.atf__partner_slider_active').slick({
		arrows: false,
		dots: false,
		autoplay:false,
		infinite: true,
		speed: 300,
		slidesToShow:4,
		slidesToScroll: 4,
		prevArrow: '<a class="slick-prev"><i class="fa-light fa-arrow-left" alt=" Icon"></i></a>',
		nextArrow: '<a class="slick-next"><i class="fa-light fa-arrow-right" alt="Icon"></i></a>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	/* --------------------------------------------------------
	END PARTNER JS 
	--------------------------------------------------------- */
	/* --------------------------------------------------------
	15. START GALLERY JS 
		--------------------------------------------------------- */
	$('.atf__gallery_slider_active').slick({
		arrows: false,
		dots: true,
		autoplay:true,
		infinite: true,
		speed: 300,
		slidesToShow:4,
		slidesToScroll: 4,
		prevArrow: '<a class="slick-prev"><i class="fa-light fa-arrow-left" alt=" Icon"></i></a>',
		nextArrow: '<a class="slick-next"><i class="fa-light fa-arrow-right" alt="Icon"></i></a>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	/* --------------------------------------------------------
	END GALLERY JS 
	--------------------------------------------------------- */	
	
	
})(jQuery);
