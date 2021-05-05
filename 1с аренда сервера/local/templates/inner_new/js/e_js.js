// Slider owlCarousel
$(document).ready(function() {
  $(".efsol_leftArrCarusel").click(function() {
    $(".efsol_projects_carusel .owl-prev").trigger("click");
  });
  $(".efsol_rightArrCarusel").click(function() {
    $(".efsol_projects_carusel .owl-next").trigger("click");
  });

  $(".e_slider_carusel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 320,
    autoHeight: true
  });
  $(".warehouse-solutionMain .items .carusel ").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    smartSpeed: 320,
    autoHeight: true
  });

  var bodyWidth = $("html").width();

  if (bodyWidth <= "991") {
    $(".cloudsDataCenter").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: false
    });

    $("a.anhor").click(function(event) {
      event.preventDefault();
      $("html,body").animate(
        { scrollTop: $(this.hash).offset().top - 104 },
        480
      );
      $(".top_menu-close").trigger("click");
    });

    $(".scrensCarusel").owlCarousel({
      loop: true,
      items: 1,
      autoplay: false,
      center: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      smartSpeed: 320,
      autoHeight: true
    });
    $(".cloudSlider .cloudSlider-items .cloudSlider-carusel").owlCarousel({
      loop: true,
      margin: 16,
      items: 1,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 320,
      autoHeight: true
    });

    $(".cloudsReviews .reivews .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    $(".ourProjectsSlider .ourProjects .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    $(".arhiveReviews .reivews .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    $(".arhiveReviews.expearanceDoc .reivews .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      mouseDrag: false,
      touchDrag: false,
      singleItem: true,
      stopOnHover: true,
      autoplayTimeout: 3500,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    // $(".arhiveReviews.expearanceDoc .reivews .carusel .item").on("touchstart mousedown", function(e) {
    //     e.stopPropagation();
    // })

    $(".cloudsClients .clientsLogos .items .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true
    });
  } else {
    $(".cloudSlider .cloudSlider-items .cloudSlider-carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 320,
      autoHeight: true
    });

    $(".scrensCarusel").owlCarousel({
      loop: true,
      items: 3,
      autoplay: false,
      center: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      smartSpeed: 320,
      autoHeight: true
    });
    $(".cloudsReviews .reivews .carusel").owlCarousel({
      loop: true,
      margin: 16,
      items: 2,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    $(".ourProjectsSlider .ourProjects .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    $(".arhiveReviews .reivews .carusel").owlCarousel({
      loop: true,
      margin: 16,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });
    $(".arhiveReviews.expearanceDoc .reivews .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      mouseDrag: false,
      touchDrag: false,
      singleItem: true,
      stopOnHover: true,
      autoplayTimeout: 3500,
      smartSpeed: 320,
      autoHeight: true,
      responsiveClass: true
    });

    // $(".arhiveReviews.expearanceDoc .reivews .carusel .item").on("touchstart mousedown", function(e) {
    //     e.stopPropagation();
    // })

    $(".cloudsClients .clientsLogos .items .carusel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: true
    });
    $(".cloudsLicence .licence .carusel ").owlCarousel({
      loop: true,
      margin: -2,
      items: 4,
      autoplay: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      smartSpeed: 320,
      autoHeight: false
    });
  }
  if (bodyWidth <= "640") {
    setTimeout(function() {
      $(".cloudsPreim .items").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        smartSpeed: 320,
        autoHeight: true,
        responsiveClass: true
      });
    }, 100);
  }
  if ((bodyWidth <= "991") & (bodyWidth >= "641")) {
    setTimeout(function() {
      $(".cloudsLicence .licence .carusel").owlCarousel({
        items: 3
      });
    }, 100);
  }
  if ((bodyWidth <= "640") & (bodyWidth >= "426")) {
    setTimeout(function() {
      $(".cloudsLicence .licence .carusel ").owlCarousel({
        loop: true,
        margin: -1,
        items: 2,
        autoplay: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        smartSpeed: 320
      });
    }, 100);
  }
  if (bodyWidth <= "425") {
    setTimeout(function() {
      $(".cloudsLicence .licence .carusel ").owlCarousel({
        items: 1
      });
    }, 100);
  }

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

  $(".cloudsCarusel-arrows.flex .arrow:first-child").click(function() {
    $(this)
      .parent()
      .parent()
      .find(".owl-prev")
      .trigger("click");
  });

  $(".cloudsCarusel-arrows.flex .arrow:last-child").click(function() {
    $(this)
      .parent()
      .parent()
      .find(".owl-next")
      .trigger("click");
  });

  //     $('a[data-fancybox]').fancybox({
  //       padding: 0,
  //       helpers: {
  //         overlay: {
  //           locked: false
  //       }
  //   }
  // });
});
