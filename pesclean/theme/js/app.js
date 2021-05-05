(function( $ ) {
    
    $(".twentytwenty.first").find('.twentytwenty-image').height(126);
    $(".twentytwenty.first").find('img').css('transform', 'translatey(-35%)');
    $(".twentytwenty.first").css('visibility', 'visible');
    //$(".twentytwenty.second").find('.twentytwenty-image').height(360);
    //$(".twentytwenty.second").find('img').css('transform', 'translatey(-35%)');
    //$(".twentytwenty.second").css('visibility', 'visible'); 
    
    
    // $('.twentytwenty-handle').on('mousemove', function() {
    //     var handle = $(this);
    //     console.log(handle.position().left);
    // });
    
    // $( ".twentytwenty-handle" ).draggable({
        
    // });
    
    
    
    $('.owl-carousel-works').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        mouseDrag:false,
        touchDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });       
    
    
    $('.owl-carousel-partners').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    
    $('.owl-carousel-partners .owl-prev').html('<img src="/theme/img/svg/prev.svg">');
    $('.owl-carousel-partners .owl-next').html('<img src="/theme/img/svg/next.svg">');     
    
    
    $('.owl-carousel-about').owlCarousel({
        center: true,
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });    
    
    $('.owl-carousel-about .owl-prev').html('<img src="/theme/img/svg/prev.svg">');
    $('.owl-carousel-about .owl-next').html('<img src="/theme/img/svg/next.svg">');
    
    $('.file-upload').each(function() {
        var fileUpload = $(this); 
        var inputFile = fileUpload.parents('form').find('[type="file"]');
        var fileName = fileUpload.find('.file-name');
        fileUpload.on('click', function() {
            inputFile.click();
        });
        inputFile.on('change', function() {
            console.log($(this).val());
            fileName.text($(this).val().replace("C:\\fakepath\\",""));
        });
    });

    $('.fake-checkbox').each(function() {
        var fakeCheckbox = $(this);        
        if (fakeCheckbox.hasClass('checked')) {
            fakeCheckbox.find('img').attr('src', '/theme/img/svg/checked.svg');
            fakeCheckbox.parents('form').find('[type="submit"]').prop('disabled', false);
        } else {
            fakeCheckbox.find('img').attr('src', '/theme/img/svg/notchecked.svg');
            fakeCheckbox.parents('form').find('[type="submit"]').prop('disabled', true);
        }        
        fakeCheckbox.on('click', function() {         
            fakeCheckbox.toggleClass('checked');
            if (fakeCheckbox.hasClass('checked')) {
                fakeCheckbox.find('img').attr('src', '/theme/img/svg/checked.svg');
                fakeCheckbox.parents('form').find('[type="submit"]').prop('disabled', false);
            } else {
                fakeCheckbox.find('img').attr('src', '/theme/img/svg/notchecked.svg');
                fakeCheckbox.parents('form').find('[type="submit"]').prop('disabled', true);
            } 
        });              
    });
    
    // function preload(src) {
    //     image = new Image();
    //     image.src = src;
    // }        
    // var twentytwentyBefore = $('#twentytwentyWorksView .twentytwenty-before').find('img');
    // var twentytwentyAfter = $('#twentytwentyWorksView .twentytwenty-after').find('img');
    // $('#twentytwentyWorksSource .item').each(function() {
    //     var item = $(this);
    //     var before = item.find('img').attr('data-before');
    //     var after = item.find('img').attr('data-after'); 
    //     preload(before);
    //     preload(after);
    //     item.on('click', function() {
    //         twentytwentyBefore.attr('src', before);
    //         twentytwentyAfter.attr('src', after);
    //     });

    // });
    
    
    var el = $('.tn-main-menu');
    var elHeight = el.height();
    $('.tn-main-menu').after('<div id="tnMainMenu" style="display: none; height: '+el.height()+'px;"></div>');
     var elTopPos = el.offset().top; 
    
    function mainMenuPosition(mode) {
        
        if ('resize' === mode) {
            var elHeight = el.height();
            $('#tnMainMenu').height(el.height());
            elTopPos = el.offset().top; 
        }
        
        var wTopPos = $(window).scrollTop();
        if (elTopPos < wTopPos) {
            if (!el.hasClass('fixed')) {
                $('#tnMainMenu').show();
                el.addClass('fixed');
            }
        } else {
            if (el.hasClass('fixed')) {
                $('#tnMainMenu').hide();
                el.removeClass('fixed');
            }
        }
                
    }
    $(window).on('load', function() {
        mainMenuPosition();
    });    
    $(window).on('scroll', function() {
        mainMenuPosition();
    });
    $(window).on('resize', function() {
        mainMenuPosition('resize');
    });
            
                    
})(jQuery);


