jQuery('document').ready(function() {

  function footerToBottom() {
    var browserHeight = $(window).height(),
      footerOuterHeight = $('footer').outerHeight(true),
      mainHeightMarginPaddingBorder = $('#main').outerHeight(true) - $('#main').height();
    $('#main').css({
      'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder - 86,
    });
  };
  footerToBottom();
  $(window).resize(function() {
    footerToBottom();
  });
  /////////////////////////////////
  function init() {
    window.addEventListener('scroll', function(e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 50,
        header = document.querySelector("header");
      if (distanceY > shrinkOn) {
        classie.add(header, "smaller");
      } else {
        if (classie.has(header, "smaller")) {
          classie.remove(header, "smaller");
        }
      }
    });
    window.addEventListener('load', function(e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100,
        header = document.querySelector("header");
      if (distanceY > shrinkOn) {
        classie.add(header, "smaller");
      } else {
        if (classie.has(header, "smaller")) {
          classie.remove(header, "smaller");
        }
      }
    });
  }
  window.onload = init();
  /////////////////////////////

  $('input[name="phone"]').mask("+7 (999) 999-99-99");
  ///////////////////////////////
  jQuery('[data-open-popup-1]').click(function() {
    jQuery('#win1').fadeIn();
    return false;
  })
  jQuery('.close_popup').click(function() {
    jQuery('#win1').fadeOut();
    return false;
  })

  //////////////////////////
 $(document).click(function(e) {
    if ($(e.target).closest("#popup_1").length) return;
    $('#win1,#succes_1').fadeOut();
    e.stopPropagation();
  });
  //////////////////////////////////
  function hren() {
    $(this).parents('li').find(".sub_menu").slideToggle("slow");
    return false;
  }

  var bb = false;

  if ($(window).width() <= 993) {
    if (!bb) {
      $(".has_child>a").bind("click", hren);
      bb = true;
    }
  } else {
    if (bb) {
      $(".has_child>a").unbind("click", hren);
      bb = false;
    }
  }

  $(window).on('resize', function() {
    if ($(window).width() <= 993) {
      if (!bb) {
        $(".has_child>a").bind("click", hren);
        bb = true;
      }
    } else {
      if (bb) {
        $(".has_child>a").unbind("click", hren);
        bb = false;
      }
    }

  });
  ///////////////////////////////////
  $(".navbar-nav li a.nav-link").click(function() {
    var selected = $(this).attr('href');
    $.scrollTo(selected, 700, { offset: function() { return { top: -75 }; } });
    $('.navbar-collapse').collapse('hide');
    $('.menu_button').removeClass('active');
    $(".navbar-nav li").removeClass('active');
    $(this).parents(".navbar-nav li").addClass('active');
    return false;
  });
  /////////////////////////////////
  var slider = $('.event_slider').slick({
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });


  total = slider.slick("getSlick").slideCount;
  currentSlide = $('.event_slider').slick('slickCurrentSlide');
  slide = currentSlide + 1;
  if (total > 1) {
    $(".sl-count__current").text('0' + slide);
    $('.sl-count__total').text('0' + total);
  }
  $(".event_slider").on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var currentSl = currentSlide + 1;
    $(".sl-count__current").text('0' + currentSl);
  });

  ////////////////////////////////////////////

  function dotsToleft() {
    var dots_w = $(".event_slider .slick-dots").width();


    $('.event_slider .slick-dots').css({
      'margin-left': -dots_w
    });
  };
  dotsToleft();
  $(window).resize(function() {
    dotsToleft();
  });

  //////////////////////

  $(".partners .show_more_p").click(function() {
    $(this).parents(".partners_body").toggleClass("open");
  });
  //////////////////////////
  jQuery('.open_txt').on('click', function() {
    jQuery(this).parents('.txt_post').find(".txt_hidden").toggle("fast", function() {
      return false;
    });
    jQuery(this).parents('.txt_post').find('.open_txt').toggleClass('open');
    if (jQuery(this).parents('.txt_post').find(".open_txt").hasClass('open')) {
      jQuery(this).parents('.txt_post').find(".open.open_txt").text('Скрыть...');
    } else {
      jQuery(this).parents('.txt_post').find(".open_txt").text('Читать целиком');
    }
    return false;
  });
  ////////////////////////////
  $(".faq_content .show_more_p").click(function() {
    $(this).parents(".faq_content").toggleClass("open");
  });
  //////////////////////////

  $(window).scroll(function() {

    if ($(this).scrollTop() != 0) {

      $('#toTop').fadeIn();

    } else {

      $('#toTop').fadeOut();

    }

  });

  $('#toTop').click(function() {

    $('body,html').animate({
      scrollTop: 0
    }, 800);

  });
  /////////////////////////
  ///////////////polzunok_1/////////////////////////
  var $range_1 = $("#range_slider_1");
 

  $range_1.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 3,
    max: 8,
    from: 3,
    grid: true,
    grid_snap: true,
    postfix: " час."

  });
