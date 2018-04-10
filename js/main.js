$(document).ready(function(){
	$('body').scrollspy({ target: '.nav', offset: 150 });
	new WOW().init();
	// Carousel
	var carousel = $("#carousel").waterwheelCarousel({
		flankingItems: 1,
		separation: 230,
		speed: 600
	});

	$("#carousel").on("swipeleft", function(){

		carousel.next();
		alert('left');
	});
	$("#carousel").on("swiperight", function(){

		carousel.prev();
		alert('right');
	});

	// Burder
	$('.navbar-toggler').click(function(){
		if ( $(window).scrollTop() >= $('.cover').outerHeight() || $(this).hasClass('open') || $(window).outerHeight() <= 420 && $(window).outerWidth() <= 680 ||  $(window).outerHeight() <= 500 && $(window).outerWidth() <= 350 ) {
			$(this).toggleClass('open');
			$('.nav').slideToggle();
		}
	});

	// Anim scroll
	$("#menu").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),

		top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top - 100
		}, 1500);
	});

	$('.cover_scroll img').click(function() {
		$('body,html').animate({
			scrollTop: $('#about').offset().top - 100
		}, 600);
	})

	// Fixed logic header
	var h_hght = $('.cover').outerHeight();
	var h_nav = $('header').outerHeight();
	var top = $(window).scrollTop();
	$(window).resize(function() {
		h_hght = $('.cover').outerHeight();
		h_nav = $('header').outerHeight();
	})
	$(window).scroll(function() {
		top = $(this).scrollTop();
		if ((h_hght - top) <= 0) {
			$('header').css({
				'top': '0',
				'bottom': 'initial'
			});
		} else if (top < h_hght && top > 0) {
			$('header').css({
				'bottom': top,
				'top': 'initial'
			});
			$('.navbar-toggler.open').click();
		} else if (top < h_nav) {
			$('header').css({
				'top': 'initial',
				'bottom': '0'
			});
		}
	});
	if ((h_hght - top) <= 0) {
			$('header').css({
				'top': '0',
				'bottom': 'initial'
			});
		} else if (top < h_hght && top > 0) {
			$('header').css({
				'bottom': top,
				'top': 'initial'
			});
		} else if (top < h_nav) {
			$('header').css({
				'top': 'initial',
				'bottom': '0'
			});
		}

	// Menu
	$('.order_options .order_options__type').click(function() {
		var target = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		$('.order_dishes[data-target="'+target+'"]').addClass('active').siblings().removeClass('active');
		console.log($('.order_dishes[data-target="'+target+'"]'));
	})
	
})

// Map
function initMap() {
	var uluru = {
		lat: 50.4698301,
		lng: 30.4619096
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru,
		mapTypeId: 'roadmap',
		styles: [{
			elementType: 'geometry',
			stylers: [{
				color: '#242f3e'
			}]
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [{
				color: '#242f3e'
			}]
		},
		{
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#746855'
			}]
		},
		{
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#d59563'
			}]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#d59563'
			}]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{
				color: '#263c3f'
			}]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#6b9a76'
			}]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{
				color: '#38414e'
			}]
		},
		{
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [{
				color: '#212a37'
			}]
		},
		{
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#9ca5b3'
			}]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{
				color: '#746855'
			}]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{
				color: '#1f2835'
			}]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#f3d19c'
			}]
		},
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{
				color: '#2f3948'
			}]
		},
		{
			featureType: 'transit.station',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#d59563'
			}]
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{
				color: '#17263c'
			}]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#515c6d'
			}]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{
				color: '#17263c'
			}]
		}
		]
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

    /*    var menu_selector = "#menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
        function onScroll() {
            var scroll_top = $(document).scrollTop();
            $(menu_selector + " a").each(function() {
                var hash = $(this).attr("href");
                var target = $(hash);
                if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                    $(menu_selector + " a.active").removeClass("active");
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });
        }
        $(document).ready(function() {
            $(document).on("scroll", onScroll);
            $("a[href^=#]").click(function(e) {
                e.preventDefault();
                $(document).off("scroll");
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
                var hash = $(this).attr("href");
                var target = $(hash);
                $("body, html").animate({
                    scrollTop: target.offset().top
                }, 1200, function() {
                    window.location.hash = hash;
                    $(document).on("scroll", onScroll);
                });
            });
        });*/