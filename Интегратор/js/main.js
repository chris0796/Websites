var left=0;
/*window.onscroll=function showHeader(){

	var header=document.querySelector('.header');
  
  var nav=document.querySelector('.nav');

	if(window.pageYOffset>5){

		header.classList.add('header_fixed');
    nav.classList.add('nav_fixed');
	}

	else{
		header.classList.remove('header_fixed');
    nav.classList.remove('nav_fixed');
	}








}
*/


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







