window.onscroll=function showHeader(){
	var header=document.querySelector('.header');
	var guarantee=document.querySelector('.guarantee');

	if(window.pageYOffset>50){
		header.classList.add('fixed');
		guarantee.classList.add('f-guarantee');
	}
	else{
		header.classList.remove('fixed');
		guarantee.classList.remove('f-guarantee');
	}
}
$(document).ready(function(){
	$('.mobile-menu').click(function(){
		$('.mobile-menu,.header-menu_main,.header-menu_left,.header-menu_right,.mobile-right,.m-description,.header-top_menu-mobile,.order-button-m').toggleClass('active');

	});
});