//////  при загрузке страницы
  if (from = 3) {
    $('#real_price_1').text(5800);
    $('#old_price_1').text(0);
  }

 $('#old_price_1').css({'opacity': "1"});
  var old_pr_txt_1 = $('#old_price_1').text();
  if (old_pr_txt_1 == 0) {
    $('#old_price_1').css({'opacity': "0"});
  } else {
    $('#old_price_1').css({'opacity': "1"});
  }


 
//////  при перетаскивании ползунка
  $range_1.on("change", function() {
     var $inp = $(this);
     
     from = $inp.prop("value"); // reading input value

  

    if (from == 3) {
      $('#real_price_1').text(5800);
      $('#old_price_1').text(0);
    }

    if (from == 4) {
      $('#real_price_1').text(6800);
      $('#old_price_1').text(0);
     
    }

    if (from == 5) {
      $('#real_price_1').text(6800);
      $('#old_price_1').text(0);
      
    }

    if (from == 6) {
      $('#real_price_1').text(8000);
      $('#old_price_1').text(0);
    }

    if (from == 7) {
      $('#real_price_1').text(9000);
      $('#old_price_1').text(0);
    }

    if (from == 8) {
      $('#real_price_1').text(10000);
      $('#old_price_1').text(0);
    }

 $('#old_price_1').css({'opacity': "1"});
  var old_pr_txt_1 = $('#old_price_1').text();
  if (old_pr_txt_1 == 0) {
    $('#old_price_1').css({'opacity': "0"});
  } else {
    $('#old_price_1').css({'opacity': "1"});
  }
 

    
  });

  ///////////////polzunok_2/////////////////////////
  var $range_2 = $("#range_slider_2");

  $range_2.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 3,
    max: 8,
    from: 3,
    grid: true,
    grid_snap: true,
    postfix: " час."

  });
//////  при загрузке страницы
  if (from = 3) {
    $('#real_price_2').text(6700);
    $('#old_price_2').text(7800);
  }

  $('#old_price_2').css({'opacity': "2"});
  var old_pr_txt_2 = $('#old_price_2').text();
  if (old_pr_txt_2 == 0) {
    $('#old_price_2').css({'opacity': "0"});
  } else {
    $('#old_price_2').css({'opacity': "1"});
  }
 
