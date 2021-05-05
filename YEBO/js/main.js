$(document).ready(function(){
	$('.menu_icon').click(function(){
		$(this).toggleClass('active');
		$('.menu_body').toggleClass('active');
		$('body').toggleClass('lock');


	});



});

$(document).ready(function(){

	$('.slider_body').slick({
		dots:true,
		arrows:false,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed:3000,
		adaptiveHeight:true,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		
	});



});