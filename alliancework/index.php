


<!DOCTYPE html>
<html>
<?php 
    
    $connection = mysqli_connect('127.0.0.1','allianc6_alliance','ffsgswqfwfwq131411421','allianc6_works');
    $connection->query("SET NAMES 'utf8'");
    if($connection == false){
        echo 'Не удалось подключиться к запрашиваемой базе данных';
        mysqli_connect_error();
        exit;
    }
    $result = mysqli_query($connection," SELECT * FROM `comments` ");

    




?>
<head>

    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta charset="utf-8">
    
    <meta name="description" content="Alliance поможет найти хорошую работу в Польше, Чехии, Германии, Литве и других странах Европы. 100 % гарантия открытия виз.">
    
    <title>работа в Европе,агентство по трудоустройству - Alliance </title>
    
    <link href="ajax/libs/jqueryui/1.9.2/themes/base/jquery-ui.css" rel="stylesheet" type="text/css">
    <link href="A.components,,_com_roksprocket,,_layouts,,_features,,_themes,,_showcase,,_showcase.css components,,_com_roksprocket,,_layouts,,_strips,,_themes,,_separated,,_separated.css components,,_com_roksprocket,,_layo.css" rel="stylesheet" type="text/css">





    <link href="css.css?family=Open+Sans+Condensed:300&quot;" rel="stylesheet" type="text/css">
    <link href="css-1.css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <link href="modules/mod_djmegamenu/assets/css/A.animations.css.pagespeed.cf.zA5RFlgY7Y.css" rel="stylesheet" type="text/css">
    <link href="font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="A.modules,,_mod_djmegamenu,,_mobilethemes,,_light,,_djmobilemenu.css media,,_system,,_css,,_modal.css,,q0a9fa7c1f89b87e663f36d26be47aef1 components,,_com_djcatalog2,,_assets,,_slimbox-1.8,,_css,,_slimbox.css.css" rel="stylesheet" type="text/css">





    <link href="media/system/css/A.calendar-jos.css,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.cf.dWoXX9QZ0H.css" rel="stylesheet" title="Зелёный" media="all" type="text/css">
    <link href="A.media,,_mod_pwebcontact,,_css,,_uploader.css cache,,_mod_pwebcontact,,_d93af5bc09dd53d063ee3fdc08306c39.css cache,,_mod_pwebcontact,,_f2a7c004b4fc15a52a2459e0554acec2.css templates,,_jm-apartments,,_css,,_.css" rel="stylesheet" type="text/css">





    <style type="text/css">
        #dj-megamenu307mobile {
            display: none
        }

        @media (max-width:979px) {

            #dj-megamenu307,
            #dj-megamenu307sticky,
            #dj-megamenu307placeholder {
                display: none
            }

            #dj-megamenu307mobile {
                display: block
            }
        }

        .djc_item .djc_mainimage {
            margin-left: 10px;
            margin-bottom: 10px
        }

        .djc_item .djc_mainimage img {
            padding: 0
        }

        .djc_item .djc_thumbnail {
            margin-left: 10px;
            margin-bottom: 10px
        }

        .djc_item .djc_thumbnail img {
            padding: 0
        }

        .djc_item .djc_images {
            width: 412px
        }

        .djc_item .djc_thumbnail {
            width: 159px
        }

        .djc_items .djc_image img {
            padding: 0
        }

        .djc_related_items .djc_image img {
            padding: 0
        }

        .djc_items .djc_image img {
            max-width: 330px
        }

        .djc_category .djc_mainimage {
            margin-left: 10px;
            margin-bottom: 10px
        }

        .djc_category .djc_mainimage img {
            padding: 0
        }

        .djc_category .djc_thumbnail {
            margin-left: 10px;
            margin-bottom: 10px
        }

        .djc_category .djc_thumbnail img {
            padding: 0
        }

        .djc_category .djc_images {
            width: 282px
        }

        .djc_category .djc_thumbnail {
            width: 159px
        }

        .djc_subcategory .djc_image img {
            padding: 0
        }

        .djc_subcategory .djc_image img {
            max-width: 270px
        }

        .djc_producer .djc_mainimage {
            margin-left: 10px;
            margin-bottom: 10px
        }

        .djc_producer .djc_mainimage img {
            padding: 0
        }

        .djc_producer .djc_thumbnail {
            margin-left: 10px;
            margin-bottom: 10px
        }

        .djc_producer .djc_thumbnail img {
            padding: 0
        }

        .djc_producer .djc_images {
            width: 407px
        }

        .djc_producer .djc_thumbnail {
            width: 159px
        }

        .dj-hideitem {
            display: none !important
        }
    </style>
    <script type="application/json" class="joomla-script-options new">
        {
            "csrf.token": "1de44cd697489a0c17633fc130e9fff1",
            "system.paths": {
                "root": "",
                "base": ""
            },
            "joomla.jtext": {
                "MOD_PWEBCONTACT_INIT": "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b...",
                "MOD_PWEBCONTACT_SENDING": "\u0418\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...",
                "MOD_PWEBCONTACT_SEND_ERR": "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
                "MOD_PWEBCONTACT_REQUEST_ERR": "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ",
                "MOD_PWEBCONTACT_COOKIES_ERR": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043a\u0443\u043a\u0438 (cookies) \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
                "MOD_PWEBCONTACT_UPLOADING": "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
                "MOD_PWEBCONTACT_UPLOAD_ERR": "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438",
                "MOD_PWEBCONTACT_UPLOAD_BYTES_ERR": "Uploaded bytes exceed file size",
                "MOD_PWEBCONTACT_UPLOAD_LIMIT_ERR": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442",
                "MOD_PWEBCONTACT_UPLOAD_TYPE_ERR": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430",
                "MOD_PWEBCONTACT_UPLOAD_SIZE_ERR": "\u0424\u0430\u0439\u043b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0443"
            }
        }
    </script>
    <script src="media/jui/js/jquery.min.js.pagespeed.jm.29OAZzvhfX.js" type="text/javascript"></script>
    <script src="media/jui/js/jquery-noconflict.js.pagespeed.jm.MXnyJVsEbV.js" type="text/javascript"></script>
    <script src="ajax/libs/jqueryui/1.9.2/jquery-ui.min.js" type="text/javascript"></script>
    <script src="media/system/js/mootools-core.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.ywlvbuicbl.js" type="text/javascript"></script>
    <script src="media/system/js/core.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.ce.lkuR1pLk4d.js" type="text/javascript"></script>
    <script src="media/system/js/mootools-more.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.-6O1zP2hFm.js" type="text/javascript"></script>
    <script src="media/system/js/caption.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.eJvZcJH4Gp.js" type="text/javascript" defer="defer"></script>
    <script src="media/system/js/modal.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.tIgtOkcDmZ.js" type="text/javascript"></script>
    <script src="media/system/js/calendar.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.h5uE5fxB6U.js" type="text/javascript"></script>
    <script src="media/system/js/calendar-setup.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.ce.1MMqba8jBc.js" type="text/javascript"></script>
    <script src="media/jui/js/jquery.min.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.29OAZzvhfX.js" type="text/javascript"></script>
    <script src="media/jui/js/jquery-noconflict.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.MXnyJVsEbV.js" type="text/javascript"></script>
    <script src="media/jui/js/jquery-migrate.min.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.C2obERNcWh.js" type="text/javascript" defer="defer"></script>
    <script src="media/jui/js/bootstrap.min.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.7eeKttoVW_.js" type="text/javascript" defer="defer"></script>
    <script src="media/jui/js/jquery.ui.core.min.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.juZVV659GR.js" type="text/javascript"></script>
    <script src="media/jui/js/jquery.ui.sortable.min.js,q0a9fa7c1f89b87e663f36d26be47aef1.pagespeed.jm.1or9isGiY6.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/assets/js/mootools-mobile.js.pagespeed.ce.j5wRZ-RTCE.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/assets/js/rokmediaqueries.js.pagespeed.ce.JSpMHgvJs5.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/assets/js/roksprocket.js.pagespeed.ce.sfzE7RD776.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/assets/js/moofx.js.pagespeed.jm.ejVYoYZK4s.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/layouts/features/assets/js/features.js.pagespeed.ce.4MGYkLjJIu.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/layouts/features/themes/showcase/showcase.js.pagespeed.ce.Vzzp765oxG.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/assets/js/roksprocket.request.js.pagespeed.ce.tLGJonkUgk.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/layouts/strips/assets/js/strips.js.pagespeed.ce.DvEMeVDfUq.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/layouts/strips/assets/js/strips-speeds.js.pagespeed.ce.TOgFlkPJFa.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/layouts/lists/assets/js/lists.js.pagespeed.ce.dsTy3rJDlD.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_roksprocket/layouts/lists/themes/default/lists.js.pagespeed.ce.dsTy3rJDlD.js" type="text/javascript" defer="defer"></script>
    <script src="media/modals/js/jquery.touchSwipe.min.js.pagespeed.jm.SeWFrbU9d0.js" type="text/javascript" defer="defer"></script>
    <script src="media/modals/js/jquery.colorbox-min.js.pagespeed.jm.AJLw6AkvkC.js" type="text/javascript" defer="defer"></script>
    <script src="media/modals/js/script.min.js,qv=7.0.0.p.pagespeed.jm.nOs_yDdgEf.js" type="text/javascript" defer="defer"></script>
    <script src="plugins/system/ef4_jmframework/includes/assets/template/js/layout.js.pagespeed.jm.0R5Lu_tXJO.js" type="text/javascript" defer="defer"></script>
    <script src="templates/jm-apartments/js/scripts.js.pagespeed.ce.W5xNk594x5.js" type="text/javascript" defer="defer"></script>
    <script src="templates/jm-apartments/js/offcanvas.js.pagespeed.ce.GsKcWEmXE9.js" type="text/javascript" defer="defer"></script>
    <script src="templates/jm-apartments/js/backtotop.js.pagespeed.ce.ORVgiteRMa.js" type="text/javascript" defer="defer"></script>
    <script src="templates/jm-apartments/js/effects.js.pagespeed.ce.X8vMFtOrCu.js" type="text/javascript" defer="defer"></script>
    <script src="modules/mod_djmegamenu/assets/js/jquery.djmegamenu.js.pagespeed.jm.N7V4BVAdtR.js" type="text/javascript" defer="defer"></script>
    <script src="modules/mod_djmegamenu/assets/js/jquery.djmobilemenu.js.pagespeed.ce.-f8JlycMAZ.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_djcatalog2/assets/slimbox-1.8/js/slimbox.js.pagespeed.ce.oXWBmZbvSL.js" type="text/javascript" defer="defer"></script>
    <script src="components/com_djcatalog2/themes/default/js/theme.js.pagespeed.ce.TzR7aLV7qq.js" type="text/javascript" defer="defer"></script>
    <script src="media/mod_pwebcontact/js/jquery.ui.effects.min.js,qv=1.11.1.pagespeed.jm.DQpX4zTTYY.js" type="text/javascript" defer="defer"></script>
    <script src="media/mod_pwebcontact/js/jquery.validate.min.js,qv=1.14.0.pagespeed.jm.7GitLCu4B0.js" type="text/javascript" defer="defer"></script>
    <script src="media/mod_pwebcontact/js/jquery.pwebcontact.min.js,qv=3.4.2.pagespeed.jm.Rw-3l3glbz.js" type="text/javascript" defer="defer"></script>
    <script src="recaptcha/api.js?hl=ru&render=explicit" type="text/javascript" defer="defer"></script>
    <script src="media/mod_pwebcontact/js/jquery.fileupload.min.js,qv=5.42.3.pagespeed.jm.jR6oE4_EMC.js" type="text/javascript" defer="defer"></script>
    <script type="text/javascript">
        if (typeof RokSprocket == 'undefined') RokSprocket = {};
        Object.merge(RokSprocket, {
            SiteURL: 'https://www.rabotavevrope.com.ua/',
            CurrentURL: 'https://www.rabotavevrope.com.ua/',
            AjaxURL: 'https://www.rabotavevrope.com.ua/index.php?option=com_roksprocket&amp;task=ajax&amp;format=raw&amp;ItemId=435'
        });
        window.addEvent('domready', function() {
            RokSprocket.instances.showcase = new RokSprocket.Showcase();
        });
        window.addEvent('domready', function() {
            RokSprocket.instances.showcase.attach(269, '{"animation":"crossfade","autoplay":"1","delay":"5"}');
        });
        window.addEvent('load', function() {
            var overridden = false;
            if (!overridden && window.G5 && window.G5.offcanvas) {
                var mod = document.getElement('[data-showcase="269"]');
                mod.addEvents({
                    touchstart: function() {
                        window.G5.offcanvas.detach();
                    },
                    touchend: function() {
                        window.G5.offcanvas.attach();
                    }
                });
                overridden = true;
            };
        });
        window.addEvent('domready', function() {
            RokSprocket.instances.strips = new RokSprocket.Strips();
        });
        window.addEvent('domready', function() {
            RokSprocket.instances.strips.attach(279, '{"animation":"fadeDelay","autoplay":"1","delay":"5"}');
        });
        window.addEvent('load', function() {
            var overridden = false;
            if (!overridden && window.G5 && window.G5.offcanvas) {
                var mod = document.getElement('[data-strips="279"]');
                mod.addEvents({
                    touchstart: function() {
                        window.G5.offcanvas.detach();
                    },
                    touchend: function() {
                        window.G5.offcanvas.attach();
                    }
                });
                overridden = true;
            };
        });
        window.addEvent('domready', function() {
            RokSprocket.instances.lists = new RokSprocket.Lists();
        });
        window.addEvent('domready', function() {
            RokSprocket.instances.lists.attach(276, '{"accordion":"1","autoplay":"0","delay":"5"}');
        });
        window.addEvent('load', function() {
            var overridden = false;
            if (!overridden && window.G5 && window.G5.offcanvas) {
                var mod = document.getElement('[data-lists="276"]');
                mod.addEvents({
                    touchstart: function() {
                        window.G5.offcanvas.detach();
                    },
                    touchend: function() {
                        window.G5.offcanvas.attach();
                    }
                });
                overridden = true;
            };
        });
        jQuery(window).on('load', function() {
            new JCaption('img.caption');
        });;
        var modals_class = 'modal_link';
        var modals_disable_on_mobile = 0;
        var modals_mobile_max_width = 767;
        var modals_open_by_url = '';
        var modals_defaults = {
            opacity: '0.8',
            width: '90%',
            height: '90%',
            initialWidth: '80%',
            initialHeight: '90%',
            maxWidth: '95%',
            maxHeight: '95%',
            slideshow: 'true',
            current: '{current} / {total}',
            previous: 'previous',
            next: 'next',
            close: 'close',
            xhrError: 'This content failed to load.',
            imgError: 'This image failed to load.'
        };
        jQuery(function($) {
            initTooltips();
            $("body").on("subform-row-add", initTooltips);

            function initTooltips(event, container) {
                container = container || document;
                $(container).find(".hasTooltip").tooltip({
                    "html": true,
                    "container": "body"
                });
            }
        });
        (function() {
            var cb = function() {
                var add = function(css) {
                    var ss = document.styleSheets;
                    for (var i = 0; i < ss.length; i++) {
                        if (ss[i].href == css) return;
                    }
                    var l = document.createElement('link');
                    l.rel = 'stylesheet';
                    l.href = css;
                    var h = document.getElementsByTagName('head')[0];
                    h.appendChild(l);
                }
                add('/media/djextensions/css/animate.min.css');
                add('/media/djextensions/css/animate.ext.css');
            };
            var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
            if (raf) raf(cb);
            else window.addEventListener('load', cb);
        })();
        (function() {
            var cb = function() {
                var add = function(css) {
                    var ss = document.styleSheets;
                    for (var i = 0; i < ss.length; i++) {
                        if (ss[i].href == css) return;
                    }
                    var l = document.createElement('link');
                    l.rel = 'stylesheet';
                    l.href = css;
                    var h = document.getElementsByTagName('head')[0];
                    h.appendChild(l);
                }
                add('/media/djextensions/css/animate.min.css');
                add('/media/djextensions/css/animate.ext.css');
            };
            var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
            if (raf) raf(cb);
            else window.addEventListener('load', cb);
        })();
        (function() {
            var cb = function() {
                var add = function(css) {
                    var ss = document.styleSheets;
                    for (var i = 0; i < ss.length; i++) {
                        if (ss[i].href == css) return;
                    }
                    var l = document.createElement('link');
                    l.rel = 'stylesheet';
                    l.href = css;
                    var h = document.getElementsByTagName('head')[0];
                    h.appendChild(l);
                }
                add('/media/djextensions/css/animate.min.css');
                add('/media/djextensions/css/animate.ext.css');
            };
            var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
            if (raf) raf(cb);
            else window.addEventListener('load', cb);
        })();
        jQuery(function($) {
            SqueezeBox.initialize({});
            SqueezeBox.assign($('a.modal').get(), {
                parse: 'rel'
            });
        });
        window.jModalClose = function() {
            SqueezeBox.close();
        };
        document.onreadystatechange = function() {
            if (document.readyState == 'interactive' && typeof tinyMCE != 'undefined' && tinyMCE) {
                if (typeof window.jModalClose_no_tinyMCE === 'undefined') {
                    window.jModalClose_no_tinyMCE = typeof(jModalClose) == 'function' ? jModalClose : false;
                    jModalClose = function() {
                        if (window.jModalClose_no_tinyMCE) window.jModalClose_no_tinyMCE.apply(this, arguments);
                        tinyMCE.activeEditor.windowManager.close();
                    };
                }
                if (typeof window.SqueezeBoxClose_no_tinyMCE === 'undefined') {
                    if (typeof(SqueezeBox) == 'undefined') SqueezeBox = {};
                    window.SqueezeBoxClose_no_tinyMCE = typeof(SqueezeBox.close) == 'function' ? SqueezeBox.close : false;
                    SqueezeBox.close = function() {
                        if (window.SqueezeBoxClose_no_tinyMCE) window.SqueezeBoxClose_no_tinyMCE.apply(this, arguments);
                        tinyMCE.activeEditor.windowManager.close();
                    };
                }
            }
        };
        jQuery(document).ready(function($) {
            $(window).load(function() {
                var grecaptchaId = grecaptcha.render("pwebcontact288_captcha", {
                    sitekey: "6LcPnAoTAAAAAELHJ46n697mYqOKzC_kyvhmmu5s",
                    theme: "light",
                    "expired-callback": function() {
                        pwebContact288.captchaExpired()
                    }
                });
                $("#pwebcontact288_captcha").data("grecaptchaId", grecaptchaId)
            })
        });
        (function() {
            var cb = function() {
                var add = function(css) {
                    var ss = document.styleSheets;
                    for (var i = 0; i < ss.length; i++) {
                        if (ss[i].href == css) return;
                    }
                    var l = document.createElement('link');
                    l.rel = 'stylesheet';
                    l.href = css;
                    var h = document.getElementsByTagName('head')[0];
                    h.appendChild(l);
                }
                add('/media/djextensions/css/animate.min.css');
                add('/media/djextensions/css/animate.ext.css');
            };
            var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
            if (raf) raf(cb);
            else window.addEventListener('load', cb);
        })();
        jQuery(document).ready(function($) {
            $(window).load(function() {
                var grecaptchaId = grecaptcha.render("pwebcontact284_captcha", {
                    sitekey: "6LcPnAoTAAAAAELHJ46n697mYqOKzC_kyvhmmu5s",
                    theme: "light",
                    "expired-callback": function() {
                        pwebContact284.captchaExpired()
                    }
                });
                $("#pwebcontact284_captcha").data("grecaptchaId", grecaptchaId)
            })
        });
        Calendar._DN = ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430", "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"];
        Calendar._SDN = ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431", "\u0412\u0441"];
        Calendar._FD = 0;
        Calendar._MN = ["\u044f\u043d\u0432\u0430\u0440\u044f", "\u0444\u0435\u0432\u0440\u0430\u043b\u044f", "\u043c\u0430\u0440\u0442\u0430", "\u0430\u043f\u0440\u0435\u043b\u044f", "\u043c\u0430\u044f", "\u0438\u044e\u043d\u044f", "\u0438\u044e\u043b\u044f", "\u0430\u0432\u0433\u0443\u0441\u0442\u0430", "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f", "\u043e\u043a\u0442\u044f\u0431\u0440\u044f", "\u043d\u043e\u044f\u0431\u0440\u044f", "\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];
        Calendar._SMN = ["\u044f\u043d\u0432", "\u0444\u0435\u0432", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440", "\u043c\u0430\u044f", "\u0438\u044e\u043d\u044c", "\u0438\u044e\u043b\u044c", "\u0430\u0432\u0433", "\u0441\u0435\u043d", "\u043e\u043a\u0442", "\u043d\u043e\u044f\u0431", "\u0434\u0435\u043a"];
        Calendar._TT = {
            "INFO": "\u041e \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435",
            "ABOUT": "DHTML Date\/Time Selector\n(c) dynarch.com 20022005 \/ Author: Mihai Bazon\nFor latest version visit: http:\/\/www.dynarch.com\/projects\/calendar\/\nDistributed under GNU LGPL.  See http:\/\/gnu.org\/licenses\/lgpl.html for details.\n\n\u0412\u044b\u0431\u043e\u0440 \u0434\u0430\u0442\u044b:\n- \u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0434, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438 < \u0438 > \n- \u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0435\u0441\u044f\u0446 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438 < \u0438 > \n- \u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u044b\u0448\u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u043a\u043d\u043e\u043f\u043e\u043a, \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435, \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0432\u044b\u0431\u043e\u0440\u0430.",
            "ABOUT_TIME": "\n\nTime selection:\n Click on any of the time parts to increase it\n or Shiftclick to decrease it\n or click and drag for faster selection.",
            "PREV_YEAR": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e \u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0433\u043e\u0434. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u043b\u0435\u0442.",
            "PREV_MONTH": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e \u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u0435\u0441\u044f\u0446\u0435\u0432.",
            "GO_TODAY": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0434\u0430\u0442\u0430",
            "NEXT_MONTH": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e \u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u0435\u0441\u044f\u0446\u0435\u0432.",
            "SEL_DATE": "\u0412\u044b\u0431\u043e\u0440 \u0434\u0430\u0442\u044b.",
            "DRAG_TO_MOVE": "\u041f\u043e\u0442\u044f\u043d\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c",
            "PART_TODAY": " \u0421\u0435\u0433\u043e\u0434\u043d\u044f ",
            "DAY_FIRST": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0435 %s",
            "WEEKEND": "0,6",
            "CLOSE": "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
            "TODAY": "\u0421\u0435\u0433\u043e\u0434\u043d\u044f",
            "TIME_PART": "Shift + \u043a\u043b\u0438\u043a \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u0435 \u043c\u044b\u0448\u043a\u043e\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",
            "DEF_DATE_FORMAT": "%Y%m%d",
            "TT_DATE_FORMAT": "%a, %b %e",
            "WK": "\u043d\u0435\u0434.",
            "TIME": "\u0412\u0440\u0435\u043c\u044f:"
        };
    </script>

    <link href="templates/jm-apartments/images/favicon.ico" rel="Shortcut Icon">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
</head>

<body class=" off-canvas-right">
    
        
        


                

        

    

    <div id="jm-allpage">
        <div id="jm-offcanvas">
            <div id="jm-offcanvas-toolbar">
                <a class="toggle-nav close-menu"><span class="icon-remove"></span></a>
            </div>
            <div id="jm-offcanvas-content">
                <div class="jm-module  blank-ms">
                    <div class="jm-module-in">
                        <div class="jm-module-content clearfix notitle">


                            <div class="custom blank-ms">
                                <p>Assign modules on offcanvas module position to make them visible in the sidebar.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="jm-module  nomargin-ms visible-desktop">
                    <div class="jm-module-in">
                        <div class="jm-module-content clearfix notitle">


                            <div class="custom nomargin-ms visible-desktop">
                                <p><a class="toggle-nav menu"><span class="icon-align-justify"></span></a></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="jm-module  blank-ms">
                    <div class="jm-module-in">
                        <h3 class="jm-title "><span>Main</span> Menu</h3>
                        <div class="jm-module-content clearfix ">


                        </div>
                    </div>
                </div>
                <div class="jm-module ">
                    <div class="jm-module-in">
                        <div class="jm-module-content clearfix notitle">


                            <div class="custom">
                                <p class="jm-buttons col1"><span class="jm"><a href="component/contact/contact/9.html?Itemid=516" class="readmore readmore-large">call us: 45 444 444 444</a></span> <span class="jm"><a href="component/djcatalog2/jobs.html?Itemid=816" class="readmore readmore-large">reserve a room</a></span> <span class="jm"><a href="component/contact/contact/9.html?Itemid=516" class="btn btn-large">send us a message</a></span></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="jm-module ">
                    <div class="jm-module-in">
                        <div class="jm-module-content clearfix notitle">
                            <!-- PWebContact -->


                            <div id="pwebcontact305" class="pwebcontact pweb-left pweb-offset-top pweb-modal pweb-labels-over pweb-bg-white pweb-form-blue pweb-horizontal pweb-icomoon pweb-radius pweb-shadow" dir="ltr">


                                <div id="pwebcontact305_modal" class="pwebcontact-modal modal fade hide" style="display:none">
                                    <div id="pwebcontact305_box" class="pwebcontact-box pweb-modal pweb-labels-over pweb-bg-white pweb-form-blue pweb-horizontal pweb-icomoon pweb-radius pweb-shadow " dir="ltr">
                                        <div id="pwebcontact305_container" class="pwebcontact-container">

                                            <button type="button" class="pwebcontact305_toggler pweb-button-close" aria-hidden="true" data-role="none">&times;</button>


                                            <form name="pwebcontact305_form" id="pwebcontact305_form" class="pwebcontact-form" action="sendform.php" method="post">


                                                <div class="pweb-fields">
                                                    <div class="pweb-field-container pweb-field-name pweb-field-name">
                                                        <div class="pweb-label">
                                                            <label id="pwebcontact305_field-name-lbl" for="pwebcontact305_field-name">
                                                                Ваше имя <span class="pweb-asterisk">*</span> </label>
                                                        </div>
                                                        <div class="pweb-field">
                                                            <input type="text" name="fields[name]" id="pwebcontact305_field-name" class="pweb-input required" value="" data-role="none">
                                                        </div>
                                                    </div>
                                                    <div class="pweb-field-container pweb-field-phone pweb-field-phone">
                                                        <div class="pweb-label">
                                                            <label id="pwebcontact305_field-phone-lbl" for="pwebcontact305_field-phone">
                                                                Ваш номер телефона <span class="pweb-asterisk">*</span> </label>
                                                        </div>
                                                        <div class="pweb-field">
                                                            <input type="tel" name="fields[phone]" id="pwebcontact305_field-phone" class="pweb-input required pweb305-validate-phone" value="" data-role="none">
                                                        </div>
                                                    </div>
                                                    <div class="pweb-field-container pweb-field-buttons">
                                                        <div class="pweb-field">
                                                            <button id="pwebcontact305_send" type="button" class="button1" data-role="none">Заказать обратный звонок</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pweb-msg pweb-msg-after">
                                                    <div id="pwebcontact305_msg" class="pweb-progress">
                                                        <script type="text/javascript">
                                                            document.getElementById("pwebcontact305_msg").innerHTML = "Инициализация отправки формы..."
                                                        </script>
                                                    </div>
                                                </div>
                                                <input type="hidden" name="1de44cd697489a0c17633fc130e9fff1" value="1" id="pwebcontact305_token">
                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <script type="text/javascript">
                                jQuery(document).ready(function($) {
                                    pwebContact305 = new pwebContact({
                                        id: 305,
                                        layout: "modal",
                                        position: "left",
                                        offsetPosition: "top",
                                        basePath: "",
                                        ajaxUrl: "index.php?option=com_ajax&module=pwebcontact&Itemid=435&lang=ru-RU&method=",
                                        msgCloseDelay: 5,
                                        modalStyle: "white",
                                        validatorRules: [{
                                            name: "phone",
                                            regexp: /[\d\-\+() ]+/
                                        }]
                                    })
                                });
                            </script>
                            <!-- PWebContact end -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <section id="jm-top1" class="">
            <div id="jm-top1-in" class="container-fluid">
                <div class="row-fluid jm-flexiblock jm-top1">
                    <div class="span4" data-default="span4" data-wide="span2" data-normal="span2" data-xtablet="span12" data-tablet="span100" data-mobile="span50">
                        <div class="jm-module logo_top">
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">


                                    <div class="customlogo_top">
                                        <p><a href="index.htm"><img src="images/Raves-logo.png.pagespeed.ce.Ton9imB5tO.png" style="display: block; margin-left: auto; margin-right: auto;" width="148" height="135"></a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="span4" data-default="span4" data-wide="span8" data-normal="span8" data-xtablet="span12 first-span" data-tablet="span100 first-span" data-mobile="span50">
                        <div class="moduletabletop_menu_1 nomobil">


                            <ul id="dj-megamenu294" class="dj-megamenu dj-megamenu-override top_menu_1 nomobil" data-options='{"wrap":"jm-top-menu-in","animIn":"fadeInUp","animOut":"zoomOut","animSpeed":"normal","openDelay":"250","closeDelay":"500","event":"mouseenter","fixed":"0","offset":"0","theme":"override","direction":"ltr","wcag":"1"}' data-trigger="979">
                                <li class="dj-up itemid435 first current active"><a class="dj-up_a active " href="index.htm"><span>Главная</span></a></li>
                                <li class="dj-up itemid890"><a class="dj-up_a  " href="#about-us"><span>О нас</span></a></li>
                                <li class="dj-up itemid892"><a class="dj-up_a  " href="#contacts-block"><span>Контакты</span></a></li>
                                <li class="dj-up itemid893"><a class="dj-up_a  " href="#reviews-block"><span>Отзывы</span></a></li>
                            </ul>



                        </div>

                        <div class="jm-module top_menu_1 nomobil">
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">




                                </div>
                            </div>
                        </div>
                        <div class="jm-module top_menu_1 no_pc">
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">
                                    <ul id="dj-megamenu307" class="dj-megamenu dj-megamenu-override top_menu_1 no_pc" data-options='{"wrap":"jm-top-menu-in","animIn":"fadeInUp","animOut":"zoomOut","animSpeed":"normal","openDelay":"250","closeDelay":"500","event":"mouseenter","fixed":"0","offset":"0","theme":"override","direction":"ltr","wcag":"1"}' data-trigger="979">
                                        <li class="dj-up itemid997 first active"><a class="dj-up_a active " href="index.htm"><span>Главная</span></a></li>
                                        <li class="dj-up itemid998"><a class="dj-up_a  " href="otkryt-vizu.html"><span>Открыть визу</span></a></li>
                                        <li class="dj-up itemid999"><a class="dj-up_a  " href="#about-us"><span>О нас</span></a></li>
                                        <li class="dj-up itemid1000"><a class="dj-up_a  " href="blog.html"><span>Блог</span></a></li>
                                        <li class="dj-up itemid1001"><a class="dj-up_a  " href="#contacts-block"><span>Контакты</span></a></li>
                                        <li class="dj-up itemid1002"><a class="dj-up_a  " href="#reviews-block"><span>Отзывы</span></a></li>
                                        <li class="dj-up itemid1003"><a class="dj-up_a  " href="rabota-v-polshe.html"><span>Работа в Польше</span></a></li>
                                        <li class="dj-up itemid1021"><a class="dj-up_a  " href="rabota-v-chehii.html"><span>Работа в Чехии</span></a></li>
                                        <li class="dj-up itemid1023"><a class="dj-up_a  " href="rabota-v-germanii.html"><span>Работа в Германии</span></a></li>
                                        <li class="dj-up itemid1026"><a class="dj-up_a  " href="rabota-v-slovakii.html"><span>Работа в Словакии</span></a></li>
                                        <li class="dj-up itemid1028 parent separator"><a class="dj-up_a  " tabindex="0"><span class="dj-drop">Другие страны<i class="arrow"></i></span></a>
                                            <div class="dj-subwrap  multiple_cols subcols2">
                                                <div class="dj-subwrap-in" style="width:400px;">
                                                    <div class="dj-subcol" style="width:200px">
                                                        <ul class="dj-submenu">
                                                            <li class="itemid1067 first"><a href="more/rabota-v-gollandii.html">Работа в Голландии</a></li>
                                                            <li class="itemid1068"><a href="more/rabota-v-vengrii.html">Работа в Венгрии</a></li>
                                                            <li class="itemid1080"><a href="more/rabota-v-anglii.html">Работа в Англии</a></li>
                                                            <li class="itemid1012"><a href="more/litva.html">Работа в Литве</a></li>
                                                            <li class="itemid1008"><a href="more/portugal.html">Работа в Португалии</a></li>
                                                            <li class="itemid1015"><a href="more/rabota-v-estonii.html">Работа в Эстонии</a></li>
                                                            <li class="itemid1014"><a href="more/rabota-v-norvegii.html">Работа в Норвегии</a></li>
                                                            <li class="itemid1075"><a href="more/rabota-v-khorvatii.html">Работа в Хорватии</a></li>
                                                            <li class="itemid1017"><a href="more/rabota-v-shvetsii.html">Работа в Швеции</a></li>
                                                            <li class="itemid1019"><a href="more/rabota-v-belgii.html">Работа в Бельгии</a></li>
                                                            <li class="itemid1011"><a href="more/rabota-v-latvii.html">Работа в Латвии</a></li>
                                                            <li class="itemid1016"><a href="more/rabota-v-finlyandii.html">Работа в Финляндии</a></li>
                                                            <li class="itemid1066"><a href="more/rabota-v-danii.html">Работа в Дании</a></li>
                                                            <li class="itemid1020"><a href="more/rabota-v-ispanii.html">Работа в Испании</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dj-subcol" style="width:200px">
                                                        <ul class="dj-submenu">
                                                            <li class="itemid1013 first"><a href="more/rabota-vo-frantsii.html">Работа во Франции</a></li>
                                                            <li class="itemid1071"><a href="more/rabota-v-italii.html">Работа в Италии</a></li>
                                                            <li class="itemid1078"><a href="more/rabota-v-serbii.html">Работа в Сербии</a></li>
                                                            <li class="itemid1074"><a href="more/rabota-v-gretsii.html">Работа в Греции</a></li>
                                                            <li class="itemid1009"><a href="more/switzerland.html">Работа в Швейцарии</a></li>
                                                            <li class="itemid1069"><a href="more/rabota-v-izraile.html">Работа в Израиле</a></li>
                                                        </ul>
                                                    </div>
                                                    <div style="clear:both;height:0"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>



                                    <div id="dj-megamenu307mobile" class="dj-megamenu-accordion dj-megamenu-accordion-light dj-pos-absolute  dj-align-right top_menu_1 no_pc">
                                        <a href="#" class="dj-mobile-open-btn"><i class="fa fa-bars"></i></a>

                                        <div class="dj-accordion dj-accordion-light top_menu_1 no_pc">
                                            <div class="dj-accordion-in">
                                                <ul class="dj-mobile-nav dj-mobile-light top_menu_1 no_pc">
                                                    <li class="dj-mobileitem itemid-997 current active"><a href="index.htm">Главная</a></li>
                                                    <li class="dj-mobileitem itemid-999"><a href="#about-us">О нас</a></li>
                                                    <li class="dj-mobileitem itemid-1001"><a href="#contacts-block">Контакты</a></li>
                                                    <li class="dj-mobileitem itemid-1002"><a href="#reviews-block">Отзывы</a></li>
                                                    
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="jm-module poisk_top nomobil">
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">



                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="span4" data-default="span4" data-wide="span2" data-normal="span2" data-xtablet="span12 first-span" data-tablet="span100 first-span" data-mobile="span100 first-span">
                        <div class="jm-module ">
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">


                                    <div class="custom">
                                        <div class="phone_top"><a href="tel:%20380577550618">+380 97 225 9542</a><br><span><a href="tel:%20380674170038">+38 095 837 25 98</a></span><br><span><a href="tel:%20380506929869">+38 099 837 25 97 </a></span><br><span><a href="tel:%20380639219230">+380 97 226 0870</a></span></div>
                                        <div class="phone_top"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="jm-header" class="">
            <div id="jm-header-in" class="container-fluid">
                <div class="jm-module ">
                    <div class="jm-module-in">
                        <div class="jm-module-content clearfix notitle">


                            <div class="custom">
                                <div class="text_top">Работа в Польше, Германии, Чехии&nbsp;<br>и других странах со 100 % гарантией<br>
                                    <div class="agenstvo">Alliance - агентство по трудоустройству за границей.&nbsp;</div>
                                    Узнайте, как получить работу<br>
                                    <div class="os">
                                        <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;border:none;padding:10px 40px;">Узнать</a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section id="jm-main">
            <div class="container-fluid">
                <div class="row-fluid">
                    <div id="jm-content" class="span12" data-xtablet="span12" data-tablet="span12" data-mobile="span12">
                        <div id="jm-maincontent">
                            <div class="item-page" itemscope="" itemtype="https://schema.org/Article">
                                <meta itemprop="inLanguage" content="ru-RU">





                                <div class="box11_2">
                                    <div class="zagolovok">Мы найдем для Вас работу:</div>
                                    <br>
                                    <div class="hiden_mobil">
                                        <div class="spisok_lang">
                                            <div class="img_lang"><img src="images/2.png.pagespeed.ce.s7xIE5H1Jy.png" alt="1" style="display: block; margin-left: auto; margin-right: auto;"></div>
                                        </div>
                                        <div class="spisok_vozrast">
                                            <div class="img_lang"><img src="images/lang.png.pagespeed.ce.RAGC7xaNY8.png" alt="1" style="display: block; margin-left: auto; margin-right: auto;"></div>
                                            <div class="spisok_work">
                                                <div class="img_lang"><img src="images/opit.png.pagespeed.ce.aCLRMUK0R_.png" alt="1" style="display: block; margin-left: auto; margin-right: auto;"></div>
                                            </div>
                                            <div class="spisok_spec">
                                                <div class="img_lang"><img src="images/spec.png.pagespeed.ce.9UAs0PUn0L.png" alt="1" style="display: block; margin-left: auto; margin-right: auto;"></div>
                                            </div>
                                        </div>
                                        <br><br>
                                    </div>
                                    <div class="no_pc">
                                        <div><img src="images/ln.png.pagespeed.ce.vpFFWWt2gk.png" alt="ln" width="60" height="55" style="margin-right: 10px; margin-left: 10px; float: left;">&nbsp;Даже если Вы не знаете &nbsp;иностранные языки</div>
                                        <br><br>
                                        <div><img src="images/vozrast.png.pagespeed.ce.TYaTBemXq5.png" alt="vozrast" width="60" height="60" style="margin-right: 10px; margin-left: 10px; float: left;">&nbsp;Если Вам от 18 до 60 лет</div>
                                        <br><br>
                                        <div><img src="images/op.png.pagespeed.ce.Xb3I9iiF3g.png" alt="op" width="60" height="50" style="margin-right: 10px; margin-left: 10px; float: left;">&nbsp;Если у Вас нет опыта работы</div>
                                        <br><br>
                                        <div><img src="images/work.png.pagespeed.ce.e_3gKT3oHb.png" alt="work" width="60" height="60" style="margin-right: 10px; margin-left: 10px; float: left;">&nbsp;если Вы специалист в строительстве, производстве или в какой-либо другой сфере деятельности</div>
                                    </div>
                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;">найти вакансию</a></div>
                                    <p>&nbsp;</p>
                                    <div class="box11">
                                        <div class="money_kartinka">
                                            <div class="zagolovok1">
                                                <div class="money"><br>1 125 000 ЕВРО</div>
                                                Такую сумму заработали наши клиенты в Европе
                                            </div>
                                            <br>
                                            <div class="zagolovok1">390 000 ЕВРО<br>Столько бы они заработали в Украине</div>
                                            <br>
                                            <div class="os_1">
                                                <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;border:none;">Начать зарабатывать больше!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div class="box11_1">
                                    <div class="zagolovok">Наши преимущества:</div>
                                    <br><br>
                                    <div class="preim1"><img src="images/galochka3.png.pagespeed.ce.H7PnYvTHpL.png" alt="galochka3" width="80" height="78" class="img_pt" style="vertical-align: middle;">
                                        <div>Полная поддержка клиентов на протяжении всего периода работы - Вы не останетесь одни в чужой стране.</div>
                                    </div>
                                    <div class="preim2"><img src="images/galochka3.png.pagespeed.ce.H7PnYvTHpL.png" alt="galochka3" width="80" height="78" class="img_pt" style="vertical-align: middle;">
                                        <div>Более 200 активных вакансий в 15 странах - оперативно подберём работу индивидуально для каждого клиента под его требования.</div>
                                    </div>

                                    <div class="preim4"><img src="images/galochka3.png.pagespeed.ce.H7PnYvTHpL.png" alt="galochka3" width="80" height="78" class="img_pt" style="vertical-align: middle;">
                                        <div>Работаем официально по лицензии. Заключаем договоры на трудоустройство за границей c полным описанием условий и гарантий.</div>
                                    </div>

                                    <div class="preim4"><img src="images/galochka3.png.pagespeed.ce.H7PnYvTHpL.png" alt="galochka3" width="80" height="78" class="img_pt" style="vertical-align: middle;">
                                        <div>Успешно сотрудничаем с клеинтами из всех регионов Украины.</div>
                                    </div>
                                    <div class="clearfix notitle">&nbsp;</div>
                                </div>
                                <p><br><br></p>
                                <div class="kn"><button class="b24-web-form-popup-btn-4">Получить консультацию</button></div>
                                <p>&nbsp;</p>
                                <div class="zagolovok" id="reviews-block">Наши клиенты</div>
                                <p><br>
                                <div class="moduletable">
                                    <div class="sprocket-features layout-showcase   pagination-active" data-showcase="269">
                                        <ul class="sprocket-features-list">

                                            <li class="sprocket-features-index-1 active" data-showcase-pane="">
                                                <div class="sprocket-features-container">
                                                    <div class="sprocket-features-img-container">
                                                        <img src="images/Raves-rabotavevrope-keys-Mozhar-M.jpg.pagespeed.ce.SrolUQlfU3.jpg" alt="Владислав">
                                                    </div>
                                                    <div class="sprocket-features-content">
                                                        <h2 class="sprocket-features-title">
                                                            Евгений Тонченко</h2>
                                                        <div class="sprocket-features-desc">
                                                            До Швейцарии я работал охранником в местном супермаркете, зарплата была в среднем до 8 000 грн в месяц. Знакомые посоветовали данное кадровое агентство, так как уже неоднократно пользовались их услугами. Мне оперативно подобрали вакансию, сделали визу и сопроводили с куратором к месту работы. Замечательные условия проживания и главное что все русскоговорящие.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Евгений Тонченко, 26 лет, Днепр.&nbsp;&nbsp;</div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="sprocket-features-index-2" data-showcase-pane="">
                                                <div class="sprocket-features-container">
                                                    <div class="sprocket-features-img-container">
                                                        <img src="images/Raves-rabotavevrope-keys-Grishin.JPG.pagespeed.ce.tv9UBekG7R.jpg" alt="Владислав Гришин">
                                                    </div>
                                                    <div class="sprocket-features-content">
                                                        <h2 class="sprocket-features-title">
                                                            Владислав</h2>
                                                        <div class="sprocket-features-desc">
                                                            Решил попробовать поработать за границей, так как уровень зарплат в Украине меня не устраивал.Обратился в Альянс по рекомендации знакомых. Сначала были мелкие сомнения, но особо не переживал. Альянс выполнил свою работу отлично - я получил работу на складе одежды, в комфортных условиях с 10-часовым рабочим днем. Планирую через годик-два мотнуться в Чехию или куда-нибудь еще на заработки.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Владислав Гришин, 25 лет, Харьков.</div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="sprocket-features-index-3" data-showcase-pane="">
                                                <div class="sprocket-features-container">
                                                    <div class="sprocket-features-img-container">
                                                        <img src="images/Rabotavevrope-keys-Filippov.jpg.pagespeed.ce.1YfnilSOGX.jpg" alt="Юрий">
                                                    </div>
                                                    <div class="sprocket-features-content">
                                                        <h2 class="sprocket-features-title">
                                                            Юрий </h2>
                                                        <div class="sprocket-features-desc">
                                                            Поехал за финансовой стабильностью, чтобы больше помогать семье.Мне порекомендовали надёжную компанию Равес, т.к. хотел, чтобы все было безопасно.Очень переживал, что могут быть проблемы с приглашением и работой, потому что был наслышан о таких случаях от друзей, которые сотрудничали с другими агентствами.Очень легко получил визу, без нюансов. При мне отказали товарищу в получении визы из-за недостоверных документов, у меня же все очень легко получилось. По работе все было быстро и понятно, приехал на те условия, о которых договаривались. В процессе, конечно, начали за все высчитывать, но со временем вышел на хороший оклад. Спокойно работал с поляками. Очень много проверок от органов власти, но с моими документами мне ничего не грозило.В скором времени вновь поеду в Польшу на работу, вариантов очень много и хотелось бы поближе к Германии. Продолжу работать по свой специальности. Юрий Филиппов. </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="sprocket-features-index-4" data-showcase-pane="">
                                                <div class="sprocket-features-container">
                                                    <div class="sprocket-features-img-container">
                                                        <img src="images/Raves-rabotavevrope-Volfzon-M.jpg.pagespeed.ce.ZxCvzl817m.jpg" alt="Евгений">
                                                    </div>
                                                    <div class="sprocket-features-content">
                                                        <h2 class="sprocket-features-title">
                                                            Евгений </h2>
                                                        <div class="sprocket-features-desc">
                                                            На поиски работы за границей меня подтолкнула финансовая нестабильность. В нашей стране найти нормальную работу очень тяжело. Я проработал менеджером 3,5 года в пяти различных компаниях. Везде на собеседовании обещают одни цифры, а в итоге выплачивают 3000 и крутись как хочешь. Нет смысла.

                                                            Поэтому перспектива была только ехать работать за границей.

                                                            Обратился в компанию Равес по рекомендации. Моя знакомая раньше к ним обращалась и уже на протяжении 2-х лет ездит за границу. Я подумал - если она уехала и у нее все хорошо, то почему мне не поехать?

                                                            Компания Равес трудоустроила меня «четко, красиво, в сроки, как я и ожидал».

                                                            Сейчас работаю в городе Лодзь на производстве ниток и матрасов. Работаю помощником на производстве. Ставка на этой работе у меня – 2700 зл + переработки и бонусы, в среднем в месяц выходит 4000-5000 зл. Я считаю – это шикарно! Знаю много историй, как людей отправляют на заводы, где они за 1500 зл ставят подвесы на стиральные машины.

                                                            Сейчас я оформляю себе воеводскую визу и планирую вернуться на эту работу.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="sprocket-features-index-5" data-showcase-pane="">
                                                <div class="sprocket-features-container">
                                                    <div class="sprocket-features-img-container">
                                                        <img src="images/Raves-rabotavevrope-Keys-Gripic.jpg.pagespeed.ce.fyZFEddg-M.jpg" alt="Павел">
                                                    </div>
                                                    <div class="sprocket-features-content">
                                                        <h2 class="sprocket-features-title">
                                                            Павел </h2>
                                                        <div class="sprocket-features-desc">
                                                            Решил стабилизировать финансовое положение и заодно посмотреть Европу. В апреле собираюсь отправится посмотреть Голландию.Обратился по рекомендации, решил что так будет намного безопаснее учитывая отзывы о других компаниях.Практически не было опасений, так как я уже сказал ранее, что обращался в заведомо надежную компанию.В результате я получил постоянную и подробную консультацию. Подробные ответы на вопросы, огромное количество информации по трудоустройству.Не пришлось делать все это самостоятельно. Поддержка была на каждом этапе. Особенно оперативно помогли в критичной ситуации. Сопровождали еще очень долго после начала моей работы в Польше и регулярно интересовались как у меня дела.Собираюсь работать долго, тем более сделал карту побыту до 2020 года, хочу еще параллельно учиться в Польской полициальной школе.Работу менять не хочу, так как меня все полностью устраивает, очень хорошее отношение и зарплата вполне достойная. В ближайшие несколько лет планирую перевозить свою семью, мои дочери тоже очень хотят переехать в Польшу. Старшая уже скоро будет перебираться ко мне. Павел Грипич </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="sprocket-features-pagination">
                                            <ul>
                                                <li class="active" data-showcase-pagination="1"><span>1</span></li>
                                                <li data-showcase-pagination="2"><span>2</span></li>
                                                <li data-showcase-pagination="3"><span>3</span></li>
                                                <li data-showcase-pagination="4"><span>4</span></li>
                                                <li data-showcase-pagination="5"><span>5</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>




                                <div class="zagolovok" id="about-us">Наша команда</div>
                                <p style="text-align: center;"><img src="images/Rabotavevrope-Novy-ofis-1-Raves-home.jpg.pagespeed.ce.OAgLeZZNK6.jpg" alt="Alliance  - работа в Европе - новый офис - Пушкинская 22" width="400" height="300"><img src="images/Rabotavevrope-ofis-plakat-Raves-2-400.jpg.pagespeed.ce.NU9cH7WZNE.jpg" alt="Alliance - работа в Европе - офис фото 2 брендированный" width="400" height="300"><img src="images/Rabotavevrope-Novy-ofis-3-Raves-home.jpg.pagespeed.ce.4vrShI81md.jpg" alt="Работа в Европе - Новый офис - Alliance -Главная -4" width="400" height="300"></p>
                                <p>
                                <div class="sprocket-strips-s" data-strips="279">
                                    <div class="sprocket-strips-s-overlay">
                                        <div class="css-loader-wrapper">
                                            <div class="css-loader"></div>
                                        </div>
                                    </div>
                                    <ul class="sprocket-strips-s-container cols-4" data-strips-items="">
                                        <li class="sprocket-strips-s-block" data-strips-item="">
                                            <div class="sprocket-strips-s-item" data-strips-content="">
                                                <img src="images/Raves-rabotavevrope-Konstantin.png.pagespeed.ce.Z5H7WPy2kP.png" alt="Константин">
                                                <div class="sprocket-strips-s-content">
                                                    <h4 class="sprocket-strips-s-title" data-strips-toggler="">
                                                        Константин </h4>
                                                    <span class="sprocket-strips-s-text">
                                                        Директор </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="sprocket-strips-s-block" data-strips-item="">
                                            <div class="sprocket-strips-s-item" data-strips-content="">
                                                <img src="images/Raves-rabotavevrope-Ludmila.png.pagespeed.ce.RgY9oaEWFT.png" alt="Людмила">
                                                <div class="sprocket-strips-s-content">
                                                    <h4 class="sprocket-strips-s-title" data-strips-toggler="">
                                                        Людмила </h4>
                                                    <span class="sprocket-strips-s-text">
                                                        Менеджер по трудоустройству </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="sprocket-strips-s-block" data-strips-item="">
                                            <div class="sprocket-strips-s-item" data-strips-content="">
                                                <img src="images/Raves-rabotavevrope-Julia.png.pagespeed.ce.3l3UsvnDXJ.png" alt="Юлия">
                                                <div class="sprocket-strips-s-content">
                                                    <h4 class="sprocket-strips-s-title" data-strips-toggler="">
                                                        Юлия </h4>
                                                    <span class="sprocket-strips-s-text">
                                                        Менеджер по трудоустройству </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="sprocket-strips-s-block" data-strips-item="">
                                            <div class="sprocket-strips-s-item" data-strips-content="">
                                                <img src="images/Rabotavevrope-Tatiana-Raves-300.jpg.pagespeed.ce.9zwb9EhR5k.jpg" alt="Татьяна">
                                                <div class="sprocket-strips-s-content">
                                                    <h4 class="sprocket-strips-s-title" data-strips-toggler="">
                                                        Татьяна </h4>
                                                    <span class="sprocket-strips-s-text">
                                                        Менеджер по трудоустройству </span>
                                                </div>
                                            </div>
                                        </li>

                                       
                                 

                                    </ul>

                                </div>
                                <br><br>

                                <div class="zagolovok">Возможно Вам интересно</div>
                                <p>
                                <div class="sprocket-lists" data-lists="276">
                                    <ul class="sprocket-lists-container" data-lists-items="">
                                        <li class="active" data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                1. Меня будут встречать? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Конечно. Каждому клиенту мы предоставляем куратора, который будет встречать, помогать с заселением и оформлением на вакансию <br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                2. Как лучше добраться? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Мы подробно прописываем маршрутный лист, который позволит минимизировать время и средства на проезд к месту работы<br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                3. Как позвонить родным? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Мы выдаём нашим клиентам иностранную сим-карту, которая позволит по приезду связаться с куратором и родными <br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                4. Как переводить деньги в Украину? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Можно сделать в Украине карту иностранного банка, и на нее переводить деньги из-за границы. <br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                5. Какие гарантии? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Мы предоставляем 100 % гарантию качества услуг, которая прописывается в договоре <br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                6. Какие условия проживания? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    В большинстве случаев работодатели предоставляют бесплатное проживание в хостелах европейского образца или квартирах по 2-4 человека в комнате <br> <br>
                                                    <div class="kn"> <button class="b24-web-form-popup-btn-4"> Остались вопросы?</button></div><span class="roksprocket-ellipsis">…</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                7. Дают ли авансы? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Авансы дают редко. Чаще всего зарплата начисляется в конце месяца<br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                8. Как можно остаться работать после окончания визы? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    Мы можем подобрать для Вас вакансии, на которых работодатели заинтересованы в продлении визы своих работников<br><br>
                                                    <div class="kn"><a href="#main-form" class="b24-web-form-popup-btn-4" style="color:#fff;background-color:#2B698B;text-decoration:none;">Остались вопросы? Пишите...</a></div><br><br>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-lists-item="">
                                            <h4 class="sprocket-lists-title padding" data-lists-toggler="">
                                                9. Сколько брать с собой денег? <span class="indicator"><span>+</span></span> </h4>
                                            <div class="sprocket-lists-item" data-lists-content="">
                                                <div class="sprocket-padding">
                                                    В Польше, Чехии и Словакии хватит 100-150 евро на питание до первой зарплаты. В странах Западной Европы - около 300 евро<span class="roksprocket-ellipsis">…</span> </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="sprocket-lists-nav">
                                        <div class="sprocket-lists-pagination-hidden">
                                            <ul>
                                                <li class="active" data-lists-page="1"><span>1</span></li>
                                            </ul>
                                        </div>
                                        <div class="spinner"></div>
                                    </div>
                                </div>
                                <br><br>




                            </div>
                        </div>
                        <div id="jm-content-bottom" class="">
                            <div class="jm-module ">
                                <div class="jm-module-in">
                                    <div class="jm-module-content clearfix notitle" style="background-color:#2B698B;">
                                        <!-- PWebContact -->





                                        <section style="display:flex;justify-content:center;" class="main-form" id="main-form">


                                            <div>
                                                <div class="b24-form-header-padding"></div>
                                                <div class="b24-form-content b24-form-padding-side">
                                                    <form method="post" action="sendform.php">
                                                        <!---->
                                                        <div>
                                                            <div class="b24-form-field b24-form-field-name b24-form-control-string" style="padding:20px 0px;">
                                                                <div>
                                                                    <div>
                                                                        <div class="b24-form-control-container b24-form-control-icon-after"><input name="name" type="text" placeholder="Имя">
                                                                        </div>
                                                                    </div>
                                                                    <!---->
                                                                </div>
                                                                <!---->
                                                            </div>


                                                            <div class="b24-form-field b24-form-field-phone b24-form-control-string" style="padding:20px 0px;">
                                                                <div>
                                                                    <div>
                                                                        <div class="b24-form-control-container b24-form-control-icon-after"><input name="phone" type="tel" placeholder="Телефон">





                                                                        </div>
                                                                    </div>
                                                                    <!---->
                                                                </div>
                                                                <!---->
                                                            </div>
                                                            <div class="b24-form-field b24-form-field-string b24-form-control-string" style="padding:20px 0px;">
                                                                <div>
                                                                    <div>
                                                                        <div class="b24-form-control-container b24-form-control-icon-after"><input type="text" name="city" placeholder="Город">

                                                                            <!---->
                                                                            <!---->

                                                                        </div>
                                                                    </div>
                                                                    <!---->
                                                                </div>
                                                                <!---->
                                                            </div>
                                                            <div class="b24-form-field b24-form-field-email b24-form-control-string" style="padding:20px 0px;">
                                                                <div>
                                                                    <div>
                                                                        <div class="b24-form-control-container b24-form-control-icon-after"><input name="email" type="email" placeholder="Email">


                                                                        </div>
                                                                    </div>
                                                                    <!---->
                                                                </div>
                                                                <!---->
                                                            </div>

                                                            
                                                        </div>

                                                        <!---->
                                                        <div class="b24-form-btn-container">
                                                            <!---->
                                                            <!---->
                                                            <div class=""><button type="submit">
                                                                    Отправить
                                                                </button></div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <!---->
                                                <!---->
                                            </div>
                                        </section>





                                        <div id="pwebcontact288" class="pwebcontact  pweb-accordion pweb-labels-over pweb-bg-white pweb-form-blue pweb-icomoon pweb-radius pweb-shadow" dir="ltr">


                                            <div id="pwebcontact288_box" class="pwebcontact-box pweb-accordion pweb-labels-over pweb-bg-white pweb-form-blue pweb-icomoon pweb-radius pweb-shadow pweb-accordion-boxed pweb-init" dir="ltr">
                                                <div id="pwebcontact288_container" class="pwebcontact-container">

                                                    <button type="button" class="pwebcontact288_toggler pweb-button-close" aria-hidden="true" data-role="none">&times;</button>

                                                    <div class="pweb-arrow"></div>
                                                    <form name="pwebcontact288_form" id="pwebcontact288_form" class="pwebcontact-form" action="sendform.php" method="post" accept-charset="utf-8">


                                                        <div class="pweb-fields">
                                                            <div class="pweb-field-container pweb-field-name pweb-field-name">
                                                                <div class="pweb-label">
                                                                    <label id="pwebcontact288_field-name-lbl" for="pwebcontact288_field-name">
                                                                        Ваше имя <span class="pweb-asterisk">*</span> </label>
                                                                </div>
                                                                <div class="pweb-field">
                                                                    <input type="text" name="fields[name]" id="pwebcontact288_field-name" class="pweb-input required" value="" data-role="none">
                                                                </div>
                                                            </div>
                                                            <div class="pweb-field-container pweb-field-email pweb-field-email">
                                                                <div class="pweb-label">
                                                                    <label id="pwebcontact288_field-email-lbl" for="pwebcontact288_field-email">
                                                                        E-mail <span class="pweb-asterisk">*</span> </label>
                                                                </div>
                                                                <div class="pweb-field">
                                                                    <input type="email" name="fields[email]" id="pwebcontact288_field-email" class="pweb-input required" value="" data-role="none">
                                                                </div>
                                                            </div>
                                                            <div class="pweb-field-container pweb-field-phone pweb-field-phone">
                                                                <div class="pweb-label">
                                                                    <label id="pwebcontact288_field-phone-lbl" for="pwebcontact288_field-phone">
                                                                        Ваш номер телефона <span class="pweb-asterisk">*</span> </label>
                                                                </div>
                                                                <div class="pweb-field">
                                                                    <input type="tel" name="fields[phone]" id="pwebcontact288_field-phone" class="pweb-input required pweb288-validate-phone" value="" data-role="none">
                                                                </div>
                                                            </div>
                                                            <div class="pweb-field-container pweb-field-textarea pweb-field-message">
                                                                <div class="pweb-label">
                                                                    <label id="pwebcontact288_field-message-lbl" for="pwebcontact288_field-message">
                                                                        Текст сообщения </label>
                                                                </div>
                                                                <div class="pweb-field">
                                                                    <textarea name="fields[message]" id="pwebcontact288_field-message" cols="50" rows="5" maxlength="1000" data-role="none"></textarea>
                                                                    <div class="pweb-chars-counter"><span id="pwebcontact288_field-message-limit">1000</span> максимум символов</div>

                                                                </div>
                                                            </div>
                                                            <div class="pweb-field-container pweb-field-captcha">
                                                                <div class="pweb-label">
                                                                    <label for="pwebcontact288_captcha" id="pwebcontact288_captcha-lbl">
                                                                        Мы хотим убедиться, что Вы не робот. Введите защитный код с картинки <span class="pweb-asterisk">*</span>
                                                                    </label>
                                                                </div>
                                                                <div class="pweb-field pweb-captcha">
                                                                    <div id="pwebcontact288_captcha" class="pweb-input required" style="min-height:78px;min-width:304px"></div>
                                                                </div>
                                                            </div>
                                                            <div class="pweb-field-container pweb-field-buttons">
                                                                <div class="pweb-field">
                                                                    <button id="pwebcontact288_send" type="button" class="button1" data-role="none">Отправить</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="pweb-msg pweb-msg-after">
                                                            <div id="pwebcontact288_msg" class="pweb-progress">
                                                                <script type="text/javascript">
                                                                    document.getElementById("pwebcontact288_msg").innerHTML = "Инициализация отправки формы..."
                                                                </script>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" name="1de44cd697489a0c17633fc130e9fff1" value="1" id="pwebcontact288_token">
                                                    </form>


                                                </div>
                                            </div>
                                        </div>

                                        <script type="text/javascript">
                                            jQuery(document).ready(function($) {
                                                pwebContact288 = new pwebContact({
                                                    id: 288,
                                                    layout: "accordion",
                                                    position: "static",
                                                    offsetPosition: "top",
                                                    basePath: "",
                                                    ajaxUrl: "index.php?option=com_ajax&module=pwebcontact&Itemid=435&lang=ru-RU&method=",
                                                    redirectURL: "/spasibo-za-obrashchenie.html",
                                                    captcha: "grecaptcha",
                                                    validatorRules: [{
                                                        name: "phone",
                                                        regexp: /[\d\-\+() ]+/
                                                    }]
                                                })
                                            });
                                        </script>
                                        <!-- PWebContact end -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="comments">
            <div class="container-fluid">
                <div class="comments-form">
                    <h2 style="font-family:'Monserrat',sans-serif;">Оставить комментарий</h2>
                    <form action="sendform.php" method="post" >
                        <input type="text" name="name" placeholder="Имя">
                        <input type="email" name="email" placeholder="Email">
                        <input type="text" name="comment" placeholder="Комментарий">
                        <button type="submit">Отправить</button>
                    </form>
                </div>

                
        
                




                <?php 
                    while($record = mysqli_fetch_assoc($result)){
                ?>

                <div class="comment">
                    <h3 style="font-family:'Monserrat',sans-serif;font-size:20px;"> <?php echo '' .$record['Name'].''; ?><span style="font-weight:400;font-size:16px;"> <?php echo '' .$record['Time'].'';?></span></h2>
                    <p style="font-size:20px;font-family:'Monserrat',sans-serif;"><?php echo ''.$record['Comment'].''; ?></p>
                </div>

                <?php        
                    }

                ?>
                


            </div>


                
            

        </section>

        <style>
            .comments-form{
                margin-top:20px;
                margin-bottom:50px;
            }
            .comments{
                background-color:#d8e3e7;
                padding-bottom:25px;
            }
            .comment{
                padding:20px 10px;
                background-color:#f8f5f1;
                
                border-bottom:0.5px solid #000;
            }
        </style>




        <section >
            <div class="container-fluid">
                <div class="row-fluid jm-flexiblock jm-bottom2">
                    <div class="span12" data-default="span12" data-wide="span12" data-normal="span12" data-xtablet="span12" data-tablet="span100" data-mobile="span100">
                        <div class="jm-module menu_footer">
                            <div class="jm-module-in">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="jm-footer-mod">
            <div id="jm-footer-mod-in" class="container-fluid">
                <div class="row-fluid jm-flexiblock jm-footer">
                    <div class="span4" data-default="span4" data-wide="span4" data-normal="span4" data-xtablet="span4" data-tablet="span100" data-mobile="span100">
                        <div class="jm-module" >
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">


                                    <div class="custom">
                                        <div class="phone_top" style="text-align: center;"><span><a href="tel:%20380577550618">+380 97 225 9542</a></span><br><span><a href="tel:%20380674170038">+38 097 225 98 14 - viber, Telegram</a></span><br><span><a href="tel:%20380506929869">+38 095 837 25 98 - viber, Telegram</a></span><br><span><a href="tel:%20380639219230">+38 099 837 25 97</a>&nbsp;- viber, Telegram</span></div>
                                        <div style="text-align: center;">E-mail: <a href="mailto:malutinaa1927@gmail.com">malutinaa1927@gmail.com</a><a href="mailto:malutinaa1927@gmail.com"></a></div>
                                        <div style="text-align: center;"><a href="index-1.htm?g2=AQBYvz%2FsbXA41Ux%2Bbgsgv52NubzswGbF1IJwSK3VRfz9JRBDgqvyEh6tmOwJvs2f" 20="" 20https:="" invite="" viber="" com="" g2="AQBYvz%2FsbXA41Ux%2Bbgsgv52NubzswGbF1IJwSK3VRfz9JRBDgqvyEh6tmOwJvs2f" ""="" target="_blank">Отзывы о нас</a></div>

                                        <div style="te
                                        <p style="text-align: center;"><span class="bx-messenger-content-item-text-message" style="line-height: 19px; background-color: #fbfbfb;"><span class="bx-messenger-content-item-text-wrap "></span></span></span></p>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="span4"  data-default="span4" data-wide="span4" data-normal="span4" data-xtablet="span4" data-tablet="span50 first-span" data-mobile="span50 first-span">
                        <div class="jm-module ">
                            <div class="jm-module-in">
                                <div class="jm-module-content clearfix notitle">


                                    <div class="custom">







                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>





                

            </div>
    </div>
    </section>





    <footer id="contacts-block" >
        <div id="jm-footer-in" class="container-fluid">
            <div id="jm-copyrights" class="pull-left ">


                <div class="custom">
                    <p>All Rights Reserved.</p>
                </div>

            </div>
            <div id="jm-poweredby" class="pull-left">
                <a href="#" target="_blank" title="Работа в Европе">Работа в Европе</a>, поиск работы за границей.
            </div>
            <div id="jm-social" class="pull-right ">
                <div class="jm-module-raw ">


                    <div class="custom">
                    </div>
                </div>

            </div>
        </div>
    </footer>
    <div id="jm-back-top">
        <a href="#top"><span>&nbsp;</span></a>
    </div>
    <div class="os_kn">

    </div>


    <!--<script id="bx24_form_button" data-skip-moving="true">(function(w,d,u,b){w['Bitrix24FormObject']=b;w[b]=w[b]||function(){arguments[0].ref=u;(w[b].forms=w[b].forms||[]).push(arguments[0])};if(w[b]['forms'])return;var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://bvskharkov.bitrix24.ua/bitrix/js/crm/form_loader.js','b24form');b24form({"id":"10","lang":"ru","sec":"d046no","type":"button","click":""});</script>
  <script id="bx24_form_button" data-skip-moving="true">(function(w,d,u,b){w['Bitrix24FormObject']=b;w[b]=w[b]||function(){arguments[0].ref=u;(w[b].forms=w[b].forms||[]).push(arguments[0])};if(w[b]['forms'])return;var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://bvskharkov.bitrix24.ua/bitrix/js/crm/form_loader.js','b24form');b24form({"id":"4","lang":"ru","sec":"dcbt2t","type":"button","click":""});</script>
<script id="bx24_form_button" data-skip-moving="true">(function(w,d,u,b){w['Bitrix24FormObject']=b;w[b]=w[b]||function(){arguments[0].ref=u;(w[b].forms=w[b].forms||[]).push(arguments[0])};if(w[b]['forms'])return;var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://bvskharkov.bitrix24.ua/bitrix/js/crm/form_loader.js','b24form');b24form({"id":"8","lang":"ru","sec":"84sq2b","type":"button","click":""});</script>  	-->
    </div>

    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <script>
        $(document).ready(function() {
            $("form").submit(function() { // Событие отправки с формы
                var form_data = $(this).serialize(); // Собираем данные из полей
                $.ajax({
                    type: "POST", // Метод отправки
                    url: "sendform.php", // Путь к PHP обработчику sendform.php
                    data: form_data,
                    success: function() {
                        alert('Спасибо за заявку');
                    }
                });
                event.preventDefault();
            });
        });
    </script>
</body>

</html>
