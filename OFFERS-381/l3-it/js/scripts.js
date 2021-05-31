$(document).ready(function() {

	/* lazy load */
	new LazyLoad();
	
 

	//модель в форму
	$('.product_item .button').on('click', function(){
		var prodName = $(this).siblings('.vendor_code').text();
		var proddescription = $(this).siblings('.vendor_description').text();
		$("h3").text(prodName);
		$(".description").html(proddescription);
	});


	$('.popup-btn').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
	});

	/* sliders */

	$(".slider").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});

	$(".reviews_list").owlCarousel({
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		navText: "",
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: true,
				loop: true
			},
			660: {
				items: 2,
				margin: 20,
				nav: true,
				loop: true
			},
			1170: {
				items: 4,
				margin: 20,
				nav: false,
				loop: false
			}
		}
	});

});