jQuery(document).ready(function($) {
  $(".type_hover").hover(
    function() {
      $(this).addClass("flip");
    },
    function() {
      $(this).removeClass("flip");
    }
  );

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 50 //offsets for fixed header
          },
          500
        );
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if ($(location.href.split("#")[1])) {
    var target = $("#" + location.href.split("#")[1]);
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 50 //offset height of header here too.
        },
        500
      );
      return false;
    }
  }
  $("#callback-popup").on("show.bs.modal", function(e) {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.ready(function() {
        grecaptcha
          .execute("6LdLmccUAAAAAEfXUf9AZys55vptX2pdV99zab6s", {
            action: "callback"
          })
          .then(function(token) {
            $("#callback-form #callback-g-recaptcha").attr("value", token);
            $("#callback-form #callback-g-action").attr("value", "callback");
          });
      });

      let timerIdCallback = setInterval(function() {
        grecaptcha
          .execute("6LdLmccUAAAAAEfXUf9AZys55vptX2pdV99zab6s", {
            action: "callback"
          })
          .then(function(token) {
            $("#callback-form #callback-g-recaptcha").attr("value", token);
            $("#callback-form #callback-g-action").attr("value", "callback");
          });
      }, 100000);
      $("#callback-popup").on("hide.bs.modal", function() {
        clearInterval(timerIdCallback);
      });
    }
    const _this = $(this);
    if (
      $(e.relatedTarget).data("product") != "" &&
      $(e.relatedTarget).data("product") != undefined
    )
      _this.find("#callback-product").val($(e.relatedTarget).data("product"));
    else if ($(".block_choose button").length > 0)
      _this
        .find("#callback-product")
        .val($(".block_choose button:first").data("product"));
    else _this.find("#callback-product").val($("h1:first").text());

    _this.find("#callback-title").val($(e.relatedTarget).data("title"));
    _this.find("#callback-source").val($("h1:first").text());
    if ($(e.relatedTarget).data("utm_campaign")) {
      _this
        .find("#callback-utm_campaign")
        .val($(e.relatedTarget).data("utm_campaign"));
    }

    let title = $(e.relatedTarget).data("title");

    if (title != "" && title != undefined) {
      $("#callback-popup")
        .find("h3 span")
        .text(title);
      _this.find("h4#myModalLabel").text(title);
    }
  });

  $("#feedback").on("show.bs.modal", function(e) {
    var fid = parseInt($(e.relatedTarget).data("fid"));
    var title = $(e.relatedTarget).data("title");
    if (title != "" && title != undefined) {
      $("#feedback")
        .find("h3 span")
        .text(title);
    }
    $("#myModalLabel").html(
      "<span class='glyphicon glyphicon-phone'></span> Закажите обратный звонок!"
    );
    if (fid == 521 || fid == 296) $("#orgname_field").show();
    else $("#orgname_field").hide();

    if (
      $(e.relatedTarget).data("product") != "" &&
      $(e.relatedTarget).data("product") != undefined
    )
      $("#callback-product").val($(e.relatedTarget).data("product"));
    else if ($(".block_choose button").length > 0)
      $("#callback-product").val(
        $(".block_choose button:first").data("product")
      );
    else $("#callback-product").val($("h1:first").text());
    if (
      $(e.relatedTarget).data("utm_campaign") != "" &&
      $(e.relatedTarget).data("utm_campaign") != undefined
    )
      $("#callback-utm_campaign").val($(e.relatedTarget).data("utm_campaign"));
    // else
    // 	$("#callback-utm_campaign").val($('.block_choose button:first').data('utm_campaign'));
    $("#callback-source").val($("h1:first").text());
    if (
      $(e.relatedTarget).data("title") != "" &&
      $(e.relatedTarget).data("title") != undefined
    ) {
      if (fid > 0)
        $("#myModalLabel").html(
          "<span class='glyphicon glyphicon-user'></span> " +
            $(e.relatedTarget).data("title")
        );
      else
        $("#myModalLabel").html(
          "<span class='glyphicon glyphicon-user'></span> Нужна консультация? (" +
            $(e.relatedTarget).data("title") +
            ")"
        );

      switch (fid) {
        case 296:
          try {
            yaCounter213614.reachGoal("otkr-zakaz");
          } catch (e) {}
          break;
        case 297:
          try {
            yaCounter213614.reachGoal("otkr-vopr");
          } catch (e) {}
          break;
        case 521:
          try {
            yaCounter213614.reachGoal("otkr-demo");
          } catch (e) {}
          break;
      }
    } else {
      try {
        yaCounter213614.reachGoal("OPEN_POPUP");
      } catch (e) {}
    }
    $("#callback-fid").val(fid);
  });

  $("#demoProduct").on("show.bs.modal", function(e) {
    var fid = parseInt($(e.relatedTarget).data("fid"));
    if ($(e.relatedTarget).data("utm_campaign")) {
      $(this)
        .find("#callback-utm_campaign")
        .val($(e.relatedTarget).data("utm_campaign"));
    }
    $("#myModalLabel").html(
      "<span class='glyphicon glyphicon-phone'></span> Закажите обратный звонок!"
    );
    // if (fid == 521 || fid == 296)
    // 	$('#orgname_field').show();
    // else
    // 	$('#orgname_field').hide();

    if (
      $(e.relatedTarget).data("product") != "" &&
      $(e.relatedTarget).data("product") != undefined
    )
      $("#callback-product").val($(e.relatedTarget).data("product"));
    else if ($(".block_choose button").length > 0)
      $("#callback-product").val(
        $(".block_choose button:first").data("product")
      );
    else $("#callback-product").val($("h1:first").text());
    if (
      $(e.relatedTarget).data("utm_campaign") != "" &&
      $(e.relatedTarget).data("utm_campaign") != undefined
    )
      $("#callback-utm_campaign").val($(e.relatedTarget).data("utm_campaign"));
    // else
    // $("#callback-utm_campaign").val($('.block_choose button:first').data('utm_campaign'));
    $(this)
      .find("#demo-source")
      .val($("h1:first").text());
    if (
      $(e.relatedTarget).data("title") != "" &&
      $(e.relatedTarget).data("title") != undefined
    ) {
      if (fid > 0)
        $("#myModalLabel").html(
          "<span class='glyphicon glyphicon-user'></span> " +
            $(e.relatedTarget).data("title")
        );
      else
        $("#myModalLabel").html(
          "<span class='glyphicon glyphicon-user'></span> Нужна консультация? (" +
            $(e.relatedTarget).data("title") +
            ")"
        );

      switch (fid) {
        case 296:
          try {
            yaCounter213614.reachGoal("otkr-zakaz");
          } catch (e) {}
          break;
        case 297:
          try {
            yaCounter213614.reachGoal("otkr-vopr");
          } catch (e) {}
          break;
        case 521:
          try {
            yaCounter213614.reachGoal("otkr-demo");
          } catch (e) {}
          break;
      }
    } else {
      try {
        yaCounter213614.reachGoal("OPEN_POPUP");
      } catch (e) {}
    }
    $("#demo-fid").val(fid);
  });

  $("#callback-form").submit(function() {
    // e.preventDefault();
    var fid = $("#callback-fid").val();
    if ($("#callback-form #popup_fullname").val() == "") {
      alert("Представьтесь, пожалуйста");
      return false;
    }
    if ($("#callback-form #popup_phone").val() == "") {
      alert("Укажите контактный телефон");
      return false;
    }
    if (
      !$('#popup_checkbox_callback[name="personal-agreement"]').prop("checked")
    ) {
      alert("Необходимо согласиться с условиями");
      return false;
    }
    // if ($('#callback-popup [name="email"]').val().length > 0 && /@/.test($('#callback-popup [name="email"]').val()) == false) {
    // 	alert('Укажите правильный E-mail');
    // 	return false;
    // }

    switch (fid) {
      case "296":
        try {
          yaCounter213614.reachGoal("zakazat");
        } catch (e) {}
        break;
      case "297":
        try {
          yaCounter213614.reachGoal("vopros");
        } catch (e) {}
        break;
      case "521":
        try {
          yaCounter213614.reachGoal("zakaz_dem");
        } catch (e) {}
        break;
    }
    var $product = $("h1:first").text();
    $(this).append(
      '<input type="hidden" name="product" value="' + $product + '" />'
    );

    $.post("/local/templates/index_new/save.php", $(this).serialize(), function(
      ret
    ) {
      $("#submit-ret").html(ret);

      if (ret.match(/red/)) {
        $("#ConfirmLabel").html(
          "<span class='glyphicon glyphicon-remove-circle'></span> Заявка НЕ отправлена!"
        );
        $("#callback-confirm").modal("show");
        $("#thx").hide();
      } else {
        $("#callback-popup").modal("hide");
        $("#thx").show();
        $("#ConfirmLabel").html(
          "<span class='glyphicon glyphicon-remove-circle'></span> Заявка отправлена!"
        );
        $("#callback-confirm").modal("show");
        $("form#callback-form").trigger("reset");
        try {
          yaCounter213614.reachGoal("SEND_POPUP");
        } catch (e) {}

        // $("#ConfirmLabel").html("<span class='glyphicon glyphicon-ok'></span> Заявка отправлена!");
        $("#thx").show();
      }
    });
    return false;
  });

  $("#demo-product-form").submit(function() {
    var fid = $("#demo-fid").val();
    console.log(fid);
    if ($("#demo-product-form #popup_fullname").val() == "") {
      alert("Представьтесь, пожалуйста");
      return false;
    }
    if ($("#demo-product-form #popup_phone").val() == "") {
      alert("Укажите контактный телефон");
      return false;
    }

    if (!$('#popup_checkbox_demo[name="personal-agreement"]').prop("checked")) {
      alert("Необходимо согласиться с условиями");
      return false;
    }
    // if ($('#callback-popup [name="email"]').val().length > 0 && /@/.test($('#callback-popup [name="email"]').val()) == false) {
    // 	alert('Укажите правильный E-mail');
    // 	return false;
    // }

    switch (fid) {
      case "296":
        try {
          yaCounter213614.reachGoal("zakazat");
        } catch (e) {}
        break;
      case "297":
        try {
          yaCounter213614.reachGoal("vopros");
        } catch (e) {}
        break;
      case "521":
        try {
          yaCounter213614.reachGoal("zakaz_dem");
        } catch (e) {}
        break;
    }

    $.post("/local/templates/index_new/save.php", $(this).serialize(), function(
      ret
    ) {
      $("#submit-ret").html(ret);

      if (ret.match(/red/)) {
        $("#ConfirmLabel").html(
          "<span class='glyphicon glyphicon-remove-circle'></span> Заявка НЕ отправлена!"
        );
        $("#thx").hide();
      } else {
        $("#ConfirmLabel").html(
          "<span class='glyphicon glyphicon-ok'></span> Заявка отправлена!"
        );
        $("#thx").show();
      }
      $("#demoProduct").modal("hide");
      $("#callback-confirm").modal("show");
      $("form#demo-product-form").trigger("reset");
      try {
        yaCounter213614.reachGoal("SEND_POPUP");
      } catch (e) {}
    });
    return false;
  });

  $("#task-form").submit(function() {
    if ($("#task_phone").val() == "") {
      alert("Укажите контактный телефон");
      return false;
    }
    if (!$('#popup_checkbox_task[name="personal-agreement"]').prop("checked")) {
      alert("Необходимо согласиться с условиями");
      return false;
    }
    var $product = $("h1:first").text();
    if ($(".block_choose button").length > 0)
      $product = $(".block_choose button:first").data("product");

    if (
      $(this).data("utm_campaign") == "" ||
      $(this).data("utm_campaign") == undefined
    ) {
      if (
        $(".block_choose button:first").data("utm_campaign") != "" &&
        $(".block_choose button:first").data("utm_campaign") != undefined
      ) {
        $(this).append(
          '<input type="hidden" name="utm_campaign" value="' +
            $(".block_choose button:first").data("utm_campaign") +
            '" />'
        );
      }
    }

    $(this).append(
      '<input type="hidden" name="product" value="' + $product + '" />'
    );
    $(this).append(
      '<input type="hidden" name="source" value="' +
        $("h1:first").text() +
        '" />'
    );

    $.post("/local/templates/index_new/save.php", $(this).serialize(), function(
      ret
    ) {
      $("#submit-ret").html(ret);

      if (ret.match(/red/)) {
        $("#ConfirmLabel").html(
          "<span class='glyphicon glyphicon-remove-circle'></span> Заявка НЕ отправлена!"
        );
        $("#thx").hide();
      } else {
        $("#ConfirmLabel").html(
          "<span class='glyphicon glyphicon-ok'></span> Заявка отправлена!"
        );
        $("#thx").show();
        $("form#task-form").trigger("reset");
      }
      $("#callback-popup").modal("hide");
      $("#callback-confirm").modal("show");
      try {
        yaCounter213614.reachGoal("SEND_POPUP");
      } catch (e) {}
    });
    return false;
  });

  window.f = new flux.slider("#slider", {
    autoplay: false,
    pagination: false
  });

  $(".but_ask").click(function() {
    //		return false;
  });

  function slider_labels(slide) {
    $(".slide_labels").hide("slow");
    $(".slr").css({ right: "-1000px" });
    $(".sll").css({ right: "1000px" });
    $(".slt").css({ top: "-1000px" });

    slide++;
    $(".slide" + slide + "_labels").show();
    $(".sl" + slide).animate({ right: "0px", top: "0px" }, 1000);
  }

  $(".slider-next").on("click", function(event) {
    event.preventDefault();

    if ($("#slider").data("curslide") == $(this).data("slide")) return;

    $("#slider").data("curslide", $(this).data("slide"));

    $(".main-slider").removeClass("active-slide");
    $(this).addClass("active-slide");

    if (!flux.browser.supports3d) {
      window.f.showImage($(this).data("slide"), "slide");
    } else {
      window.f.showImage($(this).data("slide"), "tiles3d");
    }

    slider_labels($(this).data("slide"));
  });

  $(".slide_labels").on("click", function(event) {
    if ($(event.target).hasClass("but_ask")) return;
    if ($(event.target).hasClass("nonext")) return;

    if ($(this).data("href") != undefined && $(this).data("href") != "") {
      location.href = $(this).data("href");
      return false;
    }

    if ($("#slider").data("curslide") < 4)
      $("#slider").data("curslide", $("#slider").data("curslide") + 1);
    else $("#slider").data("curslide", 0);

    $(".main-slider").removeClass("active-slide");
    $(
      ".main-slider[data-slide=" + $("#slider").data("curslide") + "]"
    ).addClass("active-slide");

    if (!flux.browser.supports3d) {
      window.f.showImage($("#slider").data("curslide"), "slide");
    } else {
      window.f.showImage($("#slider").data("curslide"), "tiles3d");
    }

    slider_labels($("#slider").data("curslide"));
  });

  $(".efarea").on("click", function(event) {
    $(".efarea").removeClass("active");
    $(this).addClass("active");
    $label = $(this).text();
    if ($(this).data("label") != undefined) $label = $(this).data("label");
    $("#label_area div").html($label);
    $(".efarea_solution").removeClass("chshown");
    $(".efarea_solution[data-id=" + $(this).data("id") + "]").addClass(
      "chshown"
    );

    if ($("#choose_res div[class~=chshown]").length > 0)
      $("#choose_res").show("fast");
    else $("#choose_res").hide();
  });

  $(".efprocess").on("click", function(event) {
    $(".efprocess").removeClass("active");
    $(this).addClass("active");
    $label = $(this).text();
    if ($(this).data("label") != undefined) $label = $(this).data("label");
    $("#label_process div").html($label);
    $(".efprocess_solution").removeClass("chshown");
    $(".efprocess_solution[data-id=" + $(this).data("id") + "]").addClass(
      "chshown"
    );

    if ($("#choose_res div[class~=chshown]").length > 0)
      $("#choose_res").show("fast");
    else $("#choose_res").hide();
  });

  // $(".fancybox").fancybox({
  // 	padding: 0,
  // 	openEffect : 'elastic',
  // 	openSpeed  : 150,
  // 	closeEffect : 'elastic',
  // 	closeSpeed  : 150,
  // 	closeClick : true,
  // });

  $("#tz_files_link").click(function() {
    $("#tz_files").html($("#tz_files").html() + "<input type='file'/>");
  });

  $(".office-select").on("click", function(event) {
    event.preventDefault();

    $("#cur_region").html($(this).html());
    $(".cur_phone").html($(this).data("phone"));
    $("#services_link").attr("href", $(this).data("url"));
    $("#office_link").attr("href", $(this).data("office"));
    $url = $(this).data("url");
    $.get(
      "/?set_region=" +
        encodeURIComponent($(this).data("phone")) +
        "&change_region=" +
        $(this).data("region"),
      function(ans) {
        if (location.href.indexOf("/offices/") > 0) {
          location.href = $url.replace(/services/, "offices");
        } else if (location.href.indexOf("/services/") > 0)
          location.href = $url;
      }
    );
  });

  $(window).scroll(function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 30) {
      $(".navbar-top").addClass("navbar-top-scrolled");
      $("#headaction").removeClass("hidden");
      $("#stripe").addClass("hidden");
    } else {
      $(".navbar-top").removeClass("navbar-top-scrolled");
      $("#headaction").addClass("hidden");
      $("#stripe").removeClass("hidden");
    }
  });

  if (
    $("#top_region").data("cur") != undefined &&
    $("#top_region").data("cur").length == 0
  ) {
    var obj = new Object();
    obj.ip = ip;

    $.ajax({
      url: "/local/templates/index_new/ip_to_sity.php",
      dataType: "html",
      data: obj,
      type: "POST",
      success: function(ans) {
        var res = eval("(" + ans + ")");
        $(".cur_phone").html(res.phone);
        $("#cur_region").html(res.city_ru);
        $("#callback-city").val(res.city_ru);
        $("#services_link").attr("href", res.url);
        $("#office_link").attr("href", res.url);
      }
    });
  }

  $("h1").each(function() {
    if (
      !$(this)
        .html()
        .match(/span/)
    )
      $(this).html("<span>" + $(this).html() + "</span>");
  });

  $("h2").each(function() {
    if (
      !$(this)
        .html()
        .match(/span/)
    )
      $(this).html("<span>" + $(this).html() + "</span>");
  });

  $("a").each(function() {
    if (
      $(this).attr("href") != "" &&
      $(this).attr("href") != undefined &&
      $(this)
        .attr("href")
        .match(/^((?!http).)*efsol.ru/)
    )
      $(this).attr(
        "href",
        $(this)
          .attr("href")
          .replace(/.+efsol.ru/, "")
      );
  });

  $(".inner-tizer").click(function() {
    location.href = $(this).data("href");
  });

  if (location.href.match(/\/services\//))
    $("#services_link").addClass("tactive");
});

$(document).on("keyup", 'input[name="phone"]', function(e) {
  $(this).val(
    $(this)
      .val()
      .replace(/[^0-9\+\(\)]/g, "")
  );
});

$(document).on("click", "a.demo", function(e) {
  e.preventDefault();
  if ($('button[data-fid="' + $(this).attr("href") + '"]').length > 0)
    $('button[data-fid="' + $(this).attr("href") + '"]:first').click();
});
