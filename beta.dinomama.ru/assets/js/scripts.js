function ajaxCall(callback, url, options){
   $.ajax({
       url: url,
       type: 'POST',
	   data: options,
       success: callback
   });
}

function set_gal()
{
	if($(window).width() < 1023)
	{
		$("#block1 .banners").slick({
			  infinite: true,
			  arrows: false,
			  dots: true,
			  slidesToShow: 1,
			  slidesToScroll: 1
		});
	}
}

function header_resize()
{
	if($(window).width() > 791)
		{
			if(!$("header .banner").hasClass('closed'))
			{
				if($(window).scrollTop() >= 108)
				{	
					$("header .menu_line").css('position','fixed');
					$("body").css('padding-top','48px');
				}
				else
				{	
					$("header .menu_line").css('position','relative');
					$("body").css('padding-top','0px');
				}
			}
			else
			{
				if($(window).scrollTop() >= 60)
				{	
					$("header .menu_line").css('position','fixed');
					$("body").css('padding-top','48px');
				}
				else
				{	
					$("header .menu_line").css('position','relative');
					$("body").css('padding-top','0px');
				}
			}
		}
		
	if($(window).width() < 790)
		{
			//BZ FIXES
			if(!$("header .banner").hasClass('closed'))
			{
				if($(window).scrollTop() >= 156)
				{	
					$("header .mobile_menu").css('position','fixed');
					$("body").css('padding-top','156px');
					$(".mobile_menu a.logo").addClass('active');
					$(".mobile_menu__top_logo").removeClass('active');
				}
				else
				{	
					$("header .mobile_menu").css('position','relative');
					$(".mobile_menu a.logo").removeClass('active');
					$(".mobile_menu__top_logo").addClass('active');
					$("body").css('padding-top','0px');
				}
			}
			else
			{
				if($(window).scrollTop() >= 116)
				{	
					$("header .mobile_menu").css('position','fixed');
					$("body").css('padding-top','156px');
					$(".mobile_menu a.logo").addClass('active');
					$(".mobile_menu__top_logo").removeClass('active');
				}
				else
				{	
					$("header .mobile_menu").css('position','relative');
					$(".mobile_menu a.logo").removeClass('active');
					$(".mobile_menu__top_logo").addClass('active');
					$("body").css('padding-top','0px');
				}
			}	
			//BZ FIXES END
		}
}

function cart_resize()
{
	
	if($(window).width() > 791)
		{
			if(!$(".promocode").hasClass('opened'))
			{
				if($(window).scrollTop() >= 355)
				{	
					$(".cart_order").css({'position':'fixed','top':'68px','bottom':'auto'});
					
					if($(window).scrollTop() >= 645)
						$(".cart_order").css({'position':'absolute','top':'auto','bottom':'0px'});
				}
				else
				{	
					if($(window).scrollTop() < 355)
						$(".cart_order").css({'position':'static','top':'0px'});
				}
			}
			else
			{
				if($(window).scrollTop() >= 470)
				{	
					$(".cart_order").css({'position':'fixed','top':'68px','bottom':'auto'});
					
					if($(window).scrollTop() >= 645)
						$(".cart_order").css({'position':'absolute','top':'auto','bottom':'0px'});
				}
				else
				{	
					if($(window).scrollTop() < 470)
						$(".cart_order").css({'position':'static','top':'0px'});
				}
			}
		}
		else
		{
			$(".cart_order").css({'position':'static','top':'0px'});
		}
}

function order_resize()
{
	if($(window).width() > 791)
		{
			if($(window).scrollTop() >= 225)
			{	
				$(".checkout").css({'position':'fixed','top':'68px'});
			}
			else
			{	
				$(".checkout").css({'position':'static','top':'0px'});
			}
		}
		else
		{
			$(".checkout").css({'position':'static','top':'0px'});
		}
}


