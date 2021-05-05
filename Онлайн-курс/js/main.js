$(document).ready(function(){

	$(".block_spoiler").click(function() {

 		$(this).toggleClass("open");
 
 		$(this).next().slideToggle(300);

	});
	$(".burger_menu").click(function(event){
		$('.burger_menu,.menu').toggleClass('active');




	});

	






});


/*
window.onscroll=function showHeader(){

	var header=document.querySelector('.header');
	var logo=document.querySelector('.logo');
	var menu=document.querySelector('.menu');


	if(window.pageYOffset>5){
		header.classList.add('header_fixed');
		logo.classList.add('logo_fixed');
		menu.classList.add('menu_fixed');
	}

	else{
		header.classList.remove('header_fixed');
		logo.classList.remove('logo_fixed');
		menu.classList.remove('menu_fixed');
	}






}
*/