//////  при перетаскивании ползунка
  $range_2.on("change", function() {
    var $inp = $(this);
    from = $inp.prop("value"); // reading input value


    if (from == 3) {
      $('#real_price_2').text(6700);
      $('#old_price_2').text(7800);
    }

    if (from == 4) {
      $('#real_price_2').text(7800);
      $('#old_price_2').text(9000);
    }

    if (from == 5) {
      $('#real_price_2').text(8900);
      $('#old_price_2').text(0);
    }

    if (from == 6) {
      $('#real_price_2').text(9900);
      $('#old_price_2').text(0);
    }

    if (from == 7) {
      $('#real_price_2').text(11000);
      $('#old_price_2').text(0);
    }

    if (from == 8) {
      $('#real_price_2').text(12000);
      $('#old_price_2').text(0);
    }

    $('#old_price_2').css({'opacity': "2"});
  var old_pr_txt_2 = $('#old_price_2').text();
  if (old_pr_txt_2 == 0) {
    $('#old_price_2').css({'opacity': "0"});
  } else {
    $('#old_price_2').css({'opacity': "1"});
  }

  });
  ///////////////polzunok_3/////////////////////////
  var $range_3 = $("#range_slider_3");

  $range_3.ionRangeSlider({
   skin: "round",
    type: "single",
    min: 3,
    max: 8,
    from: 3,
    grid: true,
    grid_snap: true,
    postfix: " час."

  });
  //////  при загрузке страницы
  if (from = 3) {
    $('#real_price_3').text(9300);
    $('#old_price_3').text(0);
  }
  ///////////////////////////
  $('#old_price_3').css({'opacity': "2"});
  var old_pr_txt_3 = $('#old_price_3').text();
  if (old_pr_txt_3 == 0) {
    $('#old_price_3').css({'opacity': "0"});
  } else {
    $('#old_price_3').css({'opacity': "1"});
  }
//////  при перетаскивании ползунка
  $range_3.on("change", function() {
    var $inp = $(this);
    from = $inp.prop("value"); // reading input value


    if (from == 3) {
      $('#real_price_3').text(9300);
      $('#old_price_3').text(0);
    }

    if (from == 4) {
      $('#real_price_3').text(10900);
      $('#old_price_3').text(11800);
    }

    if (from == 5) {
      $('#real_price_3').text(12700);
      $('#old_price_3').text(0);
    }

    if (from == 6) {
      $('#real_price_3').text(14200);
      $('#old_price_3').text(0);
    }

    if (from == 7) {
      $('#real_price_3').text(15400);
      $('#old_price_3').text(0);
    }

    if (from == 8) {
      $('#real_price_3').text(17300);
      $('#old_price_3').text(0);
    }

    $('#old_price_3').css({'opacity': "2"});
  var old_pr_txt_3 = $('#old_price_3').text();
  if (old_pr_txt_3 == 0) {
    $('#old_price_3').css({'opacity': "0"});
  } else {
    $('#old_price_3').css({'opacity': "1"});
  }

  });
  ///////////////polzunok_4/////////////////////////
  var $range_4 = $("#range_slider_4");

  $range_4.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 3,
    max: 8,
    from: 3,
    grid: true,
    grid_snap: true,
    postfix: " час."

  });
  //////  при загрузке страницы
  if (from = 3) {
    $('#real_price_4').text(12100);
    $('#old_price_4').text(13900);
  }
  ///////////////////////////////
 $('#old_price_4').css({'opacity': "2"});
  var old_pr_txt_4 = $('#old_price_4').text();
  if (old_pr_txt_4 == 0) {
    $('#old_price_4').css({'opacity': "0"});
  } else {
    $('#old_price_4').css({'opacity': "1"});
  }

