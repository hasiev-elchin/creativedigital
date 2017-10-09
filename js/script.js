;(function ($) {
	$('.works__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	$('.team__slider-cont').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	var map,
		pointPin = {lat: -7.926579, lng: 112.637335},
		pointCenter = {lat: -7.935560, lng: 112.632655};

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: pointCenter,
			zoom: 15,
			disableDefaultUI: false,
			scrollwheel: false
		});
		var image = {
			url: 'img/pin.png'
		};
		var marker = new google.maps.Marker({
			position: pointPin,
			map: map,
			icon: image
		});
	}

	$(document).ready(function(){
		$(".main-nav").on("click","a", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),

				top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 1000);
		});
	});

	$('.scroll-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	initMap();
})(jQuery);