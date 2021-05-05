jQuery('document').ready(function() {

  function footerToBottom() {
    var browserHeight = $(window).height(),
      footerOuterHeight = $('#footer').outerHeight(true),
      mainHeightMarginPaddingBorder = $('#main').outerHeight(true) - $('#main').height();
    $('#main').css({
      'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder - 114,
    });
  };
  footerToBottom();
  $(window).resize(function() {
    footerToBottom();
  });

  $(".navbar-nav li a").click(function() {
    var selected = $(this).attr('href');
    $.scrollTo(selected, 500, { offset: function() { return { top: -98 }; } });
    $('.navbar-collapse').collapse('hide');
    $('.menu_button').removeClass('active');
    $(".navbar-nav li").removeClass('active');
    $(this).parents(".navbar-nav li").addClass('active');
    return false;
  });
  $(".logo").click(function() {
    var selected = $(this).attr('href');
    $.scrollTo(selected, 500, { offset: function() { return { top: -98 }; } });
    return false;
  });
  //////////////////////////////////////////
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
  $('.toggle').on('click', function() {
    $('.menu_button').toggleClass('active');
  });
  ////////////////////////////
  $('input[name="phone"]').mask("+7 (999) 999-99-99");
  ////////////////////////////
  $('.adv_list li').matchHeight();
  /////////////////////////////
  $('.item_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '250px',
    asNavFor: '.item_slider_nav',
    autoplay: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          centerPadding: '180px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '50px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '200px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 570,
        settings: {
          centerPadding: '100px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.item_slider_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.item_slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    prevArrow: '<div class="prev"><span class="flaticon-back"></span></div>',
    nextArrow: '<div class="next"><span class="flaticon-arrow"></span></div>'
  });
  //////////////////////
  $('.prices_box').matchHeight();
  /////////////////////////////
  $('.testemonials_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="prev"><span class="flaticon-back"></span></div>',
    nextArrow: '<div class="next"><span class="flaticon-arrow"></span></div>',
    autoplay: true
  });
  //////////////////////
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
  ///////////////////////////////////
  jQuery('.show_popup_1').click(function() {
    jQuery('#win1').fadeIn();
    return false;
  })

  jQuery('#close_popup_1').click(function() {
    jQuery('#win1').fadeOut();
    return false;
  })

  ///////////////////////////////
  jQuery('#submit_1').click(function() {
    jQuery('#succes_1').fadeIn();
    return false;
  })
  jQuery('#close_succes_1').click(function() {
    jQuery('#succes_1,#win1').fadeOut();
    return false;
  })
  ////////////////////////////
  $(document).click(function(e) {
    if ($(e.target).closest("#popup_1").length) return;
    $('#win1,#succes_1').fadeOut();
    e.stopPropagation();
  });
  /////////////////////////////
  jQuery('.show_popup_2').click(function() {
    jQuery('#win2').fadeIn();
    return false;
  })

  jQuery('#close_popup_2').click(function() {
    jQuery('#win2').fadeOut();
    return false;
  })

  ///////////////////////////////
  //jQuery('#submit_2').click(function() {
  //  jQuery('#succes_2').fadeIn();
  //  return false;
  //})
  jQuery('#close_succes_2').click(function() {
    jQuery('#succes_2,#win2').fadeOut();
    return false;
  })
  ////////////////////////////
  $(document).click(function(e) {
    if ($(e.target).closest("#popup_2").length) return;
    $('#win2,#succes_2').fadeOut();
    e.stopPropagation();
  });
  /////////////////////////////
$(".ajax-contact-form2").submit(function() {
var str = $(this).serialize(); 
$.ajax({
type: "POST",
url: "/send.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
  jQuery('#succes_2').fadeIn();
} else {
result = msg;
}
  alert(msg);
}
});
return false;
});
  /////////////////////////////
$(".ajax-contact-form").submit(function() {
var str = $(this).serialize(); 
$.ajax({
type: "POST",
url: "/contact1.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
  jQuery('#succes_2').fadeIn();
} else {
result = msg;
}
  alert(msg);
}
});
return false;
});

$(".clear-cookie").on("click", function() {
  Cookies.remove('colorboxShown');
  $(this).replaceWith("<p><em>Cookie cleared. Re-run demo</em></p>");
});

$(".order-cheezburger").on("click", function() {
  $.colorbox.close();
});

function onPopupOpen() {
  $("#modal-content").show();
  $("#yurEmail").focus();
}

function onPopupClose() {
  $("#modal-content").hide();
  Cookies.set('colorboxShown', 'yes', {
    expires: 1
  });
  $(".clear-cookie").fadeIn();
  lastFocus.focus();
}

function displayPopup() {
  $.colorbox({
    inline: true,
    href: "#modal-content",
    className: "cta",
    width: 600,
    height: 350,
    onComplete: onPopupOpen,
    onClosed: onPopupClose
  });
}

var lastFocus;
var popupShown = Cookies.get('colorboxShown');

if (popupShown) {
  console.log("Cookie found. No action necessary");
  $(".clear-cookie").show();
} else {
  console.log("No cookie found. Opening popup in 3 seconds");
  $(".clear-cookie").hide();
  setTimeout(function() {
    lastFocus = document.activeElement;
    displayPopup();
  }, 1000);
}
 
});


 