$(document).ready(function(){
	
	$("header .banner .close").on('click',function(){
		$("header .banner").addClass('closed');
	});
	
	$(".item_page .info .text_block .size_list li").on('click',function(){
		$(".item_page .info .text_block .size_list li").removeClass('active');
		$(this).addClass('active');
	});
	
	$(".mob_search_line").on('click',function(e){
		e.preventDefault();
		
		if(!$(this).hasClass('active'))
		{
			//$(".mobile_menu .mob_header_line, .mobile_menu .mob_search_line").hide();
			$(".mobile_menu .headline.menu_search").css('display','flex');
			$(this).addClass('active');
			//$(".menuup").click();
			//$(".mobile_dropdown .headline .search input").focus();
		}
		else
		{
			$(".mobile_menu .headline.menu_search").hide();
			$(this).removeClass('active');
		}
	});
	
	/*$(".mobile_menu .menu_search .close_search").on('click',function(){
		$(".mobile_menu .mob_header_line, .mobile_menu .mob_search_line").show();
		$(".mobile_menu .headline.menu_search").hide();
	});*/
	
	$(".search_line a").on('click',function(e){
		e.preventDefault();
		$("header .menu .center div.menu_row").hide();
		$("header .menu .center div.menu_search").css('display','flex');
		$("header .menu .center div.menu_search input").focus();
	});
	
	$(".close_search").on('click',function(){
		$("header .menu .center div.menu_row").show();
		$("header .menu .center div.menu_search").hide();
	});
	
	$(".detblock .search button").on('click',function(){
		if(!$(this).hasClass('opened'))
		{
			$(this).addClass('opened');
			$(this).parents('.search_block').find('.search_result').show(1);
		}
		else
		{
			$(this).removeClass('opened');
			$(this).parents('.search_block').find('.search_result').hide(1);
		}
	});
	
	$(".detail_block .choose_point").on('click',function(e){
		e.preventDefault();
		$(".map_points").show();
	});
	
	$(".search_result p").on('click',function(){
		$(this).parents('.city_block').find(".city").show().find('a').html($(this).html());
		$(this).parents('.city_block').find('.search_result,.search_block').hide(1);
		$(this).parents('.city_block').find('.search_block button').removeClass('opened');
		$(this).parents('.city_block').find(".search input").val($(this).html());
	});
	
	$(".detblock .city_block .city a, .detblock .city_block .city button").on('click',function(){
		$(this).parents('.city_block').find(".search input").val($(this).parents('.city_block').find(".city a").html());
		$(this).parents('.city_block').find('.search_block').show(1);
		$(this).parents('.city_block').find(".city").hide(1);
	});
	
	$("header .menu_line .center > ul > li").hover(function(){
		$("header .menu_line .center > ul > li > a").css('opacity', '0.5');
		$(this).find('a').css('opacity', '1');
	},function(){
		$("header .menu_line .center > ul li > a").css('opacity', '1');
	});
	
	$(".selector_choosen").on('click',function(){
		if(!$(this).parents('.selector').hasClass('opened'))
		{
			$(this).parents('.selector').addClass('opened');
			$(this).parents('.selector').find('.selector_list').show(1);
		}
		else
		{
			$(this).parents('.selector').removeClass('opened');
			$(this).parents('.selector').find('.selector_list').hide(1);
		}
	});
	
	$(".selector_list p").on('click',function(){
		$(this).parents('.selector_list').find('p').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.selector').find('.selector_choosen span').html($(this).find('span').html());
		$(this).parents('.selector').find('input').val($(this).find('span').html());
		$(this).parents('.selector').removeClass('opened');
		$(this).parents('.selector_list').hide();
	});
	
	$(".caterogies_list .slidup > p").on('click',function(){
		if(!$(this).parents('.slidup').hasClass('opened'))
		{
			$(this).parents('.slidup').addClass('opened');
			$(this).parents('.slidup').find('div').slideDown(100);
		}
		else
		{
			$(this).parents('.slidup').removeClass('opened');
			$(this).parents('.slidup').find('div').slideUp(100);
		}
	});
	
	$(".comments .slider").on('click',function(){
		if(!$(this).parents('.comments').hasClass('opened'))
		{
			$(this).parents('.comments').addClass('opened');
			$(this).parents('.comments').find('.container').slideDown(100);
		}
		else
		{
			$(this).parents('.comments').removeClass('opened');
			$(this).parents('.comments').find('.container').slideUp(100);
		}
	});
	
	$("a.textmore").on('click',function(e){
		e.preventDefault();
		if(!$(this).parents('.slide_body').hasClass('opened'))
		{
			$(this).parents('.slide_body').addClass('opened');
			$(this).html('Скрыть');
		}
		else
		{
			$(this).parents('.slide_body').removeClass('opened');
			$(this).html('Полное описание');
		}
	});
	
	$(".item_description .slide_head").on('click',function(){
		
		if(!$(this).parents('.slide').hasClass('stopped'))
		{
			if(!$(this).parents('.slide').hasClass('opened'))
			{
				$(this).parents('.slide').addClass('opened stopped');
				$(this).parents('.slide').find('.slide_body').slideDown(400, function(){$(this).parents('.slide').removeClass('stopped');});
			}
			else
			{
				$(this).parents('.slide').removeClass('opened');
				$(this).parents('.slide').find('.slide_body').slideUp(400);
			}
		}
	});
	
	$(".sizes .slide_head").on('click',function(){
		
		if(!$(this).parents('.slide').hasClass('stopped'))
		{
			if(!$(this).parents('.slide').hasClass('opened'))
			{
				$(this).parents('.slide').addClass('opened stopped');
				$(this).parents('.slide').find('.slide_body').slideDown(400, function(){$(this).parents('.slide').removeClass('stopped');});
			}
			else
			{
				$(this).parents('.slide').removeClass('opened');
				$(this).parents('.slide').find('.slide_body').slideUp(400);
			}
		}
	});
	
	$(".promocode > a").on('click',function(e){
		e.preventDefault();
		if(!$(this).parents('.promocode').hasClass('stopped'))
		{
			if(!$(this).parents('.promocode').hasClass('opened'))
			{
				$(this).parents('.promocode').addClass('opened stopped');
				$(this).parents('.promocode').find('.promo_block').slideDown(400, function(){$(this).parents('.promocode').removeClass('stopped');});
				$(this).parents('.promocode').find('input').focus();
			}
			else
			{
				$(this).parents('.promocode').removeClass('opened');
				$(this).parents('.promocode').find('.promo_block').slideUp(400);
			}
		}
	});
	
	$(".menuup").on('click',function(e){
		e.preventDefault();
		$(".shadow, .fixed_block, .mobile_dropdown").show();
		$("body").css({'overflow':'hidden'});
		$(".fixed_block").css({'height':$(window).height()});
	});
	
	$(".filters button:nth-child(2)").on('click',function(){
		$(".shadow, .fixed_block, .catalog_filter").show();
		$("body").css({'overflow':'hidden'});
		$(".catalog_filter").css({'height':$(window).height()});
		$(".fixed_block").css({'height':$(window).height()});
	});
	
	$(".block_1 a, .block_1 p, .shadow, .size_popup .close_button, .cart_popup .close_button, .catalog_filter .form_head button, .video_popup .close_button").on('click',function(e){
		e.preventDefault();
		$(".shadow, .fixed_block, .size_popup, .mobile_dropdown, .cart_popup, .catalog_filter, .video_popup").hide();
		$(".video_popup .iframe_block").html('');
		$(".cart_popup").removeClass('minheight');
		$("body, .container_overflow").css({'overflow':'visible','height':'auto'});
	});
	
	$(".mob_menus > li > a").click(function(e){
		e.preventDefault();
		
			if(!$(this).parents('li').hasClass('active'))
			{
				$(this).parents('li').find('.sub').slideDown(1);
				$(this).parents('li').addClass('active');
			}
			else
			{
				$(this).parents('li').find('.sub').slideUp(1);
				$(this).parents('li').removeClass('active');
			}
	});
	
	$(".mob_menus .lv2 a").click(function(e){
		e.preventDefault();

			if(!$(this).parents('.lv2').hasClass('active'))
			{
				$(this).parents('.lv2').find('.subsub').slideDown(1);
				$(this).parents('.lv2').addClass('active');
			}
			else
			{
				$(this).parents('.lv2').find('.subsub').slideUp(1);
				$(this).parents('.lv2').removeClass('active');
			}

	});
	
	$("footer .last_line .center > div:nth-child(2) li p svg, footer .last_line .center > div:nth-child(3) li p svg").click(function(e){
		e.preventDefault();

			if(!$(this).parents('li').hasClass('active'))
			{
				$(this).parents('li').find('.sub').slideDown(1);
				$(this).parents('li').addClass('active');
			}
			else
			{
				$(this).parents('li').find('.sub').slideUp(1);
				$(this).parents('li').removeClass('active');
			}

	});
	
	$(".slider_element .sizes li:not(.string)").on('click',function(){
		$(".size_popup, .shadow, .fixed_block").show();
		$(".fixed_block").css({'height':$(window).height()});
		$("body").css('overflow','hidden');
	});
	
	$(".img_line_one .item_video, .img_line_two .slick_container .play").on('click',function(){
		$(".video_popup, .shadow, .fixed_block").show();
		
		if($(window).width() > $(".frame_container iframe").attr('width'))
			$(".video_popup").css({'width':$(".frame_container iframe").attr('width'),'height':$(".frame_container iframe").attr('height')}).find('.iframe_block').html($(".frame_container").html());
		else
		{	
			$(".video_popup").css({'width':'100%'}).find('.iframe_block').html($(".frame_container").html());
			$(".video_popup iframe").css({'width':'100%'});
		}
		
		$(".fixed_block").css({'height':$(window).height()});
		$("body").css('overflow','hidden');
	});
	
	$(".slider_element .buttons .incart, .slider_element .fast_show").on('click',function(){
		
		$(".cart_popup, .shadow, .fixed_block").show();
		$(".fixed_block").css({'height':$(window).height()});
		$("body").css('overflow','hidden');
		
		var item_id = 123;
		
		ajaxCall(result => {

			var popup_info = result;
			$(".cart_popup .html_container").html(popup_info);
			
			if($(".cart_popup").height() >= $(window).height())
				$(".cart_popup").addClass('minheight');
			
		},'popuptest.php', {id:item_id});
	});
	
	set_gal();
	$(window).resize(function(){set_gal();});
	
	$('.one_row_slider').slick({
		  infinite: true,
		  arrows: false,
		  dots: true,
		  centerMode: true,
		  slidesToShow: 4,
		  variableWidth: true,
		  slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				centerMode: true,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				centerMode: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				centerMode: false,
				variableWidth: true,
			  }
			}
		  ]
	});
	
	$('.two_row_slider').slick({
		  infinite: true,
		  arrows: false,
		  dots: true,
		  rows:2,
		  variableWidth: true,
		  slidesToShow: 2,
		  centerMode: true,
		  slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: false,
				variableWidth: false,
				slidesToShow: 1,
			  }
			}
		  ]
	});
	
	$('.logos').slick({
		  infinite: true,
		  arrows: false,
		  dots: true,
		  rows:2,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			}
		  ]
	});
	
	$("div.slided:not(.opened) div").slideUp(1);
	$("div.slided").on('click',function(){
		
		if(!$(this).hasClass('stopped'))
		{
			if(!$(this).hasClass('opened'))
			{
				$(this).addClass('opened stopped');
				$(this).find('div').slideDown(400, function(){$(this).parents('.slided').removeClass('stopped');});
			}
			else
			{
				$(this).removeClass('opened');
				$(this).find('div').slideUp(400);
			}
		}
		
	});
	
	$("ul.nav a").on('click',function(e){
		
		e.preventDefault();
		
		if(!$($(this).attr('href')).hasClass('opened'))
			$($(this).attr('href')).click();
	
		$(window).scrollTop($($(this).attr('href')).offset().top);
		
	});
	
	$(".detail_block .point_rows li > p:nth-child(1)").on('click',function(){
		
		if(!$(this).parents('li.slide_row').hasClass('stopped'))
		{
			if(!$(this).parents('li.slide_row').hasClass('opened'))
			{
				$(this).parents('li.slide_row').addClass('opened stopped');
				$(this).parents('li.slide_row').find('.addition').slideDown(300, function(){$(this).parents('li.slide_row').removeClass('stopped');});
			}
			else
			{
				$(this).parents('li.slide_row').find('.addition').slideUp(300);
				$(this).parents('li.slide_row').removeClass('opened');
			}
		}
		
	});
	
	$(".catalog_filter li p").on('click',function(){
		
		if(!$(this).parents('li').hasClass('stopped'))
		{
			if(!$(this).parents('li').hasClass('opened'))
			{
				$(this).parents('li').addClass('opened stopped');
				$(this).parents('li').find('div').slideDown(100, function(){$(this).parents('li').removeClass('stopped');});
			}
			else
			{
				$(this).parents('li').find('div').slideUp(100);
				$(this).parents('li').removeClass('opened');
			}
		}
		
	});
	
	$(".detail_block .point_rows li > button").on('click',function(e){
		$(".map_points, .list_points").hide();
	});
	
	$(".detail_block .map_points .header p:nth-child(2) a").on('click',function(e){
		e.preventDefault();
		$(".map_points").hide();
		$(".list_points").show();
	});
	
	$(".detail_block .list_points .header p:nth-child(2) a").on('click',function(e){
		e.preventDefault();
		$(".list_points").hide();
		$(".map_points").show();		
	});
	
	$('.img_line_two .slick').slick({
		  infinite: true,
		  slidesToShow: 1,
		  arrows: false,
		  slidesToScroll: 1,
		  asNavFor: '.img_line_one .slick',
		  responsive: [
			{
			  breakpoint: 1023,
			  settings: {
				dots:true
			  }
			}
		  ]
	});
		
	$('.img_line_one .slick').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  prevArrow: $(".bottom"),
		  nextArrow: $(".top"),
		  vertical: true,
		  arrows:true,
		  verticalSwiping: true,
		  asNavFor: '.img_line_two .slick',
		  focusOnSelect: true
	});
		
	$('.size_line .size_items').slick({
		  infinite: true,
		  slidesToShow: 4,
		  prevArrow: $(".size_line .left"),
		  nextArrow: $(".size_line .right"),
		  arrows: true,
		  variableWidth: true,
		  centerMode:true,
		  slidesToScroll: 1,
		  //asNavFor: '.size_block .size_items'
	});
		
	$('.size_block .size_items').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".size_block .left"),
		  nextArrow: $(".size_block .right"),
		  arrows:true,
		  dots:true,
		  //asNavFor: '.size_line .size_items',
		  focusOnSelect: true
		});
		
		$(".sizes .size_table table td, .sizes .size_table table th").css('font-weight','normal');
		var counter = 1;
		  $(".sizes .size_table table td:nth-child(2)").css('font-weight','bold').each(function(){
			  $("div.option_"+counter+" span:first-child").html($(this).html());
			  counter++;
		  });
		
		$('.size_line').on('afterChange', function(event, slick, currentSlide, nextSlide){
		  $(".sizes .size_table table td, .sizes .size_table table th").css('font-weight','normal');
		  
		  var counter = 1;
		  $(".sizes .size_table table td:nth-child("+ parseInt(2+currentSlide) +")").css('font-weight','bold').each(function(){
			  $("div.option_"+counter+" span:first-child").html($(this).html());
			  counter++;
		  });
		});
		

	$(document).on('click', function(e){
	
		if (!($(e.target).parents('.search_block').length)	||	($(e.target).hasClass('search_block'))) 
		{
			$(e.target).find(".search button").removeClass('opened');
			$(e.target).find('.search_result').hide(1);
		}
		
		if (!($(e.target).parents('.selector').length)	||	($(e.target).hasClass('selector'))) 
		{
			$(e.target).removeClass('opened').parents('.selector').removeClass('opened');
			$(e.target).find('.selector_list').hide();
		}
	});
	
	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 7000,
      values: [ 130, 4550 ],
      slide: function( event, ui ) {
        $( "#from, .from" ).val(ui.values[ 0 ]).html(ui.values[ 0 ]);
		$( "#to, .to" ).val(ui.values[ 1 ]).html(ui.values[ 1 ]);
      },
	  create: function( event, ui ) {
        $( "#from, .from" ).val($('#slider-range').slider("values")[0]).html($('#slider-range').slider("values")[0]);
		$( "#to, .to" ).val($('#slider-range').slider("values")[1]).html($('#slider-range').slider("values")[1]);
      }
    });
	
	$(window).resize(function(){
		header_resize();
		cart_resize();
		order_resize();
	});
	
	$(window).scroll(function(){
		header_resize();
		cart_resize();
		order_resize();
	});
});