$(document).ready(function () {


/* smooth scrolling onclick link */
$('a.smoothscroll').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
    if(sc == "#contact")
      dn += 350;
    $('html, body').animate({scrollTop: dn-130}, 1000);
  });

/* collapsed description */

$(".description-button").click(function(){
    let desc = $(this).next(".description");
    if($(this).hasClass("is-collapsed")){
        $(this).addClass("is-openned").removeClass("is-collapsed");
        desc.removeClass("is-hide").addClass("is-open").slideDown(500);
    }
    else{
        $(this).addClass("is-collapsed").removeClass("is-openned"); 
        desc.addClass("is-hide").removeClass("is-open").slideUp(500);
    }
})

    //Phone navigation

    $('#btnNav').click(function () {

        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {

            $("header .item02").addClass('in');

        } else {

            $("header .item02").removeClass('in');

        }

        return false;

    });



    //Scroll navigation style

    $(window).scroll(function () {

        if ($(this).scrollTop() > 10) {

            $("header").addClass("scroll");

        } else if ($(this).scrollTop() <= 10) {

            $("header").removeClass("scroll");

        }

    });

    //Max height

    // $('.catalog .product').matchHeight();



    //Slick slider

    $('.rev-slider').slick({

        infinite: true,

        slidesToShow: 1,

        slidesToScroll: 1,

        prevArrow: '<i class="fa-prev fa fa-angle-left" aria-hidden="true"></i>',

        nextArrow: '<i class="fa-next fa fa-angle-right" aria-hidden="true"></i>'

    });



    //Cart

    $(".cart").click(function () {

        $(this).toggleClass("active");

        if ($(".cart").hasClass("active")) {

            $(".cart-box").addClass("in");

        } else {

            $(".cart-box").removeClass("in");

        }

    });

    $(".cart-close").click(function () {

        $(".cart-box").removeClass("in");

        $(".cart").removeClass("active");

    });



    //Cart API

    simpleCart({

        cartColumns: [

        {

            attr: "name",

            label: "??????????"

        },

        {

            view: "decrement",

            label: false,

            text: "-"

        },

        {

            attr: "quantity",

            label: "??????-????"

        },

        {

            view: "increment",

            label: false,

            text: "+"

        },

        {

            attr: "total",

            label: "??????????",

            view: 'currency'

        },

        {

            view: "remove",

            text: "<i class='fa fa-times-circle' aria-hidden='true'></i>",

            label: false

        }

        ]

    });



    simpleCart.currency({

        symbol: " ??????.",

        delimiter: " ",

        decimal: ".",

        after: true,

        accuracy: 0

    });



    //Cart Input update



    $(".cart").click(function () {

        if ($(".count").text() == "0") {

            $(".summ, .cart-order, .simpleCart_items").css("display", "none");

            $(".no").css("display", "block");

        } else {

            $(".summ, .cart-order, .simpleCart_items").css("display", "inline-block");

            $(".no").css("display", "none");

        }

    });



    simpleCart.bind('afterAdd', function (item) {

        $(".add").show('fast');

        setTimeout(function () {

            $(".add").hide('fast');

        }, 2000);

        if ($(".count").text() == "0") {

            $(".summ, .cart-order, .simpleCart_items").css("display", "none");

            $(".no").css("display", "block");

        } else {

            $(".summ, .cart-order, .simpleCart_items").css("display", "inline-block");

            $(".no").css("display", "none");

        }

    });



    simpleCart.bind('beforeRemove', function (item) {

        if ($(".count").text() == "1") {

            $(".summ, .cart-order, .simpleCart_items").css("display", "none");

            $(".no").css("display", "block");

        } else {

            $(".summ, .cart-order, .simpleCart_items").css("display", "inline-block");

            $(".no").css("display", "none");

        }

    });



    simpleCart.bind('update', function () {
        checkSum();

        if ($(".count").text() == "0") {

            $(".summ, .cart-order, .simpleCart_items").css("display", "none");

            $(".no").css("display", "block");

        } else {

            $(".summ, .cart-order, .simpleCart_items").css("display", "inline-block");

            $(".no").css("display", "none");

        }





        var newarr = new Array();

        arr = $('.simpleCart_items .itemRow');

        for (i = 0; i < arr.length; i++) {

            $name = $(arr).eq(i).find(".item-name").text();

            $count = $(arr).eq(i).find(".item-quantity").text();

            $total = $(arr).eq(i).find(".item-total").text();


            $name = $name.replace(/"/g, ' ');
            

            $order = $name + ' - '+ $count + '????. - ' + $total;
            newarr.push($order);

        }



        $summ = "?????????? ?? ????????????: " + $(".summ .simpleCart_total").text();

        console.log(newarr); // "5"



        $(".hidden").val(newarr + $summ);



    });



    //Scroll

    $(function () {

        var $page = $('html, body');

        $('nav a[href*="#"], .btn-ankor').click(function () {

            $page.animate({

                scrollTop: $($.attr(this, 'href')).offset().top - 90

            }, 1000);

            return false;

        });

    });



    //Fancybox

    $('a.fancybox').fancybox();

    function checkSum(){
        var s =  $('#sum_price').text();
        s = parseInt(s.replace(" ",""));

        var b = $("#send_form_button");
        var minimal_sum = 1500;

        if ($(".count").text() == "0") {

            $(".minSum_info").slideUp(500);
        }
        else{
            if(s < minimal_sum){
                b.attr("disabled", true);
                $(".minSum_info").slideDown(500);
                $("#minSum_to").text(minimal_sum - s);
            }
            else{
                b.attr("disabled", false);
                $(".minSum_info").slideUp(500);
            }
        }

        
    }

});

