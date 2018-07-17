/**
  * isMobile
  * flatRetinaLogo
  * flatAccordion
  * countDown
  * flatCounter
  * goTop
  * parallax
  * removePreloader
  * flatPrice
  * flatFilterBox
  * flatShopSearch
  * topSearch
  * flexProduct
  * quantityNumber
  * flatTabs
  * flatImagePopup
  * flatVideoPopup
  * flatEffectDir
  * flatIsotope
  * flatCarouselOwl
  * searchIcon
  * headerFixed
  * responsiveMenu
  * flatEqualHeight
  * flatContentBox
  * swClick
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var flatRetinaLogo = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
        var $logo = $('#logo img');
        var $logo_retina = $logo.data('retina');

        if ( retina && $logo_retina ) {
            $logo.attr({
                src: $logo.data('retina'),
                width: $logo.data('width'),
                height: $logo.data('height')
            });
        }
    };

    var flatAccordion = function() {
      var speed= {duration: 600};
      $('.toggle-content').hide();
      $('.flat-accordion .toggle-title.active').siblings('.toggle-content').show();

      $('.flat-accordion .toggle-title').on('click', function(){
        if(!$(this).is('.active')) {
          $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(speed);
          $(this).toggleClass('active');
          $(this).next().slideToggle(speed);
        }else {
          $(this).toggleClass('active');
          $(this).next().slideToggle(speed);
        }
      });
    };

    var countDown = function() {
        var before = '<div class="square"><div class="numb">',
            text = '</div><div class="text">';
            if ($().countdown) {
                $(".countdown").countdown('2018/6/22', function(event) {
                  $(this).html(event.strftime(before + '%D' + text + 'Days</div></div>' + before + '%H' + text + 'Hours</div></div>' + before + '%M' + text + 'Minutes</div></div>' + before + '%S' + text + 'Seconds</div>'));
                });
            }      
    };

    var flatCounter = function() {       
        $('.flat-counter').on('on-appear', function() {             
            $(this).find('.numb-count').each(function() { 
                var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
       });
    }; 

    var googleMap = function () {
        // gmap default
        if ($().gmap3) {
            var data = JSON.parse('[{"address":"515 Crescent St, Brooklyn, NY 11208","content":""}]');
            $(".flat-map")
                .gmap3({
                    map: {
                        options: {
                            zoom: 17,
                            center: [40.6749633,-73.8699887,18.75],
                            mapTypeId: 'Modaz',
                            mapTypeControlOptions: {
                                mapTypeIds: ['Modaz', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                            },
                            scrollwheel: true
                        },
                    },
                });

        }
        // json loop
        $.each(data, function (key, val) {
            $('.flat-map').gmap3({
                marker: {
                    values: [{
                        address: val.address,
                        options: {
                            icon: "./images/maps/map_icon.png"
                        },
                        events: {
                            mouseover: function () {
                                $(this).gmap3({
                                    overlay: {
                                        address: val.address,
                                        options: {
                                            content: "<div class='infobox'><p>203, Envato Labs, Behind Alis Steet</p><div class='clearfix'></div></div>",
                                            offset: {
                                                y: 32,
                                                x: -19

                                            }
                                        }
                                    }
                                });
                            },
                            mouseout: function () {
                                $('.infobox').each(function () {
                                    $(this).remove();
                                });
                            }
                        }
                        }]
                },
                styledmaptype: {
                    id: "Modaz",
                    options: {
                        name: "Modaz"
                    },
                    styles: [
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e9e9e9"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dedede"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#333333"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        }
                    ]
                }
            });
        });
    };

    var goTop = function() {
      $(window).scroll(function() {
          if ( $(this).scrollTop() > 800 ) {
              $('.go-top').addClass('show');
          } else {
              $('.go-top').removeClass('show');
          }
      }); 

      $('.go-top').on('click', function() {            
          $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
          return false;
      });
    };

    var parallax = function(){
      if( $().parallax && isMobile.any() == null ){
        $('.parallax1').parallax("50%", 1);
        $('.parallax2').parallax("50%", 0.7);
      }
    };

    var removePreloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
            $(this).remove();
            }); 
      });
    };

    var flatPrice = function() {
        if( $().slider ) {
            $( function() {
                $( "#slide-range" ).slider({
                  range: true,
                  min: 0,
                  max: 2900,
                  values: [ 0, 2900 ],
                  slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + ".00" + " - " + "$" + ui.values[ 1 ] + ".00" );
                  }
                });
                $( "#amount" ).val( $( "#slide-range" ).slider( "values", 0 ) + "$" + " - " + $( "#slide-range" ).slider( "values", 1 ) + "$" );
            });
        }
    };

    var flatFilterBox = function(){
        $('.box-filter').hide();
        $('.show-filter').on('click',function(){
            $('.box-filter').slideToggle(1000);
            $('.filter-shop li.filter-list').toggleClass('active');
            $(this).toggleClass('active');
        });
        $('.box-filter .btn-close').on('click',function(){
            $('.box-filter').slideToggle(1000);
            $('.show-filter').removeClass('active');
            $('.filter-shop li.filter-list').removeClass('active');
        });
    };

    var flatShopSearch = function(){
        $('.shop-search').hide();
        $('.search-product').on('click',function(){
            $('.shop-search').slideToggle(1000);
            $(this).toggleClass('active');
        });
    };

    var topSearch = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.top-search').removeClass('show');                
            } 
        });

        $('.search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.search').on('click', function (event) {
            if(!$('.top-search').hasClass( "show" )) {
                $('.top-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.top-search').removeClass('show');
                event.preventDefault();

        }); 
        $('.top-search .close').on('click', function(event){
            if($('.top-search').hasClass( "show" )) {
                $('.top-search').removeClass('show');  
                event.preventDefault();                
            }
        });        
  
    };

    var flexProduct = function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    }; 

    var quantityNumber = function(){
        $('.quantity-button').on('click', function(){
            var numberValue= $(this).parent().find('.quantity-number').val();

            if($(this).text()=="+") {
                var newVal=parseFloat(numberValue) + 1;
            }else{
                if(numberValue > 0){
                    var newVal = parseFloat(numberValue) -1;
                }else{
                    newVal = 0;
                }
            }

            $(this).parent().find('.quantity-number').val(newVal);
        });
    };

    var flatTabs=function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
            });
        });
    };

    var flatImagePopup = function(){
        if($().magnificPopup) {
            $('.flat-icon').each(function(){
                $(this).find('.zoom-popup').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        };
    };

    var flatVideoPopup = function() {
        if ( $().magnificPopup ) {
            $('.popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        };
    };

    var flatEffectDir = function(){
        if($().hoverdir){
            $('.data-effect').each(function(){
                $(this).find('.data-effect-item').hoverdir({
                    hoverDelay: 15,
                    hoverElem: '.overlay-effect'
                })
            })
        };
    };

    var flatIsotope = function() {
        if($().isotope) {
            var $container = $('.isotope-product');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.product-item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.flat-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.flat-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    }; 

    var flatCarouselOwl = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var searchIcon = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.header-search-form').removeClass('show');                
            } 
        });

        $('.header-search-icon').on('click', function(event){
            event.stopPropagation();
        });

        $('.header-search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.header-search-icon').on('click', function (event) {
            if(!$('.header-search-form').hasClass( "show" )) {
                $('.header-search-form').addClass('show'); 
                event.preventDefault();                
            }
                
            else
                $('.header-search-form').removeClass('show');
                event.preventDefault();

        });     
  
    };  

    var headerFixed = function(){
        if($('body').hasClass('header_sticky')){
            var nav = $('#header');

            if( nav.length ){
                var offsetTop = nav.offset().top,
                headerHeight = nav.height(),
                injectSpace = $('<div/>', {
                    height: headerHeight
                }).insertAfter(nav);

                $(window).on('load scroll', function(){
                    if($(window).scrollTop() > offsetTop){
                        nav.addClass('is-fixed');
                        injectSpace.show();
                    }else {
                        nav.removeClass('is-fixed');
                        injectSpace.hide();
                    }

                    if($(window).scrollTop() > 300 ) {
                        nav.addClass('is-small');
                    }else {
                        nav.removeClass('is-small');
                    }
                });
            }
        };
    };

    var responsiveMenu = function() {

        var menuType = 'desktop';



        $(window).on('load resize', function() {

            var currMenuType = 'desktop';



            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {

                currMenuType = 'mobile';

            }



            if ( currMenuType !== menuType ) {

                menuType = currMenuType;



                if ( currMenuType === 'mobile' ) {

                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();

                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');



                    $('#header #site-header-inner').after($mobileMenu);

                    hasChildMenu.children('ul').hide();

                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');

                    $('.btn-menu').removeClass('active');

                } else {

                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');



                    $desktopMenu.find('.submenu').removeAttr('style');

                    $('#header').find('.nav-wrap').append($desktopMenu);

                    $('.btn-submenu').remove();

                }

            }

        });



        $('.mobile-button').on('click', function() {         

            $('#mainnav-mobi').slideToggle(300);

            $(this).toggleClass('active');

        });



        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {

            $(this).toggleClass('active').next('ul').slideToggle(300);

            e.stopImmediatePropagation()

        });

    };

    var flatEqualHeight = function() {
        $(window).on("load resize", function(){
            setTimeout(function(){
                $(document).imagesLoaded(function(){
                    if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                        $('.equal').equalize({equalize: 'outerHeight', reset: true});
                        $('.equal.sm-equal-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                        $('.equal').equalize({equalize: 'outerHeight', reset: true});
                        $('.equal.sm-equal-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                        $('.equal').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    } else {
                        $('.equal').equalize({equalize: 'outerHeight', reset: true});
                    }
                });
            },500);
        });
    };

    var flatContentBox = function(){
        $(window).on('load resize', function(){
            var mode = 'desktop';

            if(matchMedia(' only screen and (max-width: 991px').matches){
                mode = 'mobile';
            }

            $('.flat-content-box').each(function(){
                var margin = $(this).data('margin');

                if( margin ){
                    if(mode == 'desktop') {
                        $(this).attr('style','margin:'+ $(this).data('margin'))
                    }else if( mode == 'mobile') {
                        $(this).attr('style','margin' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var swClick = function () {
        function activeLayout () {
            $(".switcher-container" ).on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');  
                $('body').css({'background': '#f6f6f6' });                
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "z-index": "10"});
            }).on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({'background': '#fff' });
                return false;
            })       
        }        

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout(); 
        activePattern();
    }; 
    
   	// Dom Ready
	$(function() {
      removePreloader();
      goTop();
      parallax(); 
      flatRetinaLogo();
      searchIcon();
      headerFixed();
      responsiveMenu();
      swClick();
      flatEqualHeight();
      flatAccordion();
      countDown();
      flatCounter();
      googleMap();
      flatPrice();  
      flatFilterBox(); 
      flatShopSearch();
      topSearch();
      flexProduct(); 
      quantityNumber(); 
      flatTabs();
      flatImagePopup();
      flatVideoPopup(); 
      flatEffectDir();
      flatIsotope();
      flatCarouselOwl();
      flatContentBox();
   	});
})(jQuery);