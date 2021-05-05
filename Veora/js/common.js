$(document).ready(function() {


    // Slider init ---------------------------------
    $('.expert__slider, .about__infoslider, .order__steps-slider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: "<button class='nav-prev'><img src='img/icon/angle-left-slider.svg' alt='prev' /></button>",
        nextArrow: "<button class='nav-next'><img src='img/icon/angle-right-slider.svg' alt='next' /></button>",
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.company__tl-slider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: "<button class='nav-prev'><img src='img/icon/angle-left-slider.svg' alt='prev' /></button>",
        nextArrow: "<button class='nav-next'><img src='img/icon/angle-right-slider.svg' alt='next' /></button>",
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 820,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });
    $('.reviews__vslider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: "<button class='nav-prev'><img src='img/icon/angle-left-slider.svg' alt='prev' /></button>",
        nextArrow: "<button class='nav-next'><img src='img/icon/angle-right-slider.svg' alt='next' /></button>",
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Header --------------------------------------
    if ($(window).scrollTop() > 0) {
        $('.header__mobile-top').addClass('fixed');
    } else {
        $('.header__mobile-top').removeClass('fixed');
    }
    $(window).scroll(function(event) {
        if ($(window).scrollTop() > 0) {
            $('.header__mobile-top').addClass('fixed');
        } else {
            $('.header__mobile-top').removeClass('fixed');
        }
    });

    $('.header__mobile-burger').click(function() {
        $(this).toggleClass('open');
        $('.header__mobile-top').toggleClass('open');
        $('.header__mobile .header__nav').slideToggle();
    });
    $('.header__mobile .header__nav>a').click(function() {
        $('header__mobile-burger').removeClass('open');
        $('.header__mobile-top').removeClass('open');
        $('.header__mobile .header__nav').slideUp();
    });

    $('.header__nav>a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 130
        }, 1000);
        return false;
    });

    // Page ----------------------------------------

    $.fn.extend({
        toggleText: function(a, b) {
            return this.text(this.text() == b ? a : b);
        }
    });

    $('.top__bootles-info').hover(
        function() {
            $('.top__bootles-info').removeClass('hover')
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        }
    );

    $('.reviews__item-video, .expert__slider-video').click(function() {
        var video = '<iframe class="youtube" height="100%" width="100%" src="https://www.youtube.com/embed/' + $(this).data('video') + '?rel=0;autoplay=1" allowfullscreen frameborder="0"></iframe>';
        $(this).append(video);
    });

    $('.reviews__tabs-btn').click(function() {
        $('.reviews__tabs-btn').removeClass('active').eq($(this).index()).addClass('active');
        $('.reviews__tabs-container').hide().eq($(this).index()).fadeIn();
        $('.reviews__tslider').slick('refresh');
    }).eq(0).addClass('active');

    $('.order__section-agent .show-allpoints').click(function() {
        $(this).toggleText('Смотреть все адреса', 'Скрыть адреса');
        $(this).parent().find('.map-points-hidden').fadeToggle();
    });

    $('.agent__section-map .show-form').click(function() {
        $('.agent__section-map').hide();
        $('.agent__section-wrap').css('display', 'flex').hide().fadeIn();
    });

    // Form ----------------------------------------

    $('.phone-mask').mask("+7(999)999-99-99");

    $('.input').click(function() {
        $(this).removeClass('error');
    });

    $('.custom-select__input').click(function() {
        $(this).toggleClass('open');
        $(this).parent().find('.custom-select__options').fadeToggle();
    });

    $('.custom-select__options .option').click(function() {
        var selectPops = $(this).html();
        $(this).parent().find('.option').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().find('.custom-select__input .select-option').html(selectPops);
        $(this).parent().parent().find('.custom-select__input').removeClass('open');
        $(this).parent().fadeOut();
    });

    $('.form .btn-submit').click(function(event) {
        event.preventDefault();
        var error = 0;
        $(this).parent('.form').find('.required').each(function() {
            if ($(this).val().length === 0) {
                $(this).addClass('error');
                $(this).next().fadeIn();
                error = 1;
            }
        });
        if (error == 0) {
            $(this).parent('.form').submit();
        }
    });

    $('.popup__close, .popup__mask').click(function() {
        $('.popup, .popup__modal').fadeOut();
    });

    // Заказжите упаковку на сайте -----------------------------------------------

    $('.top__section-form').submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/top-form.php",
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                } else {
                    $(".popup__successfull .popup__title").html('При отправке произошла ошибка');
                    $(".popup__successfull .popup__subtitle").html('Поробуйте еще раз!');
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                }
            },
            error: function(response) {
                $(".popup__successfull.popup__title").html('При отправке произошла ошибка');
                $('.popup__successfull, .popup__modal').fadeIn();
                $('form .input').val('');
            }
        })
        return false;
    });

    // Стать представителем -----------------------------------------------

    $('.agent__section-form').submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/agent-form.php",
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                } else {
                    $(".popup__successfull .popup__title").html('При отправке произошла ошибка');
                    $(".popup__successfull .popup__subtitle").html('Поробуйте еще раз!');
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                }
            },
            error: function(response) {
                $(".popup__successfull.popup__title").html('При отправке произошла ошибка');
                $('.popup__successfull, .popup__modal').fadeIn();
                $('form .input').val('');
            }
        })
        return false;
    });


    // Рассчитайте колличество бутылочек -------------------

    var ionAgeMin = 1;
    var ionAgeMax = 100;

    $('.range-age .range-slider').ionRangeSlider({
        min: ionAgeMin,
        max: ionAgeMax,
        from: ionAgeMin,
        hide_min_max: true,
        keyboard: true,
        step: 1,
        grid_num: 4,
        grid: false,
    });

    $('.range-age .count').text(ionAgeMin);

    $('.range-age .range-slider').on("change", function() {
        var $this = $(this),
            value = $this.prop("value").split(";");
        $('.range-age .count').text(value[0]);
        $('.range-age .input-hidden').val(value[0]);
        kursCalc();
    });

    var ionKursMin = 14;
    var ionKursMax = 30;

    $('.range-kurs .range-slider').ionRangeSlider({
        min: ionKursMin,
        max: ionKursMax,
        from: ionKursMin,
        hide_min_max: true,
        keyboard: true,
        step: 1,
        grid_num: 4,
        grid: false,
    });

    $('.range-kurs .count').text(ionKursMin);

    $('.range-kurs .range-slider').on("change", function() {
        var $this = $(this),
            value = $this.prop("value").split(";");
        $('.range-kurs .count').text(value[0]);
        $('.range-kurs .input-hidden').val(value[0]);
        kursCalc();
    });

    function kursCalc() {

        var age = $('.about__result-form .range-age .input-hidden').val();
        var kurs = $('.about__result-form .range-kurs .input-hidden').val();
        var coutBootles = 0;
        var ml = 0
        $('.popup__result-info .descr').hide();
        if (age < 5) {
            ml = 10;
            $('.popup__result-info .desrc-age5').show();
        }
        if (age >= 5 && age < 14) {
            ml = 20;
            $('.popup__result-info .desrc-age5-14').show();
        }
        if (age >= 14) {
            ml = 30;
            $('.popup__result-info .desrc-age14').show();
        }
        coutBootles = Math.ceil(ml * kurs / 100);
        //coutBootles =ml*kurs/120;
        //console.log(coutBootles);
        $('.popup__result-info .ml').html(ml);
        $('.popup__result .count-day').html(age);
        $('.popup__result .count-bootles').html(coutBootles);
        $('.inpt-count_bootles').val(coutBootles);

        $('.popup__result-bootles .bootles-item .count span').html(coutBootles);

    }

    kursCalc();

    $('.about__result-form .btn-submit').click(function(event) {
        event.preventDefault();
        var error = 0;
        var age = $('.range-age .count').html();
        var kurs = $('.range-kurs .count').html();
        $(this).parent('form').find('.required').each(function() {
            if ($(this).val().length === 0) {
                $(this).addClass('error');
                $(this).next().fadeIn();
                error = 1;
            }
        });
        if (error == 0) {
            $('.popup__result, .popup__modal').fadeIn();

        }
    });

    $('.popup__result .buy-product').click(function() {
        $('.popup__result').hide();
        $('.popup__successfull').fadeIn();
        $('.about__result-form').submit();
    });

    $('.about__result-form').submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/result-form.php",
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                } else {
                    $(".popup__successfull .popup__title").html('При отправке произошла ошибка');
                    $(".popup__successfull .popup__subtitle").html('Поробуйте еще раз!');
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                }
            },
            error: function(response) {
                $(".popup__successfull.popup__title").html('При отправке произошла ошибка');
                $('.popup__successfull, .popup__modal').fadeIn();
                $('form .input').val('');
            }
        })
        return false;
    });


    // Заказать пробиотик -------------------

 // ПРОМОКОДЫ

    var promoCodArr = {
        'SALE1': 5,
        'SALE2': 10,
		'1bra': 5,
    };

    function totalPriceCalc() {

        var allSumm = 0;
        var allQty = 0;
        var salePercent = 0;
        var salePromo = 0;
        var codWord = $('.product__form .promocod-input').val();

        $('.product__item').each(function(index) {
            productPrice = parseInt($(this).find('.price').html());
            productQty = parseInt($(this).find('.counter .input-count').val());
            allSumm = allSumm + productPrice;
            allQty = allQty + productQty;
        });
        if (allQty >= 3) {
            salePercent = 3;
        }
        if (allQty >= 5) {
            salePercent = 5;
        }
        if (allQty >= 10) {
            salePercent = 10;
        }
        if (allQty >= 15) {
            salePercent = 15;
        }
        saleSumm = allSumm * salePercent / 100;
        allSaleSumm = allSumm - saleSumm;
        if (saleSumm > 0) {
            $('.product__form .price-old').addClass('show');
        } else {
            $('.product__form .price-old').removeClass('show');
        }

        for (var prop in promoCodArr) {
            if (prop == codWord) {
                salePromo = promoCodArr[prop];
            }
        }
        if (salePromo > 0) {
            saleSumm = allSaleSumm * salePromo / 100;
            allSaleSumm = allSaleSumm - saleSumm;
            $('.product__form .price-old').fadeIn();
        }
        if (salePromo == 0 && saleSumm == 0) {
            $('.product__form .price-old').removeClass('show');
        }
        $('.product__form .price-old span').html(parseInt(allSumm));
        $('.product__form .price-sale span').html(parseInt(allSaleSumm));

        


        
        

        

        
        

       

        $('.product__form .inpt-total_price').val(allSumm);
        $('.product__form .inpt-sale-price').val(allSaleSumm);

    }

    totalPriceCalc();

    $('.product__item .counter .btn').click(function(e) {
        e.preventDefault();
        var currentQty = $(this).parent().find('.input-count').val();
        var Price = parseInt($(this).parent().data('price'));

        if ($(this).hasClass('minus') && currentQty > 0) {
            $(this).parent().find('.input-count').val(parseFloat(currentQty, 10) - 1);
        } else {
            if ($(this).hasClass('plus')) {
                $(this).parent().find('.input-count').val(parseFloat(currentQty, 10) + 1);
            }
        }


        var currentQtyNew = parseInt($(this).parent().find('.input-count').val());
        $(this).parent().find('.count').val(currentQtyNew)
        if (currentQtyNew == 0) {
            $(this).parent().parent('.product__item').addClass('disabled');
        }

        var totalPrice = currentQtyNew * Price;
        $(this).parent().parent().find('.price').html(totalPrice);
        $(this).parent().parent().find('.input-price').val(totalPrice);

        totalPriceCalc()

    });

    $('.product__item .undisabled').click(function(e) {
        var Price = parseInt($(this).parent().find('.counter').data('price'));
        $(this).parent().removeClass('disabled');
        $(this).parent().find('.input-count').val(1);

        $(this).parent().find('.price').html(Price);

        totalPriceCalc()
    });

    $('.product__form .promocod-btn').click(function() {
        totalPriceCalc();
    });


    $('.product__form').submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/order-form.php",
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                } else {
                    $(".popup__successfull .popup__title").html('При отправке произошла ошибка');
                    $(".popup__successfull .popup__subtitle").html('Поробуйте еще раз!');
                    $('.popup__successfull, .popup__modal').fadeIn();
                    $('form .input').val('');
                }
            },
            error: function(response) {
                $(".popup__successfull.popup__title").html('При отправке произошла ошибка');
                $('.popup__successfull, .popup__modal').fadeIn();
                $('form .input').val('');
            }
        })
        return false;
    });

});