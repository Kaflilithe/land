$(document).ready(function() {
	$('[name="country"]').on('change', function() {/*
		var geoKey = $(this).find('option:selected').val();
		var data = $jsonData.prices[geoKey];
		var price = data.price;
		var oldPrice = data.old_price;
		var currency = data.currency
		$("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

		$('.price_land_s1').text(price);
		$('.price_land_s2').text(oldPrice);
		$('.price_land_curr').text(currency);
	*/});

	initializeClock('timer', getDayEnd());

	lastpack(2, 60, 'lastpack');

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$(".reviews_list").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});
});