//////  при перетаскивании ползунка
  $range_4.on("change", function() {
    var $inp = $(this);
    from = $inp.prop("value"); // reading input value


    if (from == 3) {
      $('#real_price_4').text(12100);
      $('#old_price_4').text(13900);
    }

    if (from == 4) {
      $('#real_price_4').text(14300);
      $('#old_price_4').text(15400);
    }

    if (from == 5) {
      $('#real_price_4').text(16800);
      $('#old_price_4').text(0);
    }

    if (from == 6) {
      $('#real_price_4').text(18300);
      $('#old_price_4').text(0);
    }

    if (from == 7) {
      $('#real_price_4').text(19900);
      $('#old_price_4').text(20400);
    }

    if (from == 8) {
      $('#real_price_4').text(22900);
      $('#old_price_4').text(0);
    }

$('#old_price_4').css({'opacity': "2"});
  var old_pr_txt_4 = $('#old_price_4').text();
  if (old_pr_txt_4 == 0) {
    $('#old_price_4').css({'opacity': "0"});
  } else {
    $('#old_price_4').css({'opacity': "1"});
  }

  });

  ///////////////polzunok_5/////////////////////////
  var $range_5 = $("#range_slider_5");

  $range_5.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 3,
    max: 8,
    from: 3,
    grid: true,
    grid_snap: true,
    postfix: " час."

  });
  //////  при загрузке страницы
  if (from = 3) {
    $('#real_price_5').text(14500);
    $('#old_price_5').text(16100);
  }
  $('#old_price_5').css({'opacity': "2"});
  var old_pr_txt_5 = $('#old_price_5').text();
  if (old_pr_txt_5 == 0) {
    $('#old_price_5').css({'opacity': "0"});
  } else {
    $('#old_price_5').css({'opacity': "1"});
  }
//////  при перетаскивании ползунка
  $range_5.on("change", function() {
    var $inp = $(this);
    from = $inp.prop("value"); // reading input value


    if (from == 3) {
      $('#real_price_5').text(14500);
      $('#old_price_5').text(16100);
    }

    if (from == 4) {
      $('#real_price_5').text(17200);
      $('#old_price_5').text(19900);
    }

    if (from == 5) {
      $('#real_price_5').text(20100);
      $('#old_price_5').text(22000);
    }

    if (from == 6) {
      $('#real_price_5').text(22600);
      $('#old_price_5').text(0);
    }

    if (from == 7) {
      $('#real_price_5').text(24600);
      $('#old_price_5').text(0);
    }

    if (from == 8) {
      $('#real_price_5').text(27600);
      $('#old_price_5').text(0);
    }

 $('#old_price_5').css({'opacity': "2"});
  var old_pr_txt_5 = $('#old_price_5').text();
  if (old_pr_txt_5 == 0) {
    $('#old_price_5').css({'opacity': "0"});
  } else {
    $('#old_price_5').css({'opacity': "1"});
  }


  });
  ///////////////polzunok_6/////////////////////////
  var $range_6 = $("#range_slider_6");

  $range_6.ionRangeSlider({
     skin: "round",
    type: "single",
    min: 3,
    max: 8,
    from: 3,
    grid: true,
    grid_snap: true,
    postfix: " час."

  });
  //////  при загрузке страницы
  if (from = 3) {
    $('#real_price_6').text(22000);
    $('#old_price_6').text(0);
  }
  $('#old_price_6').css({'opacity': "2"});
  var old_pr_txt_6 = $('#old_price_6').text();
  if (old_pr_txt_6 == 0) {
    $('#old_price_6').css({'opacity': "0"});
  } else {
    $('#old_price_6').css({'opacity': "1"});
  }
//////  при перетаскивании ползунка
  $range_6.on("change", function() {
    var $inp = $(this);
    from = $inp.prop("value"); // reading input value


    if (from == 3) {
      $('#real_price_6').text(22000);
      $('#old_price_6').text(0);
    }

    if (from == 4) {
      $('#real_price_6').text(26200);
      $('#old_price_6').text(0);
    }

    if (from == 5) {
      $('#real_price_6').text(30800);
      $('#old_price_6').text(0);
    }

    if (from == 6) {
      $('#real_price_6').text(34600);
      $('#old_price_6').text(0);
    }

    if (from == 7) {
      $('#real_price_6').text(38700);
      $('#old_price_6').text(0);
    }

    if (from == 8) {
      $('#real_price_6').text(42400);
      $('#old_price_6').text(0);
    }

$('#old_price_6').css({'opacity': "2"});
  var old_pr_txt_6 = $('#old_price_6').text();
  if (old_pr_txt_6 == 0) {
    $('#old_price_6').css({'opacity': "0"});
  } else {
    $('#old_price_6').css({'opacity': "1"});
  }

  });

  //////////////////////////////////////////////


});