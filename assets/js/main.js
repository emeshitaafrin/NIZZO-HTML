/*-----------------------------------------------------------------------------------
    Template Name: #
    Template URI: #
    Author:
    Author URI:  #
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Sticky Header
    ## Header Breakpoint Resize
    ## Counter Up
    ## Project Progress Bar
    ## Project Slider One
    ## Project Slider Two
    ## Team Slider
    ## Active Tooltip
    ## Image Block slider
    ## Preloader
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';


 

    // ===== Main Menu
    function mainMenu() {
        const navbarToggler = $('.nav-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-menu-panel'),
            mobilePanelMenu = $('.mobile-menu-panel .panel-menu'),
            navClose = $('.panel-close');

        // Navbar toggler
        navbarToggler.on('click', function (e) {
            e.preventDefault();

            navbarToggler.toggleClass('panel-opened');
            mobilePanel.toggleClass('panel-opened');
        });

        // Close icon
        navClose.on('click', function (e) {
            e.preventDefault();

            mobilePanel.removeClass('panel-opened');
            navbarToggler.removeClass('panel-opened');
        });

        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });

        mobilePanelMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });

        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.submenu').stop(true, true).slideToggle(350);
            $(this).toggleClass('submenu-opened')
        });
    };

    // ===== Sticky Header
    function stickyHeader() {
        let scroll_top = $(window).scrollTop(),
            siteHeader = $('.site-header'),
            offsetTop = siteHeader.outerHeight(),
            offsetTopAnimation = offsetTop + 150;

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top > offsetTopAnimation) {
                siteHeader.addClass('sticky-on');
            } else {
                siteHeader.removeClass('sticky-on');
            }
        }
    }

    // ===== Header Breakpoint Resize
    function headerBreakpointResize() {
        // Breakpoint Check
        const windowWidth = $(window).innerWidth(),
            navContainer = $('.navbar-wrapper'),
            breakpoint = 992;

        if (windowWidth <= breakpoint) {
            navContainer.addClass('breakpoint-on');
        } else {
            navContainer.removeClass('breakpoint-on');
        }

        // Header Height
        const siteHeader = $('.site-header');
        if (!siteHeader.hasClass('transparent-header')) {
            let newHeight = 0;
            siteHeader.removeAttr('style');
            newHeight = siteHeader.outerHeight();
            siteHeader.height(newHeight);
        }
    }
    /*---------------------
    === Document Ready  ===
    ----------------------*/

    $(document).ready(function () {
        mainMenu();
        headerBreakpointResize();
    });

    /* Download PDF */
    $(document).ready(function($)
    {
        $(document).on('click', '.btn-pdf', function(event)
        {
            event.preventDefault();

            var element = document.getElementById('pdfContent');

            var opt = {
                margin:       10,
                filename:     'product_details.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { dpi: 192, letterRendering: true },
                jsPDF:        { format: 'A4', orientation: 'p' }

            };

            // html2pdf($('div.node-content')[0], {
            //     filename:     'myReport.pdf',
            //     margin:       0,
            //     image:        { type: 'jpeg', quality: 0.98 },
            //     html2canvas:  { dpi: 192, letterRendering: true },
            //     jsPDF:        { format: 'a4', orientation: 'p' }
            // });

            

            // Avoid page-breaks on all elements, and add one before #page2el.
            html2pdf().set({
                pagebreak: { mode: 'avoid-all', before: '#page2el' }
            });
            
            // Enable all 'modes', with no explicit elements.
            html2pdf().set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            });
            
            // No modes, only explicit elements.
            html2pdf().set({
                pagebreak: { before: '.beforeClass', after: ['#after1', '#after2'], avoid: 'img' }
            });
            

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save(); 
        });
    });
      
    /*--------------------
    === Window Resize  ===
    --------------------*/
    $(window).on('resize', function () {
        headerBreakpointResize();
    });

    /*--------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });


    const swiper = new Swiper('.slider-hero', {
        speed: 1000,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        // autoplay: true,
        // autoplay: {
        //     delay: 7000,
        // },
  
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 992px
            640: {
                slidesPerView: 1,
                spaceBetween: 40
            }
        }
    });
    
    new Swiper('.slider-one', {
        speed: 800,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        // autoplay: true,
        // autoplay: {
        //     delay: 5000,
        // },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    
    new Swiper('.slider-two', {
        speed: 800,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });

    new Swiper('.slider-three', {
        speed: 800,
        loop: true,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        autoplay: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 40
        },
            // when window width is >= 992px
            992: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });
    
    new Swiper('.slider-four', {
        speed: 800,
        loop: true,
        spaceBetween: 50,
        grabCursor: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        allowTouchMove: true,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 50
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });


})(jQuery);
