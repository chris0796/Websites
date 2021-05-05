$(function() {
  $(".efsol_leftArrCarusel").click(function() {
    $(".efsol_projects_carusel .owl-prev").trigger("click");
  });
  $(".efsol_rightArrCarusel").click(function() {
    $(".efsol_projects_carusel .owl-next").trigger("click");
  });

  // Slider owlCarousel

  // Слайдер отзывов
  $(".cloudsReviews .reivews .carusel").owlCarousel({
    loop: true,
    margin: 16,
    items: 1,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    smartSpeed: 320,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      991: {
        items: 2
      }
    }
  });

  // Слайдер лицензий
  $(".cloudsLicence.cloudsCaruseltype .licence .carusel").owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    smartSpeed: 320,
    autoHeight: false,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      526: {
        items: 2
      },
      640: {
        items: 2
      },
      767: {
        items: 3,
        margin: 0
      },
      991: {
        items: 3,
        margin: 0
      },
      1199: {
        items: 4,
        margin: 0
      },
      1350: {
        items: 4,
        margin: 0
      }
    }
  });

  // Слайдер лицензий (широкий контейнер)
  $(".owl-carousel.owl-certificates").owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    dots: true,
    dotsClass: "carousel-indicators",
    dotClass: "carousel-dot",
    responsive: {
      0: {
        items: 2,
        margin: 10
      },
      768: {
        items: 3,
        margin: 16
      },
      992: {
        items: 4,
        margin: 16,
        autoplayHoverPause: true
      },
      1200: {
        items: 5,
        margin: 16,
        autoplayHoverPause: true
      }
    }
  });

  // Слайдер доставки
  $(".scrensCarusel").owlCarousel({
    loop: true,
    items: 3,
    autoplay: false,
    center: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 320,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      800: {
        items: 3
      }
    }
  });

  // Слайдер вверху внутренних страниц
  $(".owl-top-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    lazyLoad: true,
    animateOut: "slideOutUp",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: false,
    smartSpeed: 320,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      }
    }
  });

  // End Slider owlCarousel

  $(".currDelivery_screens .leftArrow").click(function() {
    $(".currDelivery_screens .owl-prev").trigger("click");
  });

  $(".currDelivery_screens .rightArrow").click(function() {
    $(".currDelivery_screens .owl-next").trigger("click");
  });

  $(".cloudSlider .arrows .arrow:first-child").click(function() {
    $(".cloudSlider .owl-prev").trigger("click");
  });

  $(".cloudSlider .arrows .arrow:last-child").click(function() {
    $(".cloudSlider .owl-next").trigger("click");
  });

  $(".cloudsScheme .items .cloudsScheme-tabs .tab").click(function() {
    var imgID = $(this).data("cheme");
    $(".cloudsScheme .items .cloudsScheme-tabs .tab").removeClass("active");
    $(this).addClass("active");
    $(".cloudsScheme .items .pics > a").hide();
    $(".cloudsScheme .items .pics > a#cloudsSchema-" + imgID).show();
  });
});
