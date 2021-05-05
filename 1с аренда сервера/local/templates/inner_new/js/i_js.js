/*
 * Replace all SVG images with inline SVG
 */
 $(function(){ 
     jQuery('img.icon-svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

    });


     jQuery(window).resize(function() {
        if ($(window).width() == 1199 ) {
            $('.small-bl-item .currDelivery_func .items .item').css('max-width', '168px');
            $('.small-bl-item .title-middle').css('width', '77%');
            $('.small-bl-item .title-middle::after').css('margin-left', '1px');
            $('.why-choose-us .twoTabIcon.flex .item').css('width', '100%');
            $('.why-choose-us .twoTabIcon.flex.more2 .item:nth-child(5)').css('margin-bottom', '24px');
        }
        else {
            return false;
        }
    });


   // Корректировочный блок
   if (document.location.pathname == '/solutions/enterprise-cloud.html') {
    $('.e_page .container-config .left-bl-side').eq(3).addClass('last-child-4'); 
}


});