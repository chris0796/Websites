$(document).ready(function(){
	$('.mobile-menu').click(function(){
		$('.mobile-menu,.mobile-content,.header__menu,.header__cart,.dark-screen').toggleClass('active');

	});
	


});



window.onscroll=function showHeader(){
	var header=document.querySelector('.mobile-menu');
	var header=document.querySelector('.header__bottom');
	var header__bottom_logo=document.querySelector('.header__bottom_logo');
	
	var header__cart=document.querySelector('.header__cart');
	

	if(window.pageYOffset>30){
		header.classList.add('header_fixed');
		header__bottom_logo.classList.add('header_fixed_menu');
		header__menu.classList.add('header_fixed_menu');
		header__cart.classList.add('header__cart');
		header__cart.classList.add('mobile-menu-fixed');

		
	}

	else{
		header.classList.remove('header_fixed');
		header__bottom_logo.classList.remove('header_fixed_menu');
		header__menu.classList.remove('header_fixed_menu');
		
		header__cart.classList.remove('mobile-menu-fixed');


	}

	


}












var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