function init () {
    
    var companyCoords = [59.792866, 30.592989];
    
    var pricesDelivery = [
        {'w': 2000, 'spb': 3000, 'lo': 34}, 
        {'w': 5000, 'spb': 4500, 'lo': 34}, 
        {'w': 20000, 'spb': 9000, 'lo': 100}
    ];
    
    function getDeliveryPrice(weight = 0, location = 'spb', distance = 0) {
        var result = false;
        $.each(pricesDelivery, function(i, e) {
            if (weight < e.w) {
                result = (location === 'spb') ? e.spb : (e.lo * distance) * 2;
                return false;
            }
        });
        return result;
    }
    
    var myMap = new ymaps.Map('mapCalc', {
            center: companyCoords,
            zoom: 6,
            controls: []
        }, {
            buttonMaxWidth: 300
        }); 
        
    function setPath(coords) {
        var multiRouteModel = new ymaps.multiRouter.MultiRouteModel([
                companyCoords,
                coords
            ], {
                wayPointDraggable: false,
                boundsAutoApply: true
            });        
            
            multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, {
                wayPointDraggable: false,
                boundsAutoApply: true
            });
            
        myMap.geoObjects.removeAll();  
        
        var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: "small"
                }
            });
            
        myMap.controls.add(zoomControl);            
    
        myMap.geoObjects.add(multiRoute);
        
        ymaps.geocode(coords).then(function (res) {
            
            setTimeout(function() {
                
                var firstGeoObject = res.geoObjects.get(0);
                
                if ('Санкт-Петербург, Колпинский район, посёлок Металлострой, Северный проезд, 24' !== firstGeoObject.getAddressLine().replace('Россия, ','')) {
                    $('#calcAddress').val(firstGeoObject.getAddressLine().replace('Россия, ','')).attr('data-area', firstGeoObject.getAdministrativeAreas());
                    $('#calcAddressClone').val(firstGeoObject.getAddressLine().replace('Россия, ','')).attr('data-area', firstGeoObject.getAdministrativeAreas());
                    $('#addrInfo').text(firstGeoObject.getAddressLine().replace('Россия, ',''));
                }
                
                var distValue = Math.ceil(multiRoute.getRoutes().get(0).properties.get("distance").value / 1000);
                var weightValue = ($('#calcWeight').val()) ? parseInt($('#calcWeight').val()) : 0;
                var location = ($('#calcAddress').attr('data-area').indexOf('Санкт-Петербург') > -1) ? 'spb' : 'lo';
                
                $('#distInfo').text(distValue);
                $('#calcDistance').val(distValue);
                $('#calcWeightClone').val(weightValue);
                
                if (weightValue >= 20000) {
                    $('#weightInfo').html('<span style="color:red">>= 20000</span>');
                    $('#priceInfo').html('<span style="color:red">не указана</span>');
                    $('#calcPrice').val('не указана');
                    $('#priceInfo').parent().find('small').hide();
                } else {
                    $('#weightInfo').text(weightValue);
                    var deliveryPrice = getDeliveryPrice(weightValue, location, distValue);
                    $('#priceInfo').text(deliveryPrice);    
                    $('#calcPrice').val(deliveryPrice);
                    $('#priceInfo').parent().find('small').show();
                }
                
            }, 400);
            
        });            
    }        
    
     ymaps.geolocation.get().then(function (res) {
        var firstGeoObject = res.geoObjects.get(0),
            coords = firstGeoObject.geometry.getCoordinates();
        
        //setPath(coords);
        setPath(companyCoords);

        myMap.events.add('click', function (e) {
            var coords = e.get('coords');
            setPath(coords);
        }); 
        
        $('#calcWeight').on('change', function() {
            var address = $('#calcAddress').val();
            ymaps.geocode(address, {
                results: 1
            }).then(function(res) {
                var firstGeoObject = res.geoObjects.get(0),
                    coords = firstGeoObject.geometry.getCoordinates();
                    setPath(coords);
            });
        });
        
        $('#calcAddress').on('change', function() {
            var address = $(this).val();
            ymaps.geocode(address, {
                results: 1
            }).then(function(res) {
                var firstGeoObject = res.geoObjects.get(0),
                    coords = firstGeoObject.geometry.getCoordinates();
                    setPath(coords);
            });
        });
    });
    
    
    ymaps.geocode(companyAddress, {
        results: 1
    }).then(function(res) {
        var firstGeoObject = res.geoObjects.get(0),
            coords = firstGeoObject.geometry.getCoordinates();
            
        var myMap2 = new ymaps.Map('mapContacts', {
                center: companyCoords,
                zoom: 12,
                controls: []
            }, {
                buttonMaxWidth: 300
            }); 
            
        var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: "small"
                }
            });
            
        myMap2.controls.add(zoomControl);  
        
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: companyAddress,
            balloonContent: companyAddress
        }, {
            preset: 'islands#yellowDotIcon'

        }) 
        
        myMap2.geoObjects.add(myPlacemark);

    });  
    
    $('#calculatorForm').submit(function() {
        $('#getAway').modal('show');
        return false;
    });
    
    
}

ymaps.ready(init);
