; /* Start:"a:4:{s:4:"full";s:46:"/js/highslide/highslide.min.js?159479575137676";s:6:"source";s:26:"/js/highslide/highslide.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/******************************************************************************
Name:    Highslide JS
Version: 4.1.8 (October 27 2009)
Config:  default
Author:  Torstein Hønsi
Support: http://highslide.com/support

Licence:
Highslide JS is licensed under a Creative Commons Attribution-NonCommercial 2.5
License (http://creativecommons.org/licenses/by-nc/2.5/).

You are free:
	* to copy, distribute, display, and perform the work
	* to make derivative works

Under the following conditions:
	* Attribution. You must attribute the work in the manner  specified by  the
	  author or licensor.
	* Noncommercial. You may not use this work for commercial purposes.

* For  any  reuse  or  distribution, you  must make clear to others the license
  terms of this work.
* Any  of  these  conditions  can  be  waived  if  you  get permission from the 
  copyright holder.

Your fair use and other rights are in no way affected by the above.
******************************************************************************/
if (!hs) {
    var hs = {
        lang: {
            cssDirection: "ltr",
            loadingText: "Loading...",
            loadingTitle: "Click to cancel",
            focusTitle: "Click to bring to front",
            fullExpandTitle: "Expand to actual size (f)",
            creditsText: "Powered by <i>Highslide JS</i>",
            creditsTitle: "Go to the Highslide JS homepage",
            restoreTitle: "Click to close image, click and drag to move. Use arrow keys for next and previous."
        },
        graphicsDir: "highslide/graphics/",
        expandCursor: "zoomin.cur",
        restoreCursor: "zoomout.cur",
        expandDuration: 250,
        restoreDuration: 250,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        zIndexCounter: 1001,
        loadingOpacity: 0.75,
        allowMultipleInstances: true,
        numberOfImagesToPreload: 5,
        outlineWhileAnimating: 2,
        outlineStartOffset: 3,
        padToMinWidth: false,
        fullExpandPosition: "bottom right",
        fullExpandOpacity: 1,
        showCredits: true,
        creditsHref: "http://highslide.com/",
        creditsTarget: "_self",
        enableKeyListener: true,
        openerTagNames: ["a"],
        dragByHeading: true,
        minWidth: 200,
        minHeight: 200,
        allowSizeReduction: true,
        outlineType: "drop-shadow",
        preloadTheseImages: [],
        continuePreloading: true,
        expanders: [],
        overrides: ["allowSizeReduction", "useBox", "outlineType", "outlineWhileAnimating", "captionId", "captionText", "captionEval", "captionOverlay", "headingId", "headingText", "headingEval", "headingOverlay", "creditsPosition", "dragByHeading", "width", "height", "wrapperClassName", "minWidth", "minHeight", "maxWidth", "maxHeight", "slideshowGroup", "easing", "easingClose", "fadeInOut", "src"],
        overlays: [],
        idCounter: 0,
        oPos: {
            x: ["leftpanel", "left", "center", "right", "rightpanel"],
            y: ["above", "top", "middle", "bottom", "below"]
        },
        mouse: {},
        headingOverlay: {},
        captionOverlay: {},
        timers: [],
        pendingOutlines: {},
        clones: {},
        onReady: [],
        uaVersion: /Trident\/4\.0/.test(navigator.userAgent) ? 8 : parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]),
        ie: (document.all && !window.opera),
        safari: /Safari/.test(navigator.userAgent),
        geckoMac: /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),
        $: function(a) {
            if (a) {
                return document.getElementById(a)
            }
        },
        push: function(a, b) {
            a[a.length] = b
        },
        createElement: function(a, f, e, d, c) {
            var b = document.createElement(a);
            if (f) {
                hs.extend(b, f)
            }
            if (c) {
                hs.setStyles(b, {
                    padding: 0,
                    border: "none",
                    margin: 0
                })
            }
            if (e) {
                hs.setStyles(b, e)
            }
            if (d) {
                d.appendChild(b)
            }
            return b
        },
        extend: function(b, c) {
            for (var a in c) {
                b[a] = c[a]
            }
            return b
        },
        setStyles: function(b, c) {
            for (var a in c) {
                if (hs.ie && a == "opacity") {
                    if (c[a] > 0.99) {
                        b.style.removeAttribute("filter")
                    } else {
                        b.style.filter = "alpha(opacity=" + (c[a] * 100) + ")"
                    }
                } else {
                    b.style[a] = c[a]
                }
            }
        },
        animate: function(f, a, d) {
            var c, g, j;
            if (typeof d != "object" || d === null) {
                var i = arguments;
                d = {
                    duration: i[2],
                    easing: i[3],
                    complete: i[4]
                }
            }
            if (typeof d.duration != "number") {
                d.duration = 250
            }
            d.easing = Math[d.easing] || Math.easeInQuad;
            d.curAnim = hs.extend({}, a);
            for (var b in a) {
                var h = new hs.fx(f, d, b);
                c = parseFloat(hs.css(f, b)) || 0;
                g = parseFloat(a[b]);
                j = b != "opacity" ? "px" : "";
                h.custom(c, g, j)
            }
        },
        css: function(a, c) {
            if (document.defaultView) {
                return document.defaultView.getComputedStyle(a, null).getPropertyValue(c)
            } else {
                if (c == "opacity") {
                    c = "filter"
                }
                var b = a.currentStyle[c.replace(/\-(\w)/g, function(e, d) {
                    return d.toUpperCase()
                })];
                if (c == "filter") {
                    b = b.replace(/alpha\(opacity=([0-9]+)\)/, function(e, d) {
                        return d / 100
                    })
                }
                return b === "" ? 1 : b
            }
        },
        getPageSize: function() {
            var f = document,
                b = window,
                e = f.compatMode && f.compatMode != "BackCompat" ? f.documentElement : f.body;
            var c = hs.ie ? e.clientWidth : (f.documentElement.clientWidth || self.innerWidth),
                a = hs.ie ? e.clientHeight : self.innerHeight;
            hs.page = {
                width: c,
                height: a,
                scrollLeft: hs.ie ? e.scrollLeft : pageXOffset,
                scrollTop: hs.ie ? e.scrollTop : pageYOffset
            }
        },
        getPosition: function(a) {
            var b = {
                x: a.offsetLeft,
                y: a.offsetTop
            };
            while (a.offsetParent) {
                a = a.offsetParent;
                b.x += a.offsetLeft;
                b.y += a.offsetTop;
                if (a != document.body && a != document.documentElement) {
                    b.x -= a.scrollLeft;
                    b.y -= a.scrollTop
                }
            }
            return b
        },
        expand: function(b, g, d, c) {
            if (!b) {
                b = hs.createElement("a", null, {
                    display: "none"
                }, hs.container)
            }
            if (typeof b.getParams == "function") {
                return g
            }
            try {
                new hs.Expander(b, g, d);
                return false
            } catch (f) {
                return true
            }
        },
        focusTopmost: function() {
            var c = 0,
                b = -1,
                a = hs.expanders,
                e, f;
            for (var d = 0; d < a.length; d++) {
                e = a[d];
                if (e) {
                    f = e.wrapper.style.zIndex;
                    if (f && f > c) {
                        c = f;
                        b = d
                    }
                }
            }
            if (b == -1) {
                hs.focusKey = -1
            } else {
                a[b].focus()
            }
        },
        getParam: function(b, d) {
            b.getParams = b.onclick;
            var c = b.getParams ? b.getParams() : null;
            b.getParams = null;
            return (c && typeof c[d] != "undefined") ? c[d] : (typeof hs[d] != "undefined" ? hs[d] : null)
        },
        getSrc: function(b) {
            var c = hs.getParam(b, "src");
            if (c) {
                return c
            }
            return b.href
        },
        getNode: function(e) {
            var c = hs.$(e),
                d = hs.clones[e],
                b = {};
            if (!c && !d) {
                return null
            }
            if (!d) {
                d = c.cloneNode(true);
                d.id = "";
                hs.clones[e] = d;
                return c
            } else {
                return d.cloneNode(true)
            }
        },
        discardElement: function(a) {
            if (a) {
                hs.garbageBin.appendChild(a)
            }
            hs.garbageBin.innerHTML = ""
        },
        transit: function(a, d) {
            var b = d = d || hs.getExpander();
            if (hs.upcoming) {
                return false
            } else {
                hs.last = b
            }
            try {
                hs.upcoming = a;
                a.onclick()
            } catch (c) {
                hs.last = hs.upcoming = null
            }
            try {
                d.close()
            } catch (c) {}
            return false
        },
        previousOrNext: function(a, c) {
            var b = hs.getExpander(a);
            if (b) {
                return hs.transit(b.getAdjacentAnchor(c), b)
            } else {
                return false
            }
        },
        previous: function(a) {
            return hs.previousOrNext(a, -1)
        },
        next: function(a) {
            return hs.previousOrNext(a, 1)
        },
        keyHandler: function(a) {
            if (!a) {
                a = window.event
            }
            if (!a.target) {
                a.target = a.srcElement
            }
            if (typeof a.target.form != "undefined") {
                return true
            }
            var b = hs.getExpander();
            var c = null;
            switch (a.keyCode) {
                case 70:
                    if (b) {
                        b.doFullExpand()
                    }
                    return true;
                case 32:
                case 34:
                case 39:
                case 40:
                    c = 1;
                    break;
                case 8:
                case 33:
                case 37:
                case 38:
                    c = -1;
                    break;
                case 27:
                case 13:
                    c = 0
            }
            if (c !== null) {
                hs.removeEventListener(document, window.opera ? "keypress" : "keydown", hs.keyHandler);
                if (!hs.enableKeyListener) {
                    return true
                }
                if (a.preventDefault) {
                    a.preventDefault()
                } else {
                    a.returnValue = false
                }
                if (b) {
                    if (c == 0) {
                        b.close()
                    } else {
                        hs.previousOrNext(b.key, c)
                    }
                    return false
                }
            }
            return true
        },
        registerOverlay: function(a) {
            hs.push(hs.overlays, hs.extend(a, {
                hsId: "hsId" + hs.idCounter++
            }))
        },
        getWrapperKey: function(c, b) {
            var e, d = /^highslide-wrapper-([0-9]+)$/;
            e = c;
            while (e.parentNode) {
                if (e.id && d.test(e.id)) {
                    return e.id.replace(d, "$1")
                }
                e = e.parentNode
            }
            if (!b) {
                e = c;
                while (e.parentNode) {
                    if (e.tagName && hs.isHsAnchor(e)) {
                        for (var a = 0; a < hs.expanders.length; a++) {
                            var f = hs.expanders[a];
                            if (f && f.a == e) {
                                return a
                            }
                        }
                    }
                    e = e.parentNode
                }
            }
            return null
        },
        getExpander: function(b, a) {
            if (typeof b == "undefined") {
                return hs.expanders[hs.focusKey] || null
            }
            if (typeof b == "number") {
                return hs.expanders[b] || null
            }
            if (typeof b == "string") {
                b = hs.$(b)
            }
            return hs.expanders[hs.getWrapperKey(b, a)] || null
        },
        isHsAnchor: function(b) {
            return (b.onclick && b.onclick.toString().replace(/\s/g, " ").match(/hs.(htmlE|e)xpand/))
        },
        reOrder: function() {
            for (var a = 0; a < hs.expanders.length; a++) {
                if (hs.expanders[a] && hs.expanders[a].isExpanded) {
                    hs.focusTopmost()
                }
            }
        },
        mouseClickHandler: function(d) {
            if (!d) {
                d = window.event
            }
            if (d.button > 1) {
                return true
            }
            if (!d.target) {
                d.target = d.srcElement
            }
            var b = d.target;
            while (b.parentNode && !(/highslide-(image|move|html|resize)/.test(b.className))) {
                b = b.parentNode
            }
            var f = hs.getExpander(b);
            if (f && (f.isClosing || !f.isExpanded)) {
                return true
            }
            if (f && d.type == "mousedown") {
                if (d.target.form) {
                    return true
                }
                var a = b.className.match(/highslide-(image|move|resize)/);
                if (a) {
                    hs.dragArgs = {
                        exp: f,
                        type: a[1],
                        left: f.x.pos,
                        width: f.x.size,
                        top: f.y.pos,
                        height: f.y.size,
                        clickX: d.clientX,
                        clickY: d.clientY
                    };
                    hs.addEventListener(document, "mousemove", hs.dragHandler);
                    if (d.preventDefault) {
                        d.preventDefault()
                    }
                    if (/highslide-(image|html)-blur/.test(f.content.className)) {
                        f.focus();
                        hs.hasFocused = true
                    }
                    return false
                }
            } else {
                if (d.type == "mouseup") {
                    hs.removeEventListener(document, "mousemove", hs.dragHandler);
                    if (hs.dragArgs) {
                        if (hs.styleRestoreCursor && hs.dragArgs.type == "image") {
                            hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor
                        }
                        var c = hs.dragArgs.hasDragged;
                        if (!c && !hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) {
                            f.close()
                        } else {
                            if (c || (!c && hs.hasHtmlExpanders)) {
                                hs.dragArgs.exp.doShowHide("hidden")
                            }
                        }
                        hs.hasFocused = false;
                        hs.dragArgs = null
                    } else {
                        if (/highslide-image-blur/.test(b.className)) {
                            b.style.cursor = hs.styleRestoreCursor
                        }
                    }
                }
            }
            return false
        },
        dragHandler: function(c) {
            if (!hs.dragArgs) {
                return true
            }
            if (!c) {
                c = window.event
            }
            var b = hs.dragArgs,
                d = b.exp;
            b.dX = c.clientX - b.clickX;
            b.dY = c.clientY - b.clickY;
            var f = Math.sqrt(Math.pow(b.dX, 2) + Math.pow(b.dY, 2));
            if (!b.hasDragged) {
                b.hasDragged = (b.type != "image" && f > 0) || (f > (hs.dragSensitivity || 5))
            }
            if (b.hasDragged && c.clientX > 5 && c.clientY > 5) {
                if (b.type == "resize") {
                    d.resize(b)
                } else {
                    d.moveTo(b.left + b.dX, b.top + b.dY);
                    if (b.type == "image") {
                        d.content.style.cursor = "move"
                    }
                }
            }
            return false
        },
        wrapperMouseHandler: function(c) {
            try {
                if (!c) {
                    c = window.event
                }
                var b = /mouseover/i.test(c.type);
                if (!c.target) {
                    c.target = c.srcElement
                }
                if (hs.ie) {
                    c.relatedTarget = b ? c.fromElement : c.toElement
                }
                var d = hs.getExpander(c.target);
                if (!d.isExpanded) {
                    return
                }
                if (!d || !c.relatedTarget || hs.getExpander(c.relatedTarget, true) == d || hs.dragArgs) {
                    return
                }
                for (var a = 0; a < d.overlays.length; a++) {
                    (function() {
                        var e = hs.$("hsId" + d.overlays[a]);
                        if (e && e.hideOnMouseOut) {
                            if (b) {
                                hs.setStyles(e, {
                                    visibility: "visible",
                                    display: ""
                                })
                            }
                            hs.animate(e, {
                                opacity: b ? e.opacity : 0
                            }, e.dur)
                        }
                    })()
                }
            } catch (c) {}
        },
        addEventListener: function(a, c, b) {
            if (a == document && c == "ready") {
                hs.push(hs.onReady, b)
            }
            try {
                a.addEventListener(c, b, false)
            } catch (d) {
                try {
                    a.detachEvent("on" + c, b);
                    a.attachEvent("on" + c, b)
                } catch (d) {
                    a["on" + c] = b
                }
            }
        },
        removeEventListener: function(a, c, b) {
            try {
                a.removeEventListener(c, b, false)
            } catch (d) {
                try {
                    a.detachEvent("on" + c, b)
                } catch (d) {
                    a["on" + c] = null
                }
            }
        },
        preloadFullImage: function(b) {
            if (hs.continuePreloading && hs.preloadTheseImages[b] && hs.preloadTheseImages[b] != "undefined") {
                var a = document.createElement("img");
                a.onload = function() {
                    a = null;
                    hs.preloadFullImage(b + 1)
                };
                a.src = hs.preloadTheseImages[b]
            }
        },
        preloadImages: function(c) {
            if (c && typeof c != "object") {
                hs.numberOfImagesToPreload = c
            }
            var a = hs.getAnchors();
            for (var b = 0; b < a.images.length && b < hs.numberOfImagesToPreload; b++) {
                hs.push(hs.preloadTheseImages, hs.getSrc(a.images[b]))
            }
            if (hs.outlineType) {
                new hs.Outline(hs.outlineType, function() {
                    hs.preloadFullImage(0)
                })
            } else {
                hs.preloadFullImage(0)
            }
            if (hs.restoreCursor) {
                var d = hs.createElement("img", {
                    src: hs.graphicsDir + hs.restoreCursor
                })
            }
        },
        init: function() {
            if (!hs.container) {
                hs.getPageSize();
                hs.ieLt7 = hs.ie && hs.uaVersion < 7;
                for (var a in hs.langDefaults) {
                    if (typeof hs[a] != "undefined") {
                        hs.lang[a] = hs[a]
                    } else {
                        if (typeof hs.lang[a] == "undefined" && typeof hs.langDefaults[a] != "undefined") {
                            hs.lang[a] = hs.langDefaults[a]
                        }
                    }
                }
                hs.container = hs.createElement("div", {
                    className: "highslide-container"
                }, {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: hs.zIndexCounter,
                    direction: "ltr"
                }, document.body, true);
                hs.loading = hs.createElement("a", {
                    className: "highslide-loading",
                    title: hs.lang.loadingTitle,
                    innerHTML: hs.lang.loadingText,
                    href: "javascript:;"
                }, {
                    position: "absolute",
                    top: "-9999px",
                    opacity: hs.loadingOpacity,
                    zIndex: 1
                }, hs.container);
                hs.garbageBin = hs.createElement("div", null, {
                    display: "none"
                }, hs.container);
                Math.linearTween = function(f, e, h, g) {
                    return h * f / g + e
                };
                Math.easeInQuad = function(f, e, h, g) {
                    return h * (f /= g) * f + e
                };
                hs.hideSelects = hs.ieLt7;
                hs.hideIframes = ((window.opera && hs.uaVersion < 9) || navigator.vendor == "KDE" || (hs.ie && hs.uaVersion < 5.5))
            }
        },
        ready: function() {
            if (hs.isReady) {
                return
            }
            hs.isReady = true;
            for (var a = 0; a < hs.onReady.length; a++) {
                hs.onReady[a]()
            }
        },
        updateAnchors: function() {
            var a, c, k = [],
                h = [],
                b = {},
                l;
            for (var e = 0; e < hs.openerTagNames.length; e++) {
                c = document.getElementsByTagName(hs.openerTagNames[e]);
                for (var d = 0; d < c.length; d++) {
                    a = c[d];
                    l = hs.isHsAnchor(a);
                    if (l) {
                        hs.push(k, a);
                        if (l[0] == "hs.expand") {
                            hs.push(h, a)
                        }
                        var f = hs.getParam(a, "slideshowGroup") || "none";
                        if (!b[f]) {
                            b[f] = []
                        }
                        hs.push(b[f], a)
                    }
                }
            }
            hs.anchors = {
                all: k,
                groups: b,
                images: h
            };
            return hs.anchors
        },
        getAnchors: function() {
            return hs.anchors || hs.updateAnchors()
        },
        close: function(a) {
            var b = hs.getExpander(a);
            if (b) {
                b.close()
            }
            return false
        }
    };
    hs.fx = function(b, a, c) {
        this.options = a;
        this.elem = b;
        this.prop = c;
        if (!a.orig) {
            a.orig = {}
        }
    };
    hs.fx.prototype = {
        update: function() {
            (hs.fx.step[this.prop] || hs.fx.step._default)(this);
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
        },
        custom: function(e, d, c) {
            this.startTime = (new Date()).getTime();
            this.start = e;
            this.end = d;
            this.unit = c;
            this.now = this.start;
            this.pos = this.state = 0;
            var a = this;

            function b(f) {
                return a.step(f)
            }
            b.elem = this.elem;
            if (b() && hs.timers.push(b) == 1) {
                hs.timerId = setInterval(function() {
                    var g = hs.timers;
                    for (var f = 0; f < g.length; f++) {
                        if (!g[f]()) {
                            g.splice(f--, 1)
                        }
                    }
                    if (!g.length) {
                        clearInterval(hs.timerId)
                    }
                }, 13)
            }
        },
        step: function(d) {
            var c = (new Date()).getTime();
            if (d || c >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var a = true;
                for (var b in this.options.curAnim) {
                    if (this.options.curAnim[b] !== true) {
                        a = false
                    }
                }
                if (a) {
                    if (this.options.complete) {
                        this.options.complete.call(this.elem)
                    }
                }
                return false
            } else {
                var e = c - this.startTime;
                this.state = e / this.options.duration;
                this.pos = this.options.easing(e, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    hs.extend(hs.fx, {
        step: {
            opacity: function(a) {
                hs.setStyles(a.elem, {
                    opacity: a.now
                })
            },
            _default: function(a) {
                try {
                    if (a.elem.style && a.elem.style[a.prop] != null) {
                        a.elem.style[a.prop] = a.now + a.unit
                    } else {
                        a.elem[a.prop] = a.now
                    }
                } catch (b) {}
            }
        }
    });
    hs.Outline = function(g, e) {
        this.onLoad = e;
        this.outlineType = g;
        var a = hs.uaVersion,
            f;
        this.hasAlphaImageLoader = hs.ie && a >= 5.5 && a < 7;
        if (!g) {
            if (e) {
                e()
            }
            return
        }
        hs.init();
        this.table = hs.createElement("table", {
            cellSpacing: 0
        }, {
            visibility: "hidden",
            position: "absolute",
            borderCollapse: "collapse",
            width: 0
        }, hs.container, true);
        var b = hs.createElement("tbody", null, null, this.table, 1);
        this.td = [];
        for (var c = 0; c <= 8; c++) {
            if (c % 3 == 0) {
                f = hs.createElement("tr", null, {
                    height: "auto"
                }, b, true)
            }
            this.td[c] = hs.createElement("td", null, null, f, true);
            var d = c != 4 ? {
                lineHeight: 0,
                fontSize: 0
            } : {
                position: "relative"
            };
            hs.setStyles(this.td[c], d)
        }
        this.td[4].className = g + " highslide-outline";
        this.preloadGraphic()
    };
    hs.Outline.prototype = {
        preloadGraphic: function() {
            var b = hs.graphicsDir + (hs.outlinesDir || "outlines/") + this.outlineType + ".png";
            var a = hs.safari ? hs.container : null;
            this.graphic = hs.createElement("img", null, {
                position: "absolute",
                top: "-9999px"
            }, a, true);
            var c = this;
            this.graphic.onload = function() {
                c.onGraphicLoad()
            };
            this.graphic.src = b
        },
        onGraphicLoad: function() {
            var d = this.offset = this.graphic.width / 4,
                f = [
                    [0, 0],
                    [0, -4],
                    [-2, 0],
                    [0, -8], 0, [-2, -8],
                    [0, -2],
                    [0, -6],
                    [-2, -2]
                ],
                c = {
                    height: (2 * d) + "px",
                    width: (2 * d) + "px"
                };
            for (var b = 0; b <= 8; b++) {
                if (f[b]) {
                    if (this.hasAlphaImageLoader) {
                        var a = (b == 1 || b == 7) ? "100%" : this.graphic.width + "px";
                        var e = hs.createElement("div", null, {
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            overflow: "hidden"
                        }, this.td[b], true);
                        hs.createElement("div", null, {
                            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='" + this.graphic.src + "')",
                            position: "absolute",
                            width: a,
                            height: this.graphic.height + "px",
                            left: (f[b][0] * d) + "px",
                            top: (f[b][1] * d) + "px"
                        }, e, true)
                    } else {
                        hs.setStyles(this.td[b], {
                            background: "url(" + this.graphic.src + ") " + (f[b][0] * d) + "px " + (f[b][1] * d) + "px"
                        })
                    }
                    if (window.opera && (b == 3 || b == 5)) {
                        hs.createElement("div", null, c, this.td[b], true)
                    }
                    hs.setStyles(this.td[b], c)
                }
            }
            this.graphic = null;
            if (hs.pendingOutlines[this.outlineType]) {
                hs.pendingOutlines[this.outlineType].destroy()
            }
            hs.pendingOutlines[this.outlineType] = this;
            if (this.onLoad) {
                this.onLoad()
            }
        },
        setPosition: function(g, e, c, b, f) {
            var d = this.exp,
                a = d.wrapper.style,
                e = e || 0,
                g = g || {
                    x: d.x.pos + e,
                    y: d.y.pos + e,
                    w: d.x.get("wsize") - 2 * e,
                    h: d.y.get("wsize") - 2 * e
                };
            if (c) {
                this.table.style.visibility = (g.h >= 4 * this.offset) ? "visible" : "hidden"
            }
            hs.setStyles(this.table, {
                left: (g.x - this.offset) + "px",
                top: (g.y - this.offset) + "px",
                width: (g.w + 2 * this.offset) + "px"
            });
            g.w -= 2 * this.offset;
            g.h -= 2 * this.offset;
            hs.setStyles(this.td[4], {
                width: g.w >= 0 ? g.w + "px" : 0,
                height: g.h >= 0 ? g.h + "px" : 0
            });
            if (this.hasAlphaImageLoader) {
                this.td[3].style.height = this.td[5].style.height = this.td[4].style.height
            }
        },
        destroy: function(a) {
            if (a) {
                this.table.style.visibility = "hidden"
            } else {
                hs.discardElement(this.table)
            }
        }
    };
    hs.Dimension = function(b, a) {
        this.exp = b;
        this.dim = a;
        this.ucwh = a == "x" ? "Width" : "Height";
        this.wh = this.ucwh.toLowerCase();
        this.uclt = a == "x" ? "Left" : "Top";
        this.lt = this.uclt.toLowerCase();
        this.ucrb = a == "x" ? "Right" : "Bottom";
        this.rb = this.ucrb.toLowerCase();
        this.p1 = this.p2 = 0
    };
    hs.Dimension.prototype = {
        get: function(a) {
            switch (a) {
                case "loadingPos":
                    return this.tpos + this.tb + (this.t - hs.loading["offset" + this.ucwh]) / 2;
                case "wsize":
                    return this.size + 2 * this.cb + this.p1 + this.p2;
                case "fitsize":
                    return this.clientSize - this.marginMin - this.marginMax;
                case "maxsize":
                    return this.get("fitsize") - 2 * this.cb - this.p1 - this.p2;
                case "opos":
                    return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);
                case "osize":
                    return this.get("wsize") + (this.exp.outline ? 2 * this.exp.outline.offset : 0);
                case "imgPad":
                    return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0
            }
        },
        calcBorders: function() {
            this.cb = (this.exp.content["offset" + this.ucwh] - this.t) / 2;
            this.marginMax = hs["margin" + this.ucrb]
        },
        calcThumb: function() {
            this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : this.exp.el["offset" + this.ucwh];
            this.tpos = this.exp.tpos[this.dim];
            this.tb = (this.exp.el["offset" + this.ucwh] - this.t) / 2;
            if (this.tpos == 0 || this.tpos == -1) {
                this.tpos = (hs.page[this.wh] / 2) + hs.page["scroll" + this.uclt]
            }
        },
        calcExpanded: function() {
            var a = this.exp;
            this.justify = "auto";
            this.pos = this.tpos - this.cb + this.tb;
            if (this.maxHeight && this.dim == "x") {
                a.maxWidth = Math.min(a.maxWidth || this.full, a.maxHeight * this.full / a.y.full)
            }
            this.size = Math.min(this.full, a["max" + this.ucwh] || this.full);
            this.minSize = a.allowSizeReduction ? Math.min(a["min" + this.ucwh], this.full) : this.full;
            if (a.isImage && a.useBox) {
                this.size = a[this.wh];
                this.imgSize = this.full
            }
            if (this.dim == "x" && hs.padToMinWidth) {
                this.minSize = a.minWidth
            }
            this.marginMin = hs["margin" + this.uclt];
            this.scroll = hs.page["scroll" + this.uclt];
            this.clientSize = hs.page[this.wh]
        },
        setSize: function(a) {
            var b = this.exp;
            if (b.isImage && (b.useBox || hs.padToMinWidth)) {
                this.imgSize = a;
                this.size = Math.max(this.size, this.imgSize);
                b.content.style[this.lt] = this.get("imgPad") + "px"
            } else {
                this.size = a
            }
            b.content.style[this.wh] = a + "px";
            b.wrapper.style[this.wh] = this.get("wsize") + "px";
            if (b.outline) {
                b.outline.setPosition()
            }
            if (this.dim == "x" && b.overlayBox) {
                b.sizeOverlayBox(true)
            }
        },
        setPos: function(a) {
            this.pos = a;
            this.exp.wrapper.style[this.lt] = a + "px";
            if (this.exp.outline) {
                this.exp.outline.setPosition()
            }
        }
    };
    hs.Expander = function(k, f, b, l) {
        if (document.readyState && hs.ie && !hs.isReady) {
            hs.addEventListener(document, "ready", function() {
                new hs.Expander(k, f, b, l)
            });
            return
        }
        this.a = k;
        this.custom = b;
        this.contentType = l || "image";
        this.isImage = !this.isHtml;
        hs.continuePreloading = false;
        this.overlays = [];
        hs.init();
        var m = this.key = hs.expanders.length;
        for (var g = 0; g < hs.overrides.length; g++) {
            var c = hs.overrides[g];
            this[c] = f && typeof f[c] != "undefined" ? f[c] : hs[c]
        }
        if (!this.src) {
            this.src = k.href
        }
        var d = (f && f.thumbnailId) ? hs.$(f.thumbnailId) : k;
        d = this.thumb = d.getElementsByTagName("img")[0] || d;
        this.thumbsUserSetId = d.id || k.id;
        for (var g = 0; g < hs.expanders.length; g++) {
            if (hs.expanders[g] && hs.expanders[g].a == k) {
                hs.expanders[g].focus();
                return false
            }
        }
        if (!hs.allowSimultaneousLoading) {
            for (var g = 0; g < hs.expanders.length; g++) {
                if (hs.expanders[g] && hs.expanders[g].thumb != d && !hs.expanders[g].onLoadStarted) {
                    hs.expanders[g].cancelLoading()
                }
            }
        }
        hs.expanders[m] = this;
        if (!hs.allowMultipleInstances && !hs.upcoming) {
            if (hs.expanders[m - 1]) {
                hs.expanders[m - 1].close()
            }
            if (typeof hs.focusKey != "undefined" && hs.expanders[hs.focusKey]) {
                hs.expanders[hs.focusKey].close()
            }
        }
        this.el = d;
        this.tpos = hs.getPosition(d);
        hs.getPageSize();
        var j = this.x = new hs.Dimension(this, "x");
        j.calcThumb();
        var h = this.y = new hs.Dimension(this, "y");
        h.calcThumb();
        this.wrapper = hs.createElement("div", {
            id: "highslide-wrapper-" + this.key,
            className: "highslide-wrapper " + this.wrapperClassName
        }, {
            visibility: "hidden",
            position: "absolute",
            zIndex: hs.zIndexCounter += 2
        }, null, true);
        this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
        if (this.contentType == "image" && this.outlineWhileAnimating == 2) {
            this.outlineWhileAnimating = 0
        }
        if (!this.outlineType) {
            this[this.contentType + "Create"]()
        } else {
            if (hs.pendingOutlines[this.outlineType]) {
                this.connectOutline();
                this[this.contentType + "Create"]()
            } else {
                this.showLoading();
                var e = this;
                new hs.Outline(this.outlineType, function() {
                    e.connectOutline();
                    e[e.contentType + "Create"]()
                })
            }
        }
        return true
    };
    hs.Expander.prototype = {
        error: function(a) {
            window.location.href = this.src
        },
        connectOutline: function() {
            var a = this.outline = hs.pendingOutlines[this.outlineType];
            a.exp = this;
            a.table.style.zIndex = this.wrapper.style.zIndex - 1;
            hs.pendingOutlines[this.outlineType] = null
        },
        showLoading: function() {
            if (this.onLoadStarted || this.loading) {
                return
            }
            this.loading = hs.loading;
            var c = this;
            this.loading.onclick = function() {
                c.cancelLoading()
            };
            var c = this,
                a = this.x.get("loadingPos") + "px",
                b = this.y.get("loadingPos") + "px";
            setTimeout(function() {
                if (c.loading) {
                    hs.setStyles(c.loading, {
                        left: a,
                        top: b,
                        zIndex: hs.zIndexCounter++
                    })
                }
            }, 100)
        },
        imageCreate: function() {
            var b = this;
            var a = document.createElement("img");
            this.content = a;
            a.onload = function() {
                if (hs.expanders[b.key]) {
                    b.contentLoaded()
                }
            };
            if (hs.blockRightClick) {
                a.oncontextmenu = function() {
                    return false
                }
            }
            a.className = "highslide-image";
            hs.setStyles(a, {
                visibility: "hidden",
                display: "block",
                position: "absolute",
                maxWidth: "9999px",
                zIndex: 3
            });
            a.title = hs.lang.restoreTitle;
            if (hs.safari) {
                hs.container.appendChild(a)
            }
            if (hs.ie && hs.flushImgSize) {
                a.src = null
            }
            a.src = this.src;
            this.showLoading()
        },
        contentLoaded: function() {
            try {
                if (!this.content) {
                    return
                }
                this.content.onload = null;
                if (this.onLoadStarted) {
                    return
                } else {
                    this.onLoadStarted = true
                }
                var a = this.x,
                    d = this.y;
                if (this.loading) {
                    hs.setStyles(this.loading, {
                        top: "-9999px"
                    });
                    this.loading = null
                }
                a.full = this.content.width;
                d.full = this.content.height;
                hs.setStyles(this.content, {
                    width: a.t + "px",
                    height: d.t + "px"
                });
                this.wrapper.appendChild(this.content);
                hs.container.appendChild(this.wrapper);
                a.calcBorders();
                d.calcBorders();
                hs.setStyles(this.wrapper, {
                    left: (a.tpos + a.tb - a.cb) + "px",
                    top: (d.tpos + a.tb - d.cb) + "px"
                });
                this.getOverlays();
                var b = a.full / d.full;
                a.calcExpanded();
                this.justify(a);
                d.calcExpanded();
                this.justify(d);
                if (this.overlayBox) {
                    this.sizeOverlayBox(0, 1)
                }
                if (this.allowSizeReduction) {
                    this.correctRatio(b);
                    if (this.isImage && this.x.full > (this.x.imgSize || this.x.size)) {
                        this.createFullExpand();
                        if (this.overlays.length == 1) {
                            this.sizeOverlayBox()
                        }
                    }
                }
                this.show()
            } catch (c) {
                this.error(c)
            }
        },
        justify: function(f, b) {
            var g, h = f.target,
                e = f == this.x ? "x" : "y";
            var d = false;
            var a = f.exp.allowSizeReduction;
            f.pos = Math.round(f.pos - ((f.get("wsize") - f.t) / 2));
            if (f.pos < f.scroll + f.marginMin) {
                f.pos = f.scroll + f.marginMin;
                d = true
            }
            if (!b && f.size < f.minSize) {
                f.size = f.minSize;
                a = false
            }
            if (f.pos + f.get("wsize") > f.scroll + f.clientSize - f.marginMax) {
                if (!b && d && a) {
                    f.size = Math.min(f.size, f.get(e == "y" ? "fitsize" : "maxsize"))
                } else {
                    if (f.get("wsize") < f.get("fitsize")) {
                        f.pos = f.scroll + f.clientSize - f.marginMax - f.get("wsize")
                    } else {
                        f.pos = f.scroll + f.marginMin;
                        if (!b && a) {
                            f.size = f.get(e == "y" ? "fitsize" : "maxsize")
                        }
                    }
                }
            }
            if (!b && f.size < f.minSize) {
                f.size = f.minSize;
                a = false
            }
            if (f.pos < f.marginMin) {
                var c = f.pos;
                f.pos = f.marginMin;
                if (a && !b) {
                    f.size = f.size - (f.pos - c)
                }
            }
        },
        correctRatio: function(c) {
            var a = this.x,
                g = this.y,
                e = false,
                d = Math.min(a.full, a.size),
                b = Math.min(g.full, g.size),
                f = (this.useBox || hs.padToMinWidth);
            if (d / b > c) {
                d = b * c;
                if (d < a.minSize) {
                    d = a.minSize;
                    b = d / c
                }
                e = true
            } else {
                if (d / b < c) {
                    b = d / c;
                    e = true
                }
            }
            if (hs.padToMinWidth && a.full < a.minSize) {
                a.imgSize = a.full;
                g.size = g.imgSize = g.full
            } else {
                if (this.useBox) {
                    a.imgSize = d;
                    g.imgSize = b
                } else {
                    a.size = d;
                    g.size = b
                }
            }
            e = this.fitOverlayBox(f ? null : c, e);
            if (f && g.size < g.imgSize) {
                g.imgSize = g.size;
                a.imgSize = g.size * c
            }
            if (e || f) {
                a.pos = a.tpos - a.cb + a.tb;
                a.minSize = a.size;
                this.justify(a, true);
                g.pos = g.tpos - g.cb + g.tb;
                g.minSize = g.size;
                this.justify(g, true);
                if (this.overlayBox) {
                    this.sizeOverlayBox()
                }
            }
        },
        fitOverlayBox: function(b, c) {
            var a = this.x,
                d = this.y;
            if (this.overlayBox) {
                while (d.size > this.minHeight && a.size > this.minWidth && d.get("wsize") > d.get("fitsize")) {
                    d.size -= 10;
                    if (b) {
                        a.size = d.size * b
                    }
                    this.sizeOverlayBox(0, 1);
                    c = true
                }
            }
            return c
        },
        show: function() {
            var a = this.x,
                b = this.y;
            this.doShowHide("hidden");
            this.changeSize(1, {
                wrapper: {
                    width: a.get("wsize"),
                    height: b.get("wsize"),
                    left: a.pos,
                    top: b.pos
                },
                content: {
                    left: a.p1 + a.get("imgPad"),
                    top: b.p1 + b.get("imgPad"),
                    width: a.imgSize || a.size,
                    height: b.imgSize || b.size
                }
            }, hs.expandDuration)
        },
        changeSize: function(b, h, c) {
            if (this.outline && !this.outlineWhileAnimating) {
                if (b) {
                    this.outline.setPosition()
                } else {
                    this.outline.destroy()
                }
            }
            if (!b) {
                this.destroyOverlays()
            }
            var e = this,
                a = e.x,
                g = e.y,
                f = this.easing;
            if (!b) {
                f = this.easingClose || f
            }
            var d = b ? function() {
                if (e.outline) {
                    e.outline.table.style.visibility = "visible"
                }
                setTimeout(function() {
                    e.afterExpand()
                }, 50)
            } : function() {
                e.afterClose()
            };
            if (b) {
                hs.setStyles(this.wrapper, {
                    width: a.t + "px",
                    height: g.t + "px"
                })
            }
            if (this.fadeInOut) {
                hs.setStyles(this.wrapper, {
                    opacity: b ? 0 : 1
                });
                hs.extend(h.wrapper, {
                    opacity: b
                })
            }
            hs.animate(this.wrapper, h.wrapper, {
                duration: c,
                easing: f,
                step: function(k, i) {
                    if (e.outline && e.outlineWhileAnimating && i.prop == "top") {
                        var j = b ? i.pos : 1 - i.pos;
                        var l = {
                            w: a.t + (a.get("wsize") - a.t) * j,
                            h: g.t + (g.get("wsize") - g.t) * j,
                            x: a.tpos + (a.pos - a.tpos) * j,
                            y: g.tpos + (g.pos - g.tpos) * j
                        };
                        e.outline.setPosition(l, 0, 1)
                    }
                }
            });
            hs.animate(this.content, h.content, c, f, d);
            if (b) {
                this.wrapper.style.visibility = "visible";
                this.content.style.visibility = "visible";
                this.a.className += " highslide-active-anchor"
            }
        },
        afterExpand: function() {
            this.isExpanded = true;
            this.focus();
            if (hs.upcoming && hs.upcoming == this.a) {
                hs.upcoming = null
            }
            this.prepareNextOutline();
            var c = hs.page,
                b = hs.mouse.x + c.scrollLeft,
                a = hs.mouse.y + c.scrollTop;
            this.mouseIsOver = this.x.pos < b && b < this.x.pos + this.x.get("wsize") && this.y.pos < a && a < this.y.pos + this.y.get("wsize");
            if (this.overlayBox) {
                this.showOverlays()
            }
        },
        prepareNextOutline: function() {
            var a = this.key;
            var b = this.outlineType;
            new hs.Outline(b, function() {
                try {
                    hs.expanders[a].preloadNext()
                } catch (c) {}
            })
        },
        preloadNext: function() {
            var b = this.getAdjacentAnchor(1);
            if (b && b.onclick.toString().match(/hs\.expand/)) {
                var a = hs.createElement("img", {
                    src: hs.getSrc(b)
                })
            }
        },
        getAdjacentAnchor: function(c) {
            var b = this.getAnchorIndex(),
                a = hs.anchors.groups[this.slideshowGroup || "none"];
            if (!a[b + c] && this.slideshow && this.slideshow.repeat) {
                if (c == 1) {
                    return a[0]
                } else {
                    if (c == -1) {
                        return a[a.length - 1]
                    }
                }
            }
            return a[b + c] || null
        },
        getAnchorIndex: function() {
            var a = hs.getAnchors().groups[this.slideshowGroup || "none"];
            if (a) {
                for (var b = 0; b < a.length; b++) {
                    if (a[b] == this.a) {
                        return b
                    }
                }
            }
            return null
        },
        cancelLoading: function() {
            hs.discardElement(this.wrapper);
            hs.expanders[this.key] = null;
            if (this.loading) {
                hs.loading.style.left = "-9999px"
            }
        },
        writeCredits: function() {
            this.credits = hs.createElement("a", {
                href: hs.creditsHref,
                target: hs.creditsTarget,
                className: "highslide-credits",
                innerHTML: hs.lang.creditsText,
                title: hs.lang.creditsTitle
            });
            this.createOverlay({
                overlayId: this.credits,
                position: this.creditsPosition || "top left"
            })
        },
        getInline: function(types, addOverlay) {
            for (var i = 0; i < types.length; i++) {
                var type = types[i],
                    s = null;
                if (!this[type + "Id"] && this.thumbsUserSetId) {
                    this[type + "Id"] = type + "-for-" + this.thumbsUserSetId
                }
                if (this[type + "Id"]) {
                    this[type] = hs.getNode(this[type + "Id"])
                }
                if (!this[type] && !this[type + "Text"] && this[type + "Eval"]) {
                    try {
                        s = eval(this[type + "Eval"])
                    } catch (e) {}
                }
                if (!this[type] && this[type + "Text"]) {
                    s = this[type + "Text"]
                }
                if (!this[type] && !s) {
                    this[type] = hs.getNode(this.a["_" + type + "Id"]);
                    if (!this[type]) {
                        var next = this.a.nextSibling;
                        while (next && !hs.isHsAnchor(next)) {
                            if ((new RegExp("highslide-" + type)).test(next.className || null)) {
                                if (!next.id) {
                                    this.a["_" + type + "Id"] = next.id = "hsId" + hs.idCounter++
                                }
                                this[type] = hs.getNode(next.id);
                                break
                            }
                            next = next.nextSibling
                        }
                    }
                }
                if (!this[type] && s) {
                    this[type] = hs.createElement("div", {
                        className: "highslide-" + type,
                        innerHTML: s
                    })
                }
                if (addOverlay && this[type]) {
                    var o = {
                        position: (type == "heading") ? "above" : "below"
                    };
                    for (var x in this[type + "Overlay"]) {
                        o[x] = this[type + "Overlay"][x]
                    }
                    o.overlayId = this[type];
                    this.createOverlay(o)
                }
            }
        },
        doShowHide: function(a) {
            if (hs.hideSelects) {
                this.showHideElements("SELECT", a)
            }
            if (hs.hideIframes) {
                this.showHideElements("IFRAME", a)
            }
            if (hs.geckoMac) {
                this.showHideElements("*", a)
            }
        },
        showHideElements: function(c, b) {
            var e = document.getElementsByTagName(c);
            var a = c == "*" ? "overflow" : "visibility";
            for (var f = 0; f < e.length; f++) {
                if (a == "visibility" || (document.defaultView.getComputedStyle(e[f], "").getPropertyValue("overflow") == "auto" || e[f].getAttribute("hidden-by") != null)) {
                    var h = e[f].getAttribute("hidden-by");
                    if (b == "visible" && h) {
                        h = h.replace("[" + this.key + "]", "");
                        e[f].setAttribute("hidden-by", h);
                        if (!h) {
                            e[f].style[a] = e[f].origProp
                        }
                    } else {
                        if (b == "hidden") {
                            var k = hs.getPosition(e[f]);
                            k.w = e[f].offsetWidth;
                            k.h = e[f].offsetHeight;
                            var j = (k.x + k.w < this.x.get("opos") || k.x > this.x.get("opos") + this.x.get("osize"));
                            var g = (k.y + k.h < this.y.get("opos") || k.y > this.y.get("opos") + this.y.get("osize"));
                            var d = hs.getWrapperKey(e[f]);
                            if (!j && !g && d != this.key) {
                                if (!h) {
                                    e[f].setAttribute("hidden-by", "[" + this.key + "]");
                                    e[f].origProp = e[f].style[a];
                                    e[f].style[a] = "hidden"
                                } else {
                                    if (h.indexOf("[" + this.key + "]") == -1) {
                                        e[f].setAttribute("hidden-by", h + "[" + this.key + "]")
                                    }
                                }
                            } else {
                                if ((h == "[" + this.key + "]" || hs.focusKey == d) && d != this.key) {
                                    e[f].setAttribute("hidden-by", "");
                                    e[f].style[a] = e[f].origProp || ""
                                } else {
                                    if (h && h.indexOf("[" + this.key + "]") > -1) {
                                        e[f].setAttribute("hidden-by", h.replace("[" + this.key + "]", ""))
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        focus: function() {
            this.wrapper.style.zIndex = hs.zIndexCounter += 2;
            for (var a = 0; a < hs.expanders.length; a++) {
                if (hs.expanders[a] && a == hs.focusKey) {
                    var b = hs.expanders[a];
                    b.content.className += " highslide-" + b.contentType + "-blur";
                    b.content.style.cursor = hs.ie ? "hand" : "pointer";
                    b.content.title = hs.lang.focusTitle
                }
            }
            if (this.outline) {
                this.outline.table.style.zIndex = this.wrapper.style.zIndex - 1
            }
            this.content.className = "highslide-" + this.contentType;
            this.content.title = hs.lang.restoreTitle;
            if (hs.restoreCursor) {
                hs.styleRestoreCursor = window.opera ? "pointer" : "url(" + hs.graphicsDir + hs.restoreCursor + "), pointer";
                if (hs.ie && hs.uaVersion < 6) {
                    hs.styleRestoreCursor = "hand"
                }
                this.content.style.cursor = hs.styleRestoreCursor
            }
            hs.focusKey = this.key;
            hs.addEventListener(document, window.opera ? "keypress" : "keydown", hs.keyHandler)
        },
        moveTo: function(a, b) {
            this.x.setPos(a);
            this.y.setPos(b)
        },
        resize: function(d) {
            var a, b, c = d.width / d.height;
            a = Math.max(d.width + d.dX, Math.min(this.minWidth, this.x.full));
            if (this.isImage && Math.abs(a - this.x.full) < 12) {
                a = this.x.full
            }
            b = a / c;
            if (b < Math.min(this.minHeight, this.y.full)) {
                b = Math.min(this.minHeight, this.y.full);
                if (this.isImage) {
                    a = b * c
                }
            }
            this.resizeTo(a, b)
        },
        resizeTo: function(a, b) {
            this.y.setSize(b);
            this.x.setSize(a);
            this.wrapper.style.height = this.y.get("wsize") + "px"
        },
        close: function() {
            if (this.isClosing || !this.isExpanded) {
                return
            }
            this.isClosing = true;
            hs.removeEventListener(document, window.opera ? "keypress" : "keydown", hs.keyHandler);
            try {
                this.content.style.cursor = "default";
                this.changeSize(0, {
                    wrapper: {
                        width: this.x.t,
                        height: this.y.t,
                        left: this.x.tpos - this.x.cb + this.x.tb,
                        top: this.y.tpos - this.y.cb + this.y.tb
                    },
                    content: {
                        left: 0,
                        top: 0,
                        width: this.x.t,
                        height: this.y.t
                    }
                }, hs.restoreDuration)
            } catch (a) {
                this.afterClose()
            }
        },
        createOverlay: function(d) {
            var c = d.overlayId;
            if (typeof c == "string") {
                c = hs.getNode(c)
            }
            if (d.html) {
                c = hs.createElement("div", {
                    innerHTML: d.html
                })
            }
            if (!c || typeof c == "string") {
                return
            }
            c.style.display = "block";
            this.genOverlayBox();
            var b = d.width && /^[0-9]+(px|%)$/.test(d.width) ? d.width : "auto";
            if (/^(left|right)panel$/.test(d.position) && !/^[0-9]+px$/.test(d.width)) {
                b = "200px"
            }
            var a = hs.createElement("div", {
                id: "hsId" + hs.idCounter++,
                hsId: d.hsId
            }, {
                position: "absolute",
                visibility: "hidden",
                width: b,
                direction: hs.lang.cssDirection || "",
                opacity: 0
            }, this.overlayBox, true);
            a.appendChild(c);
            hs.extend(a, {
                opacity: 1,
                offsetX: 0,
                offsetY: 0,
                dur: (d.fade === 0 || d.fade === false || (d.fade == 2 && hs.ie)) ? 0 : 250
            });
            hs.extend(a, d);
            if (this.gotOverlays) {
                this.positionOverlay(a);
                if (!a.hideOnMouseOut || this.mouseIsOver) {
                    hs.animate(a, {
                        opacity: a.opacity
                    }, a.dur)
                }
            }
            hs.push(this.overlays, hs.idCounter - 1)
        },
        positionOverlay: function(c) {
            var d = c.position || "middle center",
                b = c.offsetX,
                a = c.offsetY;
            if (c.parentNode != this.overlayBox) {
                this.overlayBox.appendChild(c)
            }
            if (/left$/.test(d)) {
                c.style.left = b + "px"
            }
            if (/center$/.test(d)) {
                hs.setStyles(c, {
                    left: "50%",
                    marginLeft: (b - Math.round(c.offsetWidth / 2)) + "px"
                })
            }
            if (/right$/.test(d)) {
                c.style.right = -b + "px"
            }
            if (/^leftpanel$/.test(d)) {
                hs.setStyles(c, {
                    right: "100%",
                    marginRight: this.x.cb + "px",
                    top: -this.y.cb + "px",
                    bottom: -this.y.cb + "px",
                    overflow: "auto"
                });
                this.x.p1 = c.offsetWidth
            } else {
                if (/^rightpanel$/.test(d)) {
                    hs.setStyles(c, {
                        left: "100%",
                        marginLeft: this.x.cb + "px",
                        top: -this.y.cb + "px",
                        bottom: -this.y.cb + "px",
                        overflow: "auto"
                    });
                    this.x.p2 = c.offsetWidth
                }
            }
            if (/^top/.test(d)) {
                c.style.top = a + "px"
            }
            if (/^middle/.test(d)) {
                hs.setStyles(c, {
                    top: "50%",
                    marginTop: (a - Math.round(c.offsetHeight / 2)) + "px"
                })
            }
            if (/^bottom/.test(d)) {
                c.style.bottom = -a + "px"
            }
            if (/^above$/.test(d)) {
                hs.setStyles(c, {
                    left: (-this.x.p1 - this.x.cb) + "px",
                    right: (-this.x.p2 - this.x.cb) + "px",
                    bottom: "100%",
                    marginBottom: this.y.cb + "px",
                    width: "auto"
                });
                this.y.p1 = c.offsetHeight
            } else {
                if (/^below$/.test(d)) {
                    hs.setStyles(c, {
                        position: "relative",
                        left: (-this.x.p1 - this.x.cb) + "px",
                        right: (-this.x.p2 - this.x.cb) + "px",
                        top: "100%",
                        marginTop: this.y.cb + "px",
                        width: "auto"
                    });
                    this.y.p2 = c.offsetHeight;
                    c.style.position = "absolute"
                }
            }
        },
        getOverlays: function() {
            this.getInline(["heading", "caption"], true);
            if (this.heading && this.dragByHeading) {
                this.heading.className += " highslide-move"
            }
            if (hs.showCredits) {
                this.writeCredits()
            }
            for (var a = 0; a < hs.overlays.length; a++) {
                var d = hs.overlays[a],
                    e = d.thumbnailId,
                    b = d.slideshowGroup;
                if ((!e && !b) || (e && e == this.thumbsUserSetId) || (b && b === this.slideshowGroup)) {
                    this.createOverlay(d)
                }
            }
            var c = [];
            for (var a = 0; a < this.overlays.length; a++) {
                var d = hs.$("hsId" + this.overlays[a]);
                if (/panel$/.test(d.position)) {
                    this.positionOverlay(d)
                } else {
                    hs.push(c, d)
                }
            }
            for (var a = 0; a < c.length; a++) {
                this.positionOverlay(c[a])
            }
            this.gotOverlays = true
        },
        genOverlayBox: function() {
            if (!this.overlayBox) {
                this.overlayBox = hs.createElement("div", {
                    className: this.wrapperClassName
                }, {
                    position: "absolute",
                    width: (this.x.size || (this.useBox ? this.width : null) || this.x.full) + "px",
                    height: (this.y.size || this.y.full) + "px",
                    visibility: "hidden",
                    overflow: "hidden",
                    zIndex: hs.ie ? 4 : "auto"
                }, hs.container, true)
            }
        },
        sizeOverlayBox: function(f, d) {
            var c = this.overlayBox,
                a = this.x,
                h = this.y;
            hs.setStyles(c, {
                width: a.size + "px",
                height: h.size + "px"
            });
            if (f || d) {
                for (var e = 0; e < this.overlays.length; e++) {
                    var g = hs.$("hsId" + this.overlays[e]);
                    var b = (hs.ieLt7 || document.compatMode == "BackCompat");
                    if (g && /^(above|below)$/.test(g.position)) {
                        if (b) {
                            g.style.width = (c.offsetWidth + 2 * a.cb + a.p1 + a.p2) + "px"
                        }
                        h[g.position == "above" ? "p1" : "p2"] = g.offsetHeight
                    }
                    if (g && b && /^(left|right)panel$/.test(g.position)) {
                        g.style.height = (c.offsetHeight + 2 * h.cb) + "px"
                    }
                }
            }
            if (f) {
                hs.setStyles(this.content, {
                    top: h.p1 + "px"
                });
                hs.setStyles(c, {
                    top: (h.p1 + h.cb) + "px"
                })
            }
        },
        showOverlays: function() {
            var a = this.overlayBox;
            a.className = "";
            hs.setStyles(a, {
                top: (this.y.p1 + this.y.cb) + "px",
                left: (this.x.p1 + this.x.cb) + "px",
                overflow: "visible"
            });
            if (hs.safari) {
                a.style.visibility = "visible"
            }
            this.wrapper.appendChild(a);
            for (var c = 0; c < this.overlays.length; c++) {
                var d = hs.$("hsId" + this.overlays[c]);
                d.style.zIndex = 4;
                if (!d.hideOnMouseOut || this.mouseIsOver) {
                    d.style.visibility = "visible";
                    hs.setStyles(d, {
                        visibility: "visible",
                        display: ""
                    });
                    hs.animate(d, {
                        opacity: d.opacity
                    }, d.dur)
                }
            }
        },
        destroyOverlays: function() {
            if (!this.overlays.length) {
                return
            }
            hs.discardElement(this.overlayBox)
        },
        createFullExpand: function() {
            this.fullExpandLabel = hs.createElement("a", {
                href: "javascript:hs.expanders[" + this.key + "].doFullExpand();",
                title: hs.lang.fullExpandTitle,
                className: "highslide-full-expand"
            });
            this.createOverlay({
                overlayId: this.fullExpandLabel,
                position: hs.fullExpandPosition,
                hideOnMouseOut: true,
                opacity: hs.fullExpandOpacity
            })
        },
        doFullExpand: function() {
            try {
                if (this.fullExpandLabel) {
                    hs.discardElement(this.fullExpandLabel)
                }
                this.focus();
                var b = this.x.size;
                this.resizeTo(this.x.full, this.y.full);
                var a = this.x.pos - (this.x.size - b) / 2;
                if (a < hs.marginLeft) {
                    a = hs.marginLeft
                }
                this.moveTo(a, this.y.pos);
                this.doShowHide("hidden")
            } catch (c) {
                this.error(c)
            }
        },
        afterClose: function() {
            this.a.className = this.a.className.replace("highslide-active-anchor", "");
            this.doShowHide("visible");
            if (this.outline && this.outlineWhileAnimating) {
                this.outline.destroy()
            }
            hs.discardElement(this.wrapper);
            hs.expanders[this.key] = null;
            hs.reOrder()
        }
    };
    hs.langDefaults = hs.lang;
    var HsExpander = hs.Expander;
    if (hs.ie) {
        (function() {
            try {
                document.documentElement.doScroll("left")
            } catch (a) {
                setTimeout(arguments.callee, 50);
                return
            }
            hs.ready()
        })()
    }
    hs.addEventListener(document, "DOMContentLoaded", hs.ready);
    hs.addEventListener(window, "load", hs.ready);
    hs.addEventListener(document, "ready", function() {
        if (hs.expandCursor) {
            var c = hs.createElement("style", {
                type: "text/css"
            }, null, document.getElementsByTagName("HEAD")[0]);

            function b(e, f) {
                if (!hs.ie) {
                    c.appendChild(document.createTextNode(e + " {" + f + "}"))
                } else {
                    var d = document.styleSheets[document.styleSheets.length - 1];
                    if (typeof(d.addRule) == "object") {
                        d.addRule(e, f)
                    }
                }
            }

            function a(d) {
                return "expression( ( ( ignoreMe = document.documentElement." + d + " ? document.documentElement." + d + " : document.body." + d + " ) ) + 'px' );"
            }
            if (hs.expandCursor) {
                b(".highslide img", "cursor: url(" + hs.graphicsDir + hs.expandCursor + "), pointer !important;")
            }
        }
    });
    hs.addEventListener(window, "resize", function() {
        hs.getPageSize()
    });
    hs.addEventListener(document, "mousemove", function(a) {
        hs.mouse = {
            x: a.clientX,
            y: a.clientY
        }
    });
    hs.addEventListener(document, "mousedown", hs.mouseClickHandler);
    hs.addEventListener(document, "mouseup", hs.mouseClickHandler);
    hs.addEventListener(document, "ready", hs.getAnchors);
    hs.addEventListener(window, "load", hs.preloadImages)
};

/* End */
;; /* Start:"a:4:{s:4:"full";s:35:"/js/highslide_init.js?1595317263651";s:6:"source";s:21:"/js/highslide_init.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document)
    .ready(function() { // РёРЅРёС†РёР°Р»РёР·Р°С†РёСЏ highslide
        hs.graphicsDir = '/js/highslide/graphics/';
        hs.align = 'center';
        hs.transitions = ['expand', 'crossfade'];
        hs.outlineType = 'glossy-dark';
        hs.wrapperClassName = 'dark';
        hs.fadeInOut = true;
        hs.creditsHref = 'http://efsol.ru';
        hs.lang = {
            cssDirection: 'ltr',
            loadingText: 'Загрузка...',
            loadingTitle: 'Загрузка',
            focusTitle: '',
            fullExpandTitle: '',
            creditsText: 'Efsol.Ru',
            creditsTitle: 'Эффективные решения',
            previousText: '<<',
            nextText: '>>'
        };
    });

/* End */
;; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/inner_efsol/js/pekarnya_form.js?15876967652392";s:6:"source";s:48:"/local/templates/inner_efsol/js/pekarnya_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnPekarnya button').on('click', function(e) {
        const errors = $('.errors');

        const form = $('div.formPekarnya');
        const action = form.data('action');
        const method = form.data('method');
        // const source = $('.btnPekarnya button');
        const source = $(e.relatedTarget);
        console.log(source);
        const name = form.find('input[name="name"]').val();
        // console.log(name);
        // debugger;
        const pageTitle = $('h1:first').text();
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formPekarnya');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/inner_efsol/js/devops_form.js?15876967652388";s:6:"source";s:46:"/local/templates/inner_efsol/js/devops_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnDevops button').on('click', function(e) {
        const errors = $('.errors');

        const form = $('div.formDevops');
        const action = form.data('action');
        const method = form.data('method');
        // const source = $('.btnPekarnya button');
        const source = $(e.relatedTarget);
        console.log(source);
        const name = form.find('input[name="name"]').val();
        // console.log(name);
        // debugger;
        const pageTitle = $('h1:first').text();
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formPekarnya');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/inner_efsol/js/hosting1s_form.js?15876967652395";s:6:"source";s:49:"/local/templates/inner_efsol/js/hosting1s_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnHosting1s button').on('click', function(e) {
        const errors = $('.errors');

        const form = $('div.formHosting1s');
        const action = form.data('action');
        const method = form.data('method');
        // const source = $('.btnPekarnya button');
        const source = $(e.relatedTarget);
        console.log(source);
        const name = form.find('input[name="name"]').val();
        // console.log(name);
        // debugger;
        const pageTitle = $('h1:first').text();
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formHosting1s');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/inner_efsol/js/protectedemail_form.js?15876967652444";s:6:"source";s:54:"/local/templates/inner_efsol/js/protectedemail_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnProtectedEmail button').on('click', function(e) {
        const errors = $('.errors');

        const form = $('div.formProtectedEmail');
        const action = form.data('action');
        const method = form.data('method');
        // const source = $('.btnPekarnya button');
        const source = $(e.relatedTarget);
        console.log(source);
        const name = form.find('input[name="name"]').val();
        // console.log(name);
        // debugger;
        const pageTitle = $('h1:first').text().trim().replace(/[\s{2,}]+/g, ' ');
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formProtectedEmail');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/inner_efsol/js/erpimplementation_form.js?15876967652453";s:6:"source";s:57:"/local/templates/inner_efsol/js/erpimplementation_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnErpImplementation button').on('click', function(e) {
        const errors = $('.errors');

        const form = $('div.formErpImplementation');
        const action = form.data('action');
        const method = form.data('method');
        // const source = $('.btnPekarnya button');
        const source = $(e.relatedTarget);
        console.log(source);
        const name = form.find('input[name="name"]').val();
        // console.log(name);
        // debugger;
        const pageTitle = $('h1:first').text().trim().replace(/[\s{2,}]+/g, ' ');
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formErpImplementation');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/inner_efsol/js/holdingvnedrenie_form.js?15876967652450";s:6:"source";s:56:"/local/templates/inner_efsol/js/holdingvnedrenie_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnHoldingVnedrenie button').on('click', function(e) {
        const errors = $('.errors');

        const form = $('div.formHoldingVnedrenie');
        const action = form.data('action');
        const method = form.data('method');
        // const source = $('.btnPekarnya button');
        const source = $(e.relatedTarget);
        console.log(source);
        const name = form.find('input[name="name"]').val();
        // console.log(name);
        // debugger;
        const pageTitle = $('h1:first').text().trim().replace(/[\s{2,}]+/g, ' ');
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formHoldingVnedrenie');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/inner_efsol/js/serviceit_form.js?15876967652296";s:6:"source";s:49:"/local/templates/inner_efsol/js/serviceit_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $('.btnServiceIt button').on('click', function(e) {
        const errors = $('.errors');
        const form = $('div.formServiceIt');
        const action = form.data('action');
        const method = form.data('method');
        const source = $(e.relatedTarget);
        const name = form.find('input[name="name"]').val();
        const pageTitle = $('h1:first').text().trim().replace(/[\s{2,}]+/g, ' ');
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle, //h1 страницы
                'title': source.data('title'), // дата тайтл кнопки
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function(data) {
            const form = $('div.formServiceIt');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function(a, b, c) {
            console.log(a, b, c);
        });
    });
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/inner_efsol/js/for_simple_form_sender.js?15876967654951";s:6:"source";s:57:"/local/templates/inner_efsol/js/for_simple_form_sender.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {

    function initForms() {
        const btnAuditPo = $('.btnAuditPo button');
        const btnVnedrenie1sOrder = $('.btnVnedrenie1sOrder button');
        const btnAutomationDocflow = $('.btnAutomationDocflow button');
        const btnDeliveryForTradingCompanies = $('.btnDeliveryForTradingCompanies button');
        const btnAutomationMcfo = $('.btnAutomationMcfo button');
        const btnComplexAutomation = $('.btnComplexAutomation button');
        const btnItRealocation = $('.btnItRealocation button');
        const btnArendaErp = $('.btnArendaErp button');
        const btnOrderCloud = $('button#btnOrderCloud');

        var App = window.App || {};

        btnOrderCloud.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });

        btnArendaErp.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });

        btnItRealocation.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });


        btnComplexAutomation.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });

        btnAutomationMcfo.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });

        btnAuditPo.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });
        btnVnedrenie1sOrder.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });
        btnDeliveryForTradingCompanies.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });

        btnAutomationDocflow.on('click', function(e) {
            e.preventDefault();
            _this = this;
            App.sendFormOnHeader($(_this).closest('div.form'), e);
        });

        App.sendFormOnHeader = function($form, $event) {
            const form = $($form);
            const errors = form.find('.errors');
            const action = form.data('action');
            const method = form.data('method');
            const source = $($event.relatedTarget);
            const name = form.find('input[name="name"]').val();
            const pageTitle = $('h1:first').text().trim().replace(/[\s{2,}]+/g, ' ');
            const phone = form.find('input[name="phone"]').val();
            const mail = form.find('input[name="mail"]').val();
            const fid = form.find('input[name="fid"]').val();
            const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

            errors.html('');
            let error = '';
            if (phone === '') {
                error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
            }

            if (checkbox === false) {
                error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
            }

            if (error !== '') {
                errors.html(error);
                return false;
            }

            $.ajax({
                url: action,
                data: {
                    'fullname': name,
                    'phone': phone,
                    'email': mail,
                    'fid': fid,
                    'source': pageTitle, //h1 страницы
                    'title': source.data('title'), // дата тайтл кнопки
                    'product': source.data('product'),
                    'utm_campaign': source.data('utm_campaign'),
                },
                type: method
            }).done(function(data) {
                console.log(data);
                // const form = $('div.formAutomationDocflow');
                const name = form.find('input[name="name"]');
                const phone = form.find('input[name="phone"]');
                const mail = form.find('input[name="mail"]');


                name.val('');
                phone.val('');
                mail.val('');

                alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
            }).error(function(a, b, c) {
                console.log(a, b, c);
            });


        }

    }

    initForms();
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:111:"/local/templates/inner_efsol/components/rezonans/news.detail/page/jquery-ui-1.7.2.custom.min.js?158375740655211";s:6:"source";s:95:"/local/templates/inner_efsol/components/rezonans/news.detail/page/jquery-ui-1.7.2.custom.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui || (function(c) {
    var i = c.fn.remove,
        d = c.browser.mozilla && (parseFloat(c.browser.version) < 1.9);
    c.ui = {
        version: "1.7.2",
        plugin: {
            add: function(k, l, n) {
                var m = c.ui[k].prototype;
                for (var j in n) {
                    m.plugins[j] = m.plugins[j] || [];
                    m.plugins[j].push([l, n[j]])
                }
            },
            call: function(j, l, k) {
                var n = j.plugins[l];
                if (!n || !j.element[0].parentNode) {
                    return
                }
                for (var m = 0; m < n.length; m++) {
                    if (j.options[n[m][0]]) {
                        n[m][1].apply(j.element, k)
                    }
                }
            }
        },
        contains: function(k, j) {
            return document.compareDocumentPosition ? k.compareDocumentPosition(j) & 16 : k !== j && k.contains(j)
        },
        hasScroll: function(m, k) {
            if (c(m).css("overflow") == "hidden") {
                return false
            }
            var j = (k && k == "left") ? "scrollLeft" : "scrollTop",
                l = false;
            if (m[j] > 0) {
                return true
            }
            m[j] = 1;
            l = (m[j] > 0);
            m[j] = 0;
            return l
        },
        isOverAxis: function(k, j, l) {
            return (k > j) && (k < (j + l))
        },
        isOver: function(o, k, n, m, j, l) {
            return c.ui.isOverAxis(o, n, j) && c.ui.isOverAxis(k, m, l)
        },
        keyCode: {
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    };
    if (d) {
        var f = c.attr,
            e = c.fn.removeAttr,
            h = "http://www.w3.org/2005/07/aaa",
            a = /^aria-/,
            b = /^wairole:/;
        c.attr = function(k, j, l) {
            var m = l !== undefined;
            return (j == "role" ? (m ? f.call(this, k, j, "wairole:" + l) : (f.apply(this, arguments) || "").replace(b, "")) : (a.test(j) ? (m ? k.setAttributeNS(h, j.replace(a, "aaa:"), l) : f.call(this, k, j.replace(a, "aaa:"))) : f.apply(this, arguments)))
        };
        c.fn.removeAttr = function(j) {
            return (a.test(j) ? this.each(function() {
                this.removeAttributeNS(h, j.replace(a, ""))
            }) : e.call(this, j))
        }
    }
    c.fn.extend({
        remove: function() {
            c("*", this).add(this).each(function() {
                c(this).triggerHandler("remove")
            });
            return i.apply(this, arguments)
        },
        enableSelection: function() {
            return this.attr("unselectable", "off").css("MozUserSelect", "").unbind("selectstart.ui")
        },
        disableSelection: function() {
            return this.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
                return false
            })
        },
        scrollParent: function() {
            var j;
            if ((c.browser.msie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                j = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(c.curCSS(this, "position", 1)) && (/(auto|scroll)/).test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0)
            } else {
                j = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !j.length ? c(document) : j
        }
    });
    c.extend(c.expr[":"], {
        data: function(l, k, j) {
            return !!c.data(l, j[3])
        },
        focusable: function(k) {
            var l = k.nodeName.toLowerCase(),
                j = c.attr(k, "tabindex");
            return (/input|select|textarea|button|object/.test(l) ? !k.disabled : "a" == l || "area" == l ? k.href || !isNaN(j) : !isNaN(j)) && !c(k)["area" == l ? "parents" : "closest"](":hidden").length
        },
        tabbable: function(k) {
            var j = c.attr(k, "tabindex");
            return (isNaN(j) || j >= 0) && c(k).is(":focusable")
        }
    });

    function g(m, n, o, l) {
        function k(q) {
            var p = c[m][n][q] || [];
            return (typeof p == "string" ? p.split(/,?\s+/) : p)
        }
        var j = k("getter");
        if (l.length == 1 && typeof l[0] == "string") {
            j = j.concat(k("getterSetter"))
        }
        return (c.inArray(o, j) != -1)
    }
    c.widget = function(k, j) {
        var l = k.split(".")[0];
        k = k.split(".")[1];
        c.fn[k] = function(p) {
            var n = (typeof p == "string"),
                o = Array.prototype.slice.call(arguments, 1);
            if (n && p.substring(0, 1) == "_") {
                return this
            }
            if (n && g(l, k, p, o)) {
                var m = c.data(this[0], k);
                return (m ? m[p].apply(m, o) : undefined)
            }
            return this.each(function() {
                var q = c.data(this, k);
                (!q && !n && c.data(this, k, new c[l][k](this, p))._init());
                (q && n && c.isFunction(q[p]) && q[p].apply(q, o))
            })
        };
        c[l] = c[l] || {};
        c[l][k] = function(o, n) {
            var m = this;
            this.namespace = l;
            this.widgetName = k;
            this.widgetEventPrefix = c[l][k].eventPrefix || k;
            this.widgetBaseClass = l + "-" + k;
            this.options = c.extend({}, c.widget.defaults, c[l][k].defaults, c.metadata && c.metadata.get(o)[k], n);
            this.element = c(o).bind("setData." + k, function(q, p, r) {
                if (q.target == o) {
                    return m._setData(p, r)
                }
            }).bind("getData." + k, function(q, p) {
                if (q.target == o) {
                    return m._getData(p)
                }
            }).bind("remove", function() {
                return m.destroy()
            })
        };
        c[l][k].prototype = c.extend({}, c.widget.prototype, j);
        c[l][k].getterSetter = "option"
    };
    c.widget.prototype = {
        _init: function() {},
        destroy: function() {
            this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass + "-disabled " + this.namespace + "-state-disabled").removeAttr("aria-disabled")
        },
        option: function(l, m) {
            var k = l,
                j = this;
            if (typeof l == "string") {
                if (m === undefined) {
                    return this._getData(l)
                }
                k = {};
                k[l] = m
            }
            c.each(k, function(n, o) {
                j._setData(n, o)
            })
        },
        _getData: function(j) {
            return this.options[j]
        },
        _setData: function(j, k) {
            this.options[j] = k;
            if (j == "disabled") {
                this.element[k ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled " + this.namespace + "-state-disabled").attr("aria-disabled", k)
            }
        },
        enable: function() {
            this._setData("disabled", false)
        },
        disable: function() {
            this._setData("disabled", true)
        },
        _trigger: function(l, m, n) {
            var p = this.options[l],
                j = (l == this.widgetEventPrefix ? l : this.widgetEventPrefix + l);
            m = c.Event(m);
            m.type = j;
            if (m.originalEvent) {
                for (var k = c.event.props.length, o; k;) {
                    o = c.event.props[--k];
                    m[o] = m.originalEvent[o]
                }
            }
            this.element.trigger(m, n);
            return !(c.isFunction(p) && p.call(this.element[0], m, n) === false || m.isDefaultPrevented())
        }
    };
    c.widget.defaults = {
        disabled: false
    };
    c.ui.mouse = {
        _mouseInit: function() {
            var j = this;
            this.element.bind("mousedown." + this.widgetName, function(k) {
                return j._mouseDown(k)
            }).bind("click." + this.widgetName, function(k) {
                if (j._preventClickEvent) {
                    j._preventClickEvent = false;
                    k.stopImmediatePropagation();
                    return false
                }
            });
            if (c.browser.msie) {
                this._mouseUnselectable = this.element.attr("unselectable");
                this.element.attr("unselectable", "on")
            }
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            (c.browser.msie && this.element.attr("unselectable", this._mouseUnselectable))
        },
        _mouseDown: function(l) {
            l.originalEvent = l.originalEvent || {};
            if (l.originalEvent.mouseHandled) {
                return
            }(this._mouseStarted && this._mouseUp(l));
            this._mouseDownEvent = l;
            var k = this,
                m = (l.which == 1),
                j = (typeof this.options.cancel == "string" ? c(l.target).parents().add(l.target).filter(this.options.cancel).length : false);
            if (!m || j || !this._mouseCapture(l)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    k.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(l) && this._mouseDelayMet(l)) {
                this._mouseStarted = (this._mouseStart(l) !== false);
                if (!this._mouseStarted) {
                    l.preventDefault();
                    return true
                }
            }
            this._mouseMoveDelegate = function(n) {
                return k._mouseMove(n)
            };
            this._mouseUpDelegate = function(n) {
                return k._mouseUp(n)
            };
            c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            (c.browser.safari || l.preventDefault());
            l.originalEvent.mouseHandled = true;
            return true
        },
        _mouseMove: function(j) {
            if (c.browser.msie && !j.button) {
                return this._mouseUp(j)
            }
            if (this._mouseStarted) {
                this._mouseDrag(j);
                return j.preventDefault()
            }
            if (this._mouseDistanceMet(j) && this._mouseDelayMet(j)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, j) !== false);
                (this._mouseStarted ? this._mouseDrag(j) : this._mouseUp(j))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(j) {
            c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                this._preventClickEvent = (j.target == this._mouseDownEvent.target);
                this._mouseStop(j)
            }
            return false
        },
        _mouseDistanceMet: function(j) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - j.pageX), Math.abs(this._mouseDownEvent.pageY - j.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function(j) {
            return this.mouseDelayMet
        },
        _mouseStart: function(j) {},
        _mouseDrag: function(j) {},
        _mouseStop: function(j) {},
        _mouseCapture: function(j) {
            return true
        }
    };
    c.ui.mouse.defaults = {
        cancel: null,
        distance: 1,
        delay: 0
    }
})(jQuery);;
/*
 * jQuery UI Draggable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */
(function(a) {
    a.widget("ui.draggable", a.extend({}, a.ui.mouse, {
        _init: function() {
            if (this.options.helper == "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }(this.options.addClasses && this.element.addClass("ui-draggable"));
            (this.options.disabled && this.element.addClass("ui-draggable-disabled"));
            this._mouseInit()
        },
        destroy: function() {
            if (!this.element.data("draggable")) {
                return
            }
            this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function(b) {
            var c = this.options;
            if (this.helper || c.disabled || a(b.target).is(".ui-resizable-handle")) {
                return false
            }
            this.handle = this._getHandle(b);
            if (!this.handle) {
                return false
            }
            return true
        },
        _mouseStart: function(b) {
            var c = this.options;
            this.helper = this._createHelper(b);
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(b);
            this.originalPageX = b.pageX;
            this.originalPageY = b.pageY;
            if (c.cursorAt) {
                this._adjustOffsetFromHelper(c.cursorAt)
            }
            if (c.containment) {
                this._setContainment()
            }
            this._trigger("start", b);
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !c.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, b)
            }
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(b, true);
            return true
        },
        _mouseDrag: function(b, d) {
            this.position = this._generatePosition(b);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!d) {
                var c = this._uiHash();
                this._trigger("drag", b, c);
                this.position = c.position
            }
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, b)
            }
            return false
        },
        _mouseStop: function(c) {
            var d = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                d = a.ui.ddmanager.drop(this, c)
            }
            if (this.dropped) {
                d = this.dropped;
                this.dropped = false
            }
            if ((this.options.revert == "invalid" && !d) || (this.options.revert == "valid" && d) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, d))) {
                var b = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    b._trigger("stop", c);
                    b._clear()
                })
            } else {
                this._trigger("stop", c);
                this._clear()
            }
            return false
        },
        _getHandle: function(b) {
            var c = !this.options.handle || !a(this.options.handle, this.element).length ? true : false;
            a(this.options.handle, this.element).find("*").andSelf().each(function() {
                if (this == b.target) {
                    c = true
                }
            });
            return c
        },
        _createHelper: function(c) {
            var d = this.options;
            var b = a.isFunction(d.helper) ? a(d.helper.apply(this.element[0], [c])) : (d.helper == "clone" ? this.element.clone() : this.element);
            if (!b.parents("body").length) {
                b.appendTo((d.appendTo == "parent" ? this.element[0].parentNode : d.appendTo))
            }
            if (b[0] != this.element[0] && !(/(fixed|absolute)/).test(b.css("position"))) {
                b.css("position", "absolute")
            }
            return b
        },
        _adjustOffsetFromHelper: function(b) {
            if (b.left != undefined) {
                this.offset.click.left = b.left + this.margins.left
            }
            if (b.right != undefined) {
                this.offset.click.left = this.helperProportions.width - b.right + this.margins.left
            }
            if (b.top != undefined) {
                this.offset.click.top = b.top + this.margins.top
            }
            if (b.bottom != undefined) {
                this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                b.left += this.scrollParent.scrollLeft();
                b.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) {
                b = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var b = this.element.position();
                return {
                    top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if (e.containment == "parent") {
                e.containment = this.helper[0].parentNode
            }
            if (e.containment == "document" || e.containment == "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(e.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(e.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(e.containment) && e.containment.constructor != Array) {
                var c = a(e.containment)[0];
                if (!c) {
                    return
                }
                var d = a(e.containment).offset();
                var b = (a(c).css("overflow") != "hidden");
                this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (b ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (b ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            } else {
                if (e.containment.constructor == Array) {
                    this.containment = e.containment
                }
            }
        },
        _convertPositionTo: function(f, h) {
            if (!h) {
                h = this.position
            }
            var c = f == "absolute" ? 1 : -1;
            var e = this.options,
                b = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                g = (/(html|body)/i).test(b[0].tagName);
            return {
                top: (h.top + this.offset.relative.top * c + this.offset.parent.top * c - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (g ? 0 : b.scrollTop())) * c)),
                left: (h.left + this.offset.relative.left * c + this.offset.parent.left * c - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : b.scrollLeft()) * c))
            }
        },
        _generatePosition: function(e) {
            var h = this.options,
                b = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                i = (/(html|body)/i).test(b[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            var d = e.pageX;
            var c = e.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (e.pageX - this.offset.click.left < this.containment[0]) {
                        d = this.containment[0] + this.offset.click.left
                    }
                    if (e.pageY - this.offset.click.top < this.containment[1]) {
                        c = this.containment[1] + this.offset.click.top
                    }
                    if (e.pageX - this.offset.click.left > this.containment[2]) {
                        d = this.containment[2] + this.offset.click.left
                    }
                    if (e.pageY - this.offset.click.top > this.containment[3]) {
                        c = this.containment[3] + this.offset.click.top
                    }
                }
                if (h.grid) {
                    var g = this.originalPageY + Math.round((c - this.originalPageY) / h.grid[1]) * h.grid[1];
                    c = this.containment ? (!(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g : (!(g - this.offset.click.top < this.containment[1]) ? g - h.grid[1] : g + h.grid[1])) : g;
                    var f = this.originalPageX + Math.round((d - this.originalPageX) / h.grid[0]) * h.grid[0];
                    d = this.containment ? (!(f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f : (!(f - this.offset.click.left < this.containment[0]) ? f - h.grid[0] : f + h.grid[0])) : f
                }
            }
            return {
                top: (c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (i ? 0 : b.scrollTop())))),
                left: (d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : b.scrollLeft())))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(b, c, d) {
            d = d || this._uiHash();
            a.ui.plugin.call(this, b, [c, d]);
            if (b == "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return a.widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function(b) {
            return {
                helper: this.helper,
                position: this.position,
                absolutePosition: this.positionAbs,
                offset: this.positionAbs
            }
        }
    }));
    a.extend(a.ui.draggable, {
        version: "1.7.2",
        eventPrefix: "drag",
        defaults: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            cancel: ":input,option",
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            delay: 0,
            distance: 1,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        }
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(c, e) {
            var d = a(this).data("draggable"),
                f = d.options,
                b = a.extend({}, e, {
                    item: d.element
                });
            d.sortables = [];
            a(f.connectToSortable).each(function() {
                var g = a.data(this, "sortable");
                if (g && !g.options.disabled) {
                    d.sortables.push({
                        instance: g,
                        shouldRevert: g.options.revert
                    });
                    g._refreshItems();
                    g._trigger("activate", c, b)
                }
            })
        },
        stop: function(c, e) {
            var d = a(this).data("draggable"),
                b = a.extend({}, e, {
                    item: d.element
                });
            a.each(d.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    d.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = true
                    }
                    this.instance._mouseStop(c);
                    this.instance.options.helper = this.instance.options._helper;
                    if (d.options.helper == "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", c, b)
                }
            })
        },
        drag: function(c, f) {
            var e = a(this).data("draggable"),
                b = this;
            var d = function(i) {
                var n = this.offset.click.top,
                    m = this.offset.click.left;
                var g = this.positionAbs.top,
                    k = this.positionAbs.left;
                var j = i.height,
                    l = i.width;
                var p = i.top,
                    h = i.left;
                return a.ui.isOver(g + n, k + m, p, h, j, l)
            };
            a.each(e.sortables, function(g) {
                this.instance.positionAbs = e.positionAbs;
                this.instance.helperProportions = e.helperProportions;
                this.instance.offset.click = e.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = a(b).clone().appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return f.helper[0]
                        };
                        c.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(c, true);
                        this.instance._mouseStart(c, true, true);
                        this.instance.offset.click.top = e.offset.click.top;
                        this.instance.offset.click.left = e.offset.click.left;
                        this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
                        e._trigger("toSortable", c);
                        e.dropped = this.instance.element;
                        e.currentItem = e.element;
                        this.instance.fromOutside = e
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(c)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", c, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(c, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        e._trigger("fromSortable", c);
                        e.dropped = false
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function(c, d) {
            var b = a("body"),
                e = a(this).data("draggable").options;
            if (b.css("cursor")) {
                e._cursor = b.css("cursor")
            }
            b.css("cursor", e.cursor)
        },
        stop: function(b, c) {
            var d = a(this).data("draggable").options;
            if (d._cursor) {
                a("body").css("cursor", d._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable", "iframeFix", {
        start: function(b, c) {
            var d = a(this).data("draggable").options;
            a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(a(this).offset()).appendTo("body")
            })
        },
        stop: function(b, c) {
            a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            })
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(c, d) {
            var b = a(d.helper),
                e = a(this).data("draggable").options;
            if (b.css("opacity")) {
                e._opacity = b.css("opacity")
            }
            b.css("opacity", e.opacity)
        },
        stop: function(b, c) {
            var d = a(this).data("draggable").options;
            if (d._opacity) {
                a(c.helper).css("opacity", d._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function(c, d) {
            var b = a(this).data("draggable");
            if (b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML") {
                b.overflowOffset = b.scrollParent.offset()
            }
        },
        drag: function(d, e) {
            var c = a(this).data("draggable"),
                f = c.options,
                b = false;
            if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") {
                if (!f.axis || f.axis != "x") {
                    if ((c.overflowOffset.top + c.scrollParent[0].offsetHeight) - d.pageY < f.scrollSensitivity) {
                        c.scrollParent[0].scrollTop = b = c.scrollParent[0].scrollTop + f.scrollSpeed
                    } else {
                        if (d.pageY - c.overflowOffset.top < f.scrollSensitivity) {
                            c.scrollParent[0].scrollTop = b = c.scrollParent[0].scrollTop - f.scrollSpeed
                        }
                    }
                }
                if (!f.axis || f.axis != "y") {
                    if ((c.overflowOffset.left + c.scrollParent[0].offsetWidth) - d.pageX < f.scrollSensitivity) {
                        c.scrollParent[0].scrollLeft = b = c.scrollParent[0].scrollLeft + f.scrollSpeed
                    } else {
                        if (d.pageX - c.overflowOffset.left < f.scrollSensitivity) {
                            c.scrollParent[0].scrollLeft = b = c.scrollParent[0].scrollLeft - f.scrollSpeed
                        }
                    }
                }
            } else {
                if (!f.axis || f.axis != "x") {
                    if (d.pageY - a(document).scrollTop() < f.scrollSensitivity) {
                        b = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed)
                    } else {
                        if (a(window).height() - (d.pageY - a(document).scrollTop()) < f.scrollSensitivity) {
                            b = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed)
                        }
                    }
                }
                if (!f.axis || f.axis != "y") {
                    if (d.pageX - a(document).scrollLeft() < f.scrollSensitivity) {
                        b = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed)
                    } else {
                        if (a(window).width() - (d.pageX - a(document).scrollLeft()) < f.scrollSensitivity) {
                            b = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
                        }
                    }
                }
            }
            if (b !== false && a.ui.ddmanager && !f.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(c, d)
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function(c, d) {
            var b = a(this).data("draggable"),
                e = b.options;
            b.snapElements = [];
            a(e.snap.constructor != String ? (e.snap.items || ":data(draggable)") : e.snap).each(function() {
                var g = a(this);
                var f = g.offset();
                if (this != b.element[0]) {
                    b.snapElements.push({
                        item: this,
                        width: g.outerWidth(),
                        height: g.outerHeight(),
                        top: f.top,
                        left: f.left
                    })
                }
            })
        },
        drag: function(u, p) {
            var g = a(this).data("draggable"),
                q = g.options;
            var y = q.snapTolerance;
            var x = p.offset.left,
                w = x + g.helperProportions.width,
                f = p.offset.top,
                e = f + g.helperProportions.height;
            for (var v = g.snapElements.length - 1; v >= 0; v--) {
                var s = g.snapElements[v].left,
                    n = s + g.snapElements[v].width,
                    m = g.snapElements[v].top,
                    A = m + g.snapElements[v].height;
                if (!((s - y < x && x < n + y && m - y < f && f < A + y) || (s - y < x && x < n + y && m - y < e && e < A + y) || (s - y < w && w < n + y && m - y < f && f < A + y) || (s - y < w && w < n + y && m - y < e && e < A + y))) {
                    if (g.snapElements[v].snapping) {
                        (g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {
                            snapItem: g.snapElements[v].item
                        })))
                    }
                    g.snapElements[v].snapping = false;
                    continue
                }
                if (q.snapMode != "inner") {
                    var c = Math.abs(m - e) <= y;
                    var z = Math.abs(A - f) <= y;
                    var j = Math.abs(s - w) <= y;
                    var k = Math.abs(n - x) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: m - g.helperProportions.height,
                            left: 0
                        }).top - g.margins.top
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: A,
                            left: 0
                        }).top - g.margins.top
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: s - g.helperProportions.width
                        }).left - g.margins.left
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: n
                        }).left - g.margins.left
                    }
                }
                var h = (c || z || j || k);
                if (q.snapMode != "outer") {
                    var c = Math.abs(m - f) <= y;
                    var z = Math.abs(A - e) <= y;
                    var j = Math.abs(s - x) <= y;
                    var k = Math.abs(n - w) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: m,
                            left: 0
                        }).top - g.margins.top
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: A - g.helperProportions.height,
                            left: 0
                        }).top - g.margins.top
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: s
                        }).left - g.margins.left
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: n - g.helperProportions.width
                        }).left - g.margins.left
                    }
                }
                if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
                    (g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {
                        snapItem: g.snapElements[v].item
                    })))
                }
                g.snapElements[v].snapping = (c || z || j || k || h)
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function(b, c) {
            var e = a(this).data("draggable").options;
            var d = a.makeArray(a(e.stack.group)).sort(function(g, f) {
                return (parseInt(a(g).css("zIndex"), 10) || e.stack.min) - (parseInt(a(f).css("zIndex"), 10) || e.stack.min)
            });
            a(d).each(function(f) {
                this.style.zIndex = e.stack.min + f
            });
            this[0].style.zIndex = e.stack.min + d.length
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(c, d) {
            var b = a(d.helper),
                e = a(this).data("draggable").options;
            if (b.css("zIndex")) {
                e._zIndex = b.css("zIndex")
            }
            b.css("zIndex", e.zIndex)
        },
        stop: function(b, c) {
            var d = a(this).data("draggable").options;
            if (d._zIndex) {
                a(c.helper).css("zIndex", d._zIndex)
            }
        }
    })
})(jQuery);;
/*
 * jQuery UI Resizable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */
(function(c) {
    c.widget("ui.resizable", c.extend({}, c.ui.mouse, {
        _init: function() {
            var e = this,
                j = this.options;
            this.element.addClass("ui-resizable");
            c.extend(this, {
                _aspectRatio: !!(j.aspectRatio),
                aspectRatio: j.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: j.helper || j.ghost || j.animate ? j.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                if (/relative/.test(this.element.css("position")) && c.browser.opera) {
                    this.element.css({
                        position: "relative",
                        top: "auto",
                        left: "auto"
                    })
                }
                this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("resizable", this.element.data("resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = j.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor == String) {
                if (this.handles == "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                var k = this.handles.split(",");
                this.handles = {};
                for (var f = 0; f < k.length; f++) {
                    var h = c.trim(k[f]),
                        d = "ui-resizable-" + h;
                    var g = c('<div class="ui-resizable-handle ' + d + '"></div>');
                    if (/sw|se|ne|nw/.test(h)) {
                        g.css({
                            zIndex: ++j.zIndex
                        })
                    }
                    if ("se" == h) {
                        g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[h] = ".ui-resizable-" + h;
                    this.element.append(g)
                }
            }
            this._renderAxis = function(p) {
                p = p || this.element;
                for (var m in this.handles) {
                    if (this.handles[m].constructor == String) {
                        this.handles[m] = c(this.handles[m], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var n = c(this.handles[m], this.element),
                            o = 0;
                        o = /sw|ne|nw|se|n|s/.test(m) ? n.outerHeight() : n.outerWidth();
                        var l = ["padding", /ne|nw|n/.test(m) ? "Top" : /se|sw|s/.test(m) ? "Bottom" : /^e$/.test(m) ? "Right" : "Left"].join("");
                        p.css(l, o);
                        this._proportionallyResize()
                    }
                    if (!c(this.handles[m]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = c(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!e.resizing) {
                    if (this.className) {
                        var i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    e.axis = i && i[1] ? i[1] : "se"
                }
            });
            if (j.autoHide) {
                this._handles.hide();
                c(this.element).addClass("ui-resizable-autohide").hover(function() {
                    c(this).removeClass("ui-resizable-autohide");
                    e._handles.show()
                }, function() {
                    if (!e.resizing) {
                        c(this).addClass("ui-resizable-autohide");
                        e._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var d = function(f) {
                c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                d(this.element);
                var e = this.element;
                e.parent().append(this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                })).end().remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            d(this.originalElement)
        },
        _mouseCapture: function(e) {
            var f = false;
            for (var d in this.handles) {
                if (c(this.handles[d])[0] == e.target) {
                    f = true
                }
            }
            return this.options.disabled || !!f
        },
        _mouseStart: function(f) {
            var i = this.options,
                e = this.element.position(),
                d = this.element;
            this.resizing = true;
            this.documentScroll = {
                top: c(document).scrollTop(),
                left: c(document).scrollLeft()
            };
            if (d.is(".ui-draggable") || (/absolute/).test(d.css("position"))) {
                d.css({
                    position: "absolute",
                    top: e.top,
                    left: e.left
                })
            }
            if (c.browser.opera && (/relative/).test(d.css("position"))) {
                d.css({
                    position: "relative",
                    top: "auto",
                    left: "auto"
                })
            }
            this._renderProxy();
            var j = b(this.helper.css("left")),
                g = b(this.helper.css("top"));
            if (i.containment) {
                j += c(i.containment).scrollLeft() || 0;
                g += c(i.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: j,
                top: g
            };
            this.size = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalSize = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalPosition = {
                left: j,
                top: g
            };
            this.sizeDiff = {
                width: d.outerWidth() - d.width(),
                height: d.outerHeight() - d.height()
            };
            this.originalMousePosition = {
                left: f.pageX,
                top: f.pageY
            };
            this.aspectRatio = (typeof i.aspectRatio == "number") ? i.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            var h = c(".ui-resizable-" + this.axis).css("cursor");
            c("body").css("cursor", h == "auto" ? this.axis + "-resize" : h);
            d.addClass("ui-resizable-resizing");
            this._propagate("start", f);
            return true
        },
        _mouseDrag: function(d) {
            var g = this.helper,
                f = this.options,
                l = {},
                p = this,
                i = this.originalMousePosition,
                m = this.axis;
            var q = (d.pageX - i.left) || 0,
                n = (d.pageY - i.top) || 0;
            var h = this._change[m];
            if (!h) {
                return false
            }
            var k = h.apply(this, [d, q, n]),
                j = c.browser.msie && c.browser.version < 7,
                e = this.sizeDiff;
            if (this._aspectRatio || d.shiftKey) {
                k = this._updateRatio(k, d)
            }
            k = this._respectSize(k, d);
            this._propagate("resize", d);
            g.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            });
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            this._updateCache(k);
            this._trigger("resize", d, this.ui());
            return false
        },
        _mouseStop: function(g) {
            this.resizing = false;
            var h = this.options,
                l = this;
            if (this._helper) {
                var f = this._proportionallyResizeElements,
                    d = f.length && (/textarea/i).test(f[0].nodeName),
                    e = d && c.ui.hasScroll(f[0], "left") ? 0 : l.sizeDiff.height,
                    j = d ? 0 : l.sizeDiff.width;
                var m = {
                        width: (l.size.width - j),
                        height: (l.size.height - e)
                    },
                    i = (parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left)) || null,
                    k = (parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top)) || null;
                if (!h.animate) {
                    this.element.css(c.extend(m, {
                        top: k,
                        left: i
                    }))
                }
                l.helper.height(l.size.height);
                l.helper.width(l.size.width);
                if (this._helper && !h.animate) {
                    this._proportionallyResize()
                }
            }
            c("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", g);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updateCache: function(d) {
            var e = this.options;
            this.offset = this.helper.offset();
            if (a(d.left)) {
                this.position.left = d.left
            }
            if (a(d.top)) {
                this.position.top = d.top
            }
            if (a(d.height)) {
                this.size.height = d.height
            }
            if (a(d.width)) {
                this.size.width = d.width
            }
        },
        _updateRatio: function(g, f) {
            var h = this.options,
                i = this.position,
                e = this.size,
                d = this.axis;
            if (g.height) {
                g.width = (e.height * this.aspectRatio)
            } else {
                if (g.width) {
                    g.height = (e.width / this.aspectRatio)
                }
            }
            if (d == "sw") {
                g.left = i.left + (e.width - g.width);
                g.top = null
            }
            if (d == "nw") {
                g.top = i.top + (e.height - g.height);
                g.left = i.left + (e.width - g.width)
            }
            return g
        },
        _respectSize: function(k, f) {
            var i = this.helper,
                h = this.options,
                q = this._aspectRatio || f.shiftKey,
                p = this.axis,
                s = a(k.width) && h.maxWidth && (h.maxWidth < k.width),
                l = a(k.height) && h.maxHeight && (h.maxHeight < k.height),
                g = a(k.width) && h.minWidth && (h.minWidth > k.width),
                r = a(k.height) && h.minHeight && (h.minHeight > k.height);
            if (g) {
                k.width = h.minWidth
            }
            if (r) {
                k.height = h.minHeight
            }
            if (s) {
                k.width = h.maxWidth
            }
            if (l) {
                k.height = h.maxHeight
            }
            var e = this.originalPosition.left + this.originalSize.width,
                n = this.position.top + this.size.height;
            var j = /sw|nw|w/.test(p),
                d = /nw|ne|n/.test(p);
            if (g && j) {
                k.left = e - h.minWidth
            }
            if (s && j) {
                k.left = e - h.maxWidth
            }
            if (r && d) {
                k.top = n - h.minHeight
            }
            if (l && d) {
                k.top = n - h.maxHeight
            }
            var m = !k.width && !k.height;
            if (m && !k.left && k.top) {
                k.top = null
            } else {
                if (m && !k.top && k.left) {
                    k.left = null
                }
            }
            return k
        },
        _proportionallyResize: function() {
            var j = this.options;
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var f = this.helper || this.element;
            for (var e = 0; e < this._proportionallyResizeElements.length; e++) {
                var g = this._proportionallyResizeElements[e];
                if (!this.borderDif) {
                    var d = [g.css("borderTopWidth"), g.css("borderRightWidth"), g.css("borderBottomWidth"), g.css("borderLeftWidth")],
                        h = [g.css("paddingTop"), g.css("paddingRight"), g.css("paddingBottom"), g.css("paddingLeft")];
                    this.borderDif = c.map(d, function(k, m) {
                        var l = parseInt(k, 10) || 0,
                            n = parseInt(h[m], 10) || 0;
                        return l + n
                    })
                }
                if (c.browser.msie && !(!(c(f).is(":hidden") || c(f).parents(":hidden").length))) {
                    continue
                }
                g.css({
                    height: (f.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (f.width() - this.borderDif[1] - this.borderDif[3]) || 0
                })
            }
        },
        _renderProxy: function() {
            var e = this.element,
                h = this.options;
            this.elementOffset = e.offset();
            if (this._helper) {
                this.helper = this.helper || c('<div style="overflow:hidden;"></div>');
                var d = c.browser.msie && c.browser.version < 7,
                    f = (d ? 1 : 0),
                    g = (d ? 2 : -1);
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + g,
                    height: this.element.outerHeight() + g,
                    position: "absolute",
                    left: this.elementOffset.left - f + "px",
                    top: this.elementOffset.top - f + "px",
                    zIndex: ++h.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function(f, e, d) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(g, e, d) {
                var i = this.options,
                    f = this.originalSize,
                    h = this.originalPosition;
                return {
                    left: h.left + e,
                    width: f.width - e
                }
            },
            n: function(g, e, d) {
                var i = this.options,
                    f = this.originalSize,
                    h = this.originalPosition;
                return {
                    top: h.top + d,
                    height: f.height - d
                }
            },
            s: function(f, e, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function(f, e, d) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [f, e, d]))
            },
            sw: function(f, e, d) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [f, e, d]))
            },
            ne: function(f, e, d) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [f, e, d]))
            },
            nw: function(f, e, d) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [f, e, d]))
            }
        },
        _propagate: function(e, d) {
            c.ui.plugin.call(this, e, [d, this.ui()]);
            (e != "resize" && this._trigger(e, d, this.ui()))
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }));
    c.extend(c.ui.resizable, {
        version: "1.7.2",
        eventPrefix: "resize",
        defaults: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            cancel: ":input,option",
            containment: false,
            delay: 0,
            distance: 1,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1000
        }
    });
    c.ui.plugin.add("resizable", "alsoResize", {
        start: function(e, f) {
            var d = c(this).data("resizable"),
                g = d.options;
            _store = function(h) {
                c(h).each(function() {
                    c(this).data("resizable-alsoresize", {
                        width: parseInt(c(this).width(), 10),
                        height: parseInt(c(this).height(), 10),
                        left: parseInt(c(this).css("left"), 10),
                        top: parseInt(c(this).css("top"), 10)
                    })
                })
            };
            if (typeof(g.alsoResize) == "object" && !g.alsoResize.parentNode) {
                if (g.alsoResize.length) {
                    g.alsoResize = g.alsoResize[0];
                    _store(g.alsoResize)
                } else {
                    c.each(g.alsoResize, function(h, i) {
                        _store(h)
                    })
                }
            } else {
                _store(g.alsoResize)
            }
        },
        resize: function(f, h) {
            var e = c(this).data("resizable"),
                i = e.options,
                g = e.originalSize,
                k = e.originalPosition;
            var j = {
                    height: (e.size.height - g.height) || 0,
                    width: (e.size.width - g.width) || 0,
                    top: (e.position.top - k.top) || 0,
                    left: (e.position.left - k.left) || 0
                },
                d = function(l, m) {
                    c(l).each(function() {
                        var p = c(this),
                            q = c(this).data("resizable-alsoresize"),
                            o = {},
                            n = m && m.length ? m : ["width", "height", "top", "left"];
                        c.each(n || ["width", "height", "top", "left"], function(r, t) {
                            var s = (q[t] || 0) + (j[t] || 0);
                            if (s && s >= 0) {
                                o[t] = s || null
                            }
                        });
                        if (/relative/.test(p.css("position")) && c.browser.opera) {
                            e._revertToRelativePosition = true;
                            p.css({
                                position: "absolute",
                                top: "auto",
                                left: "auto"
                            })
                        }
                        p.css(o)
                    })
                };
            if (typeof(i.alsoResize) == "object" && !i.alsoResize.nodeType) {
                c.each(i.alsoResize, function(l, m) {
                    d(l, m)
                })
            } else {
                d(i.alsoResize)
            }
        },
        stop: function(e, f) {
            var d = c(this).data("resizable");
            if (d._revertToRelativePosition && c.browser.opera) {
                d._revertToRelativePosition = false;
                el.css({
                    position: "relative"
                })
            }
            c(this).removeData("resizable-alsoresize-start")
        }
    });
    c.ui.plugin.add("resizable", "animate", {
        stop: function(h, m) {
            var n = c(this).data("resizable"),
                i = n.options;
            var g = n._proportionallyResizeElements,
                d = g.length && (/textarea/i).test(g[0].nodeName),
                e = d && c.ui.hasScroll(g[0], "left") ? 0 : n.sizeDiff.height,
                k = d ? 0 : n.sizeDiff.width;
            var f = {
                    width: (n.size.width - k),
                    height: (n.size.height - e)
                },
                j = (parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left)) || null,
                l = (parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top)) || null;
            n.element.animate(c.extend(f, l && j ? {
                top: l,
                left: j
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function() {
                    var o = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    if (g && g.length) {
                        c(g[0]).css({
                            width: o.width,
                            height: o.height
                        })
                    }
                    n._updateCache(o);
                    n._propagate("resize", h)
                }
            })
        }
    });
    c.ui.plugin.add("resizable", "containment", {
        start: function(e, q) {
            var s = c(this).data("resizable"),
                i = s.options,
                k = s.element;
            var f = i.containment,
                j = (f instanceof c) ? f.get(0) : (/parent/.test(f)) ? k.parent().get(0) : f;
            if (!j) {
                return
            }
            s.containerElement = c(j);
            if (/document/.test(f) || f == document) {
                s.containerOffset = {
                    left: 0,
                    top: 0
                };
                s.containerPosition = {
                    left: 0,
                    top: 0
                };
                s.parentData = {
                    element: c(document),
                    left: 0,
                    top: 0,
                    width: c(document).width(),
                    height: c(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                var m = c(j),
                    h = [];
                c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
                    h[p] = b(m.css("padding" + o))
                });
                s.containerOffset = m.offset();
                s.containerPosition = m.position();
                s.containerSize = {
                    height: (m.innerHeight() - h[3]),
                    width: (m.innerWidth() - h[1])
                };
                var n = s.containerOffset,
                    d = s.containerSize.height,
                    l = s.containerSize.width,
                    g = (c.ui.hasScroll(j, "left") ? j.scrollWidth : l),
                    r = (c.ui.hasScroll(j) ? j.scrollHeight : d);
                s.parentData = {
                    element: j,
                    left: n.left,
                    top: n.top,
                    width: g,
                    height: r
                }
            }
        },
        resize: function(f, p) {
            var s = c(this).data("resizable"),
                h = s.options,
                e = s.containerSize,
                n = s.containerOffset,
                l = s.size,
                m = s.position,
                q = s._aspectRatio || f.shiftKey,
                d = {
                    top: 0,
                    left: 0
                },
                g = s.containerElement;
            if (g[0] != document && (/static/).test(g.css("position"))) {
                d = n
            }
            if (m.left < (s._helper ? n.left : 0)) {
                s.size.width = s.size.width + (s._helper ? (s.position.left - n.left) : (s.position.left - d.left));
                if (q) {
                    s.size.height = s.size.width / h.aspectRatio
                }
                s.position.left = h.helper ? n.left : 0
            }
            if (m.top < (s._helper ? n.top : 0)) {
                s.size.height = s.size.height + (s._helper ? (s.position.top - n.top) : s.position.top);
                if (q) {
                    s.size.width = s.size.height * h.aspectRatio
                }
                s.position.top = s._helper ? n.top : 0
            }
            s.offset.left = s.parentData.left + s.position.left;
            s.offset.top = s.parentData.top + s.position.top;
            var k = Math.abs((s._helper ? s.offset.left - d.left : (s.offset.left - d.left)) + s.sizeDiff.width),
                r = Math.abs((s._helper ? s.offset.top - d.top : (s.offset.top - n.top)) + s.sizeDiff.height);
            var j = s.containerElement.get(0) == s.element.parent().get(0),
                i = /relative|absolute/.test(s.containerElement.css("position"));
            if (j && i) {
                k -= s.parentData.left
            }
            if (k + s.size.width >= s.parentData.width) {
                s.size.width = s.parentData.width - k;
                if (q) {
                    s.size.height = s.size.width / s.aspectRatio
                }
            }
            if (r + s.size.height >= s.parentData.height) {
                s.size.height = s.parentData.height - r;
                if (q) {
                    s.size.width = s.size.height * s.aspectRatio
                }
            }
        },
        stop: function(e, m) {
            var p = c(this).data("resizable"),
                f = p.options,
                k = p.position,
                l = p.containerOffset,
                d = p.containerPosition,
                g = p.containerElement;
            var i = c(p.helper),
                q = i.offset(),
                n = i.outerWidth() - p.sizeDiff.width,
                j = i.outerHeight() - p.sizeDiff.height;
            if (p._helper && !f.animate && (/relative/).test(g.css("position"))) {
                c(this).css({
                    left: q.left - d.left - l.left,
                    width: n,
                    height: j
                })
            }
            if (p._helper && !f.animate && (/static/).test(g.css("position"))) {
                c(this).css({
                    left: q.left - d.left - l.left,
                    width: n,
                    height: j
                })
            }
        }
    });
    c.ui.plugin.add("resizable", "ghost", {
        start: function(f, g) {
            var d = c(this).data("resizable"),
                h = d.options,
                e = d.size;
            d.ghost = d.originalElement.clone();
            d.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof h.ghost == "string" ? h.ghost : "");
            d.ghost.appendTo(d.helper)
        },
        resize: function(e, f) {
            var d = c(this).data("resizable"),
                g = d.options;
            if (d.ghost) {
                d.ghost.css({
                    position: "relative",
                    height: d.size.height,
                    width: d.size.width
                })
            }
        },
        stop: function(e, f) {
            var d = c(this).data("resizable"),
                g = d.options;
            if (d.ghost && d.helper) {
                d.helper.get(0).removeChild(d.ghost.get(0))
            }
        }
    });
    c.ui.plugin.add("resizable", "grid", {
        resize: function(d, l) {
            var n = c(this).data("resizable"),
                g = n.options,
                j = n.size,
                h = n.originalSize,
                i = n.originalPosition,
                m = n.axis,
                k = g._aspectRatio || d.shiftKey;
            g.grid = typeof g.grid == "number" ? [g.grid, g.grid] : g.grid;
            var f = Math.round((j.width - h.width) / (g.grid[0] || 1)) * (g.grid[0] || 1),
                e = Math.round((j.height - h.height) / (g.grid[1] || 1)) * (g.grid[1] || 1);
            if (/^(se|s|e)$/.test(m)) {
                n.size.width = h.width + f;
                n.size.height = h.height + e
            } else {
                if (/^(ne)$/.test(m)) {
                    n.size.width = h.width + f;
                    n.size.height = h.height + e;
                    n.position.top = i.top - e
                } else {
                    if (/^(sw)$/.test(m)) {
                        n.size.width = h.width + f;
                        n.size.height = h.height + e;
                        n.position.left = i.left - f
                    } else {
                        n.size.width = h.width + f;
                        n.size.height = h.height + e;
                        n.position.top = i.top - e;
                        n.position.left = i.left - f
                    }
                }
            }
        }
    });
    var b = function(d) {
        return parseInt(d, 10) || 0
    };
    var a = function(d) {
        return !isNaN(parseInt(d, 10))
    }
})(jQuery);;
/*
 * jQuery UI Dialog 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 *	ui.resizable.js
 */
(function(c) {
    var b = {
            dragStart: "start.draggable",
            drag: "drag.draggable",
            dragStop: "stop.draggable",
            maxHeight: "maxHeight.resizable",
            minHeight: "minHeight.resizable",
            maxWidth: "maxWidth.resizable",
            minWidth: "minWidth.resizable",
            resizeStart: "start.resizable",
            resize: "drag.resizable",
            resizeStop: "stop.resizable"
        },
        a = "ui-dialog ui-widget ui-widget-content ui-corner-all ";
    c.widget("ui.dialog", {
        _init: function() {
            this.originalTitle = this.element.attr("title");
            var l = this,
                m = this.options,
                j = m.title || this.originalTitle || "&nbsp;",
                e = c.ui.dialog.getTitleId(this.element),
                k = (this.uiDialog = c("<div/>")).appendTo(document.body).hide().addClass(a + m.dialogClass).css({
                    position: "absolute",
                    overflow: "hidden",
                    zIndex: m.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function(n) {
                    (m.closeOnEscape && n.keyCode && n.keyCode == c.ui.keyCode.ESCAPE && l.close(n))
                }).attr({
                    role: "dialog",
                    "aria-labelledby": e
                }).mousedown(function(n) {
                    l.moveToTop(false, n)
                }),
                g = this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k),
                f = (this.uiDialogTitlebar = c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),
                i = c('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                    i.addClass("ui-state-hover")
                }, function() {
                    i.removeClass("ui-state-hover")
                }).focus(function() {
                    i.addClass("ui-state-focus")
                }).blur(function() {
                    i.removeClass("ui-state-focus")
                }).mousedown(function(n) {
                    n.stopPropagation()
                }).click(function(n) {
                    l.close(n);
                    return false
                }).appendTo(f),
                h = (this.uiDialogTitlebarCloseText = c("<span/>")).addClass("ui-icon ui-icon-closethick").text(m.closeText).appendTo(i),
                d = c("<span/>").addClass("ui-dialog-title").attr("id", e).html(j).prependTo(f);
            f.find("*").add(f).disableSelection();
            (m.draggable && c.fn.draggable && this._makeDraggable());
            (m.resizable && c.fn.resizable && this._makeResizable());
            this._createButtons(m.buttons);
            this._isOpen = false;
            (m.bgiframe && c.fn.bgiframe && k.bgiframe());
            (m.autoOpen && this.open())
        },
        destroy: function() {
            (this.overlay && this.overlay.destroy());
            this.uiDialog.hide();
            this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            this.uiDialog.remove();
            (this.originalTitle && this.element.attr("title", this.originalTitle))
        },
        close: function(f) {
            var d = this;
            if (false === d._trigger("beforeclose", f)) {
                return
            }(d.overlay && d.overlay.destroy());
            d.uiDialog.unbind("keypress.ui-dialog");
            (d.options.hide ? d.uiDialog.hide(d.options.hide, function() {
                d._trigger("close", f)
            }) : d.uiDialog.hide() && d._trigger("close", f));
            c.ui.dialog.overlay.resize();
            d._isOpen = false;
            if (d.options.modal) {
                var e = 0;
                c(".ui-dialog").each(function() {
                    if (this != d.uiDialog[0]) {
                        e = Math.max(e, c(this).css("z-index"))
                    }
                });
                c.ui.dialog.maxZ = e
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(f, e) {
            if ((this.options.modal && !f) || (!this.options.stack && !this.options.modal)) {
                return this._trigger("focus", e)
            }
            if (this.options.zIndex > c.ui.dialog.maxZ) {
                c.ui.dialog.maxZ = this.options.zIndex
            }(this.overlay && this.overlay.$el.css("z-index", c.ui.dialog.overlay.maxZ = ++c.ui.dialog.maxZ));
            var d = {
                scrollTop: this.element.attr("scrollTop"),
                scrollLeft: this.element.attr("scrollLeft")
            };
            this.uiDialog.css("z-index", ++c.ui.dialog.maxZ);
            this.element.attr(d);
            this._trigger("focus", e)
        },
        open: function() {
            if (this._isOpen) {
                return
            }
            var e = this.options,
                d = this.uiDialog;
            this.overlay = e.modal ? new c.ui.dialog.overlay(this) : null;
            (d.next().length && d.appendTo("body"));
            this._size();
            this._position(e.position);
            d.show(e.show);
            this.moveToTop(true);
            (e.modal && d.bind("keypress.ui-dialog", function(h) {
                if (h.keyCode != c.ui.keyCode.TAB) {
                    return
                }
                var g = c(":tabbable", this),
                    i = g.filter(":first")[0],
                    f = g.filter(":last")[0];
                if (h.target == f && !h.shiftKey) {
                    setTimeout(function() {
                        i.focus()
                    }, 1)
                } else {
                    if (h.target == i && h.shiftKey) {
                        setTimeout(function() {
                            f.focus()
                        }, 1)
                    }
                }
            }));
            c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();
            this._trigger("open");
            this._isOpen = true
        },
        _createButtons: function(g) {
            var f = this,
                d = false,
                e = c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiDialog.find(".ui-dialog-buttonpane").remove();
            (typeof g == "object" && g !== null && c.each(g, function() {
                return !(d = true)
            }));
            if (d) {
                c.each(g, function(h, i) {
                    c('<button type="button"></button>').addClass("ui-state-default ui-corner-all").text(h).click(function() {
                        i.apply(f.element[0], arguments)
                    }).hover(function() {
                        c(this).addClass("ui-state-hover")
                    }, function() {
                        c(this).removeClass("ui-state-hover")
                    }).focus(function() {
                        c(this).addClass("ui-state-focus")
                    }).blur(function() {
                        c(this).removeClass("ui-state-focus")
                    }).appendTo(e)
                });
                e.appendTo(this.uiDialog)
            }
        },
        _makeDraggable: function() {
            var d = this,
                f = this.options,
                e;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function() {
                    e = f.height;
                    c(this).height(c(this).height()).addClass("ui-dialog-dragging");
                    (f.dragStart && f.dragStart.apply(d.element[0], arguments))
                },
                drag: function() {
                    (f.drag && f.drag.apply(d.element[0], arguments))
                },
                stop: function() {
                    c(this).removeClass("ui-dialog-dragging").height(e);
                    (f.dragStop && f.dragStop.apply(d.element[0], arguments));
                    c.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(g) {
            g = (g === undefined ? this.options.resizable : g);
            var d = this,
                f = this.options,
                e = typeof g == "string" ? g : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                alsoResize: this.element,
                maxWidth: f.maxWidth,
                maxHeight: f.maxHeight,
                minWidth: f.minWidth,
                minHeight: f.minHeight,
                start: function() {
                    c(this).addClass("ui-dialog-resizing");
                    (f.resizeStart && f.resizeStart.apply(d.element[0], arguments))
                },
                resize: function() {
                    (f.resize && f.resize.apply(d.element[0], arguments))
                },
                handles: e,
                stop: function() {
                    c(this).removeClass("ui-dialog-resizing");
                    f.height = c(this).height();
                    f.width = c(this).width();
                    (f.resizeStop && f.resizeStop.apply(d.element[0], arguments));
                    c.ui.dialog.overlay.resize()
                }
            }).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _position: function(i) {
            var e = c(window),
                f = c(document),
                g = f.scrollTop(),
                d = f.scrollLeft(),
                h = g;
            if (c.inArray(i, ["center", "top", "right", "bottom", "left"]) >= 0) {
                i = [i == "right" || i == "left" ? i : "center", i == "top" || i == "bottom" ? i : "middle"]
            }
            if (i.constructor != Array) {
                i = ["center", "middle"]
            }
            if (i[0].constructor == Number) {
                d += i[0]
            } else {
                switch (i[0]) {
                    case "left":
                        d += 0;
                        break;
                    case "right":
                        d += e.width() - this.uiDialog.outerWidth();
                        break;
                    default:
                    case "center":
                        d += (e.width() - this.uiDialog.outerWidth()) / 2
                }
            }
            if (i[1].constructor == Number) {
                g += i[1]
            } else {
                switch (i[1]) {
                    case "top":
                        g += 0;
                        break;
                    case "bottom":
                        g += e.height() - this.uiDialog.outerHeight();
                        break;
                    default:
                    case "middle":
                        g += (e.height() - this.uiDialog.outerHeight()) / 2
                }
            }
            g = Math.max(g, h);
            this.uiDialog.css({
                top: g,
                left: d
            })
        },
        _setData: function(e, f) {
            (b[e] && this.uiDialog.data(b[e], f));
            switch (e) {
                case "buttons":
                    this._createButtons(f);
                    break;
                case "closeText":
                    this.uiDialogTitlebarCloseText.text(f);
                    break;
                case "dialogClass":
                    this.uiDialog.removeClass(this.options.dialogClass).addClass(a + f);
                    break;
                case "draggable":
                    (f ? this._makeDraggable() : this.uiDialog.draggable("destroy"));
                    break;
                case "height":
                    this.uiDialog.height(f);
                    break;
                case "position":
                    this._position(f);
                    break;
                case "resizable":
                    var d = this.uiDialog,
                        g = this.uiDialog.is(":data(resizable)");
                    (g && !f && d.resizable("destroy"));
                    (g && typeof f == "string" && d.resizable("option", "handles", f));
                    (g || this._makeResizable(f));
                    break;
                case "title":
                    c(".ui-dialog-title", this.uiDialogTitlebar).html(f || "&nbsp;");
                    break;
                case "width":
                    this.uiDialog.width(f);
                    break
            }
            c.widget.prototype._setData.apply(this, arguments)
        },
        _size: function() {
            var e = this.options;
            this.element.css({
                height: 0,
                minHeight: 0,
                width: "auto"
            });
            var d = this.uiDialog.css({
                height: "auto",
                width: e.width
            }).height();
            this.element.css({
                minHeight: Math.max(e.minHeight - d, 0),
                height: e.height == "auto" ? "auto" : Math.max(e.height - d, 0)
            })
        }
    });
    c.extend(c.ui.dialog, {
        version: "1.7.2",
        defaults: {
            autoOpen: true,
            bgiframe: false,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: "center",
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1000
        },
        getter: "isOpen",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(d) {
            return "ui-dialog-title-" + (d.attr("id") || ++this.uuid)
        },
        overlay: function(d) {
            this.$el = c.ui.dialog.overlay.create(d)
        }
    });
    c.extend(c.ui.dialog.overlay, {
        instances: [],
        maxZ: 0,
        events: c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(d) {
            return d + ".dialog-overlay"
        }).join(" "),
        create: function(e) {
            if (this.instances.length === 0) {
                setTimeout(function() {
                    if (c.ui.dialog.overlay.instances.length) {
                        c(document).bind(c.ui.dialog.overlay.events, function(f) {
                            var g = c(f.target).parents(".ui-dialog").css("zIndex") || 0;
                            return (g > c.ui.dialog.overlay.maxZ)
                        })
                    }
                }, 1);
                c(document).bind("keydown.dialog-overlay", function(f) {
                    (e.options.closeOnEscape && f.keyCode && f.keyCode == c.ui.keyCode.ESCAPE && e.close(f))
                });
                c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize)
            }
            var d = c("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({
                width: this.width(),
                height: this.height()
            });
            (e.options.bgiframe && c.fn.bgiframe && d.bgiframe());
            this.instances.push(d);
            return d
        },
        destroy: function(d) {
            this.instances.splice(c.inArray(this.instances, d), 1);
            if (this.instances.length === 0) {
                c([document, window]).unbind(".dialog-overlay")
            }
            d.remove();
            var e = 0;
            c.each(this.instances, function() {
                e = Math.max(e, this.css("z-index"))
            });
            this.maxZ = e
        },
        height: function() {
            if (c.browser.msie && c.browser.version < 7) {
                var e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                var d = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                if (e < d) {
                    return c(window).height() + "px"
                } else {
                    return e + "px"
                }
            } else {
                return c(document).height() + "px"
            }
        },
        width: function() {
            if (c.browser.msie && c.browser.version < 7) {
                var d = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                var e = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (d < e) {
                    return c(window).width() + "px"
                } else {
                    return d + "px"
                }
            } else {
                return c(document).width() + "px"
            }
        },
        resize: function() {
            var d = c([]);
            c.each(c.ui.dialog.overlay.instances, function() {
                d = d.add(this)
            });
            d.css({
                width: 0,
                height: 0
            }).css({
                width: c.ui.dialog.overlay.width(),
                height: c.ui.dialog.overlay.height()
            })
        }
    });
    c.extend(c.ui.dialog.overlay.prototype, {
        destroy: function() {
            c.ui.dialog.overlay.destroy(this.$el)
        }
    })
})(jQuery);;

/* End */
;; /* Start:"a:4:{s:4:"full";s:100:"/local/templates/inner_efsol/components/rezonans/news.detail/page/user.form.modal.js?158769676511284";s:6:"source";s:84:"/local/templates/inner_efsol/components/rezonans/news.detail/page/user.form.modal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    if ($('form input[name=temp_code]').length > 0) {

        $('form input[name=temp_code]')
            .css({
                "width": "50px"
            })
            .next()
            .next()
            .css({
                "width": "248px"
            })

        $('input[name=web_form_submit]')
            .live('click', function() {

                var code;
                var phone;
                code = $(this).parents('form').find('input[name=temp_code]').attr("value");
                phone = $(this).parents('form').find('input[name=temp_code]').next().next().attr("value");
                if ((code.length > 0) && (phone.length > 0)) {
                    $(this).parents('form').find('input[name=temp_code]').next().next().attr({
                        "value": "(" + code + ")" + phone
                    });
                }
            });

    }

    /*Инициализируем всплывающее окно на родителе формы, которым является div с динамически генерируемым id.
     *При отправке формы в этот div помещается ответ от ajax-запроса отправленного формой(аяксовый компонент Битрикса сам генерирует id контейнера и
     *сам же помещает в него ответ отрезая весь лишний html), его контент (сама форма)
     *заменяется и соответственно мы не можем провести инициализацию на ней самой.
     *После инициализации div перемещается в DOM соответственно процессу инициализации, и выбрать его с помощью селектора
     *$("div.news-detail form") мы уже не сможем. Выборка будет производиться по аттрибуту "name" формы, который содержит
     *ее ID. После выборки фоормы и ее родителя мы можем вызвать метод dialog('open') для ее открытия.
     *После удачного заполнения формы сервер отдаеттолько текст сообщения и не отдает саму форму, поэтому при закрытии окна с сообщением,
     *мы должны на событии закрытия подгрузить в него форму снова, чтобы при повторном открытии окна дать возможность заполнить ее снова
     */
    $("div#content form:not('.form-demo-rdp')").parent().dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        title: "efsol.ru",
        close: function(event, ui) { //Обработчик события закрытия диалогового окна
            /**
             * Если мы успешно отправили форму и сервер вернул нам только текст, нам потребуется снова загрузить форму
             * в диалоговое окно после его закрытия. Код формы хранится в свойстве объекта formHTML, и записывается в него при первом открытии окна с ней
             * */
            if ($(this).children("form").length == 0)
                $(this).html($(this).dialog("option", "formHTML"));
            //jsAjaxUtil.InsertDataToNode('?AJAX_CALL=Y&bxajaxid=a7550ddeed74d9230042c25a29124531',$(this).attr('id'),false)

        },
        open: function(event, ui) { //Обработчик события открытия диалогового окна
            /**
             * Если мы закрываем окно впервые, сохраним в свойстве объекта код формы,
             * чтобы после успешной отправки снова загрузить форму в окно
             * */
            if (typeof($(this).dialog("option", "formHTML") == "undefined")) {
                var formHTML = $(this).html();

                $(this).dialog("option", "formHTML", formHTML);
            }
        }
    });

    arAjaxContainers = {};

    $("a.showform").click(function() {
        //ID ссылки, который определяет ее связь с формой.
        //formID = $(this).attr("id");
        //храним ID формы в аттрибуте href ссылки, чтобы иметь возможность удобно изменять его через виз.редактор
        formID = $(this).attr("href");

        //Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
        if (typeof(arAjaxContainers[formID]) !== "undefined") {
            $("div#" + arAjaxContainers[formID] + "").dialog("open");
            //Если же окно открывается впервые - получим id родителя формы
        } else {
            //id родителя
            $ajaxDiv = $("form[name=SIMPLE_FORM_" + formID + "]").parent();
            //$ajaxDiv.addClass("dialog-init-"+formID);
            //Сохраним id родителя в массиве в ключе равном id самой формы
            arAjaxContainers[formID] = $ajaxDiv.attr("id");
            //откроем popup окно, поместив в него родителя формы
            $("form[name=SIMPLE_FORM_" + formID + "]").parent().dialog("open");
            //Создадим у плагина свойство, хранящее id формы находящейся в нём
            $("form[name=SIMPLE_FORM_" + formID + "]").parent().dialog("option", "formID", formID);
        }
        return false;
    });
    $(".header-button li.menu").click(function() {
            //ID ссылки, который определяет ее связь с формой.
            formID = $(this).attr("id");

            //Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
            if (typeof(arAjaxContainers[formID]) !== "undefined") {
                $("div#" + arAjaxContainers[formID] + "").dialog("open");
                //Если же окно открывается впервые - получим id родителя формы
            } else {
                //id родителя
                $ajaxDiv = $("form[name=SIMPLE_FORM_" + formID + "]").parent();
                //$ajaxDiv.addClass("dialog-init-"+formID);
                //Сохраним id родителя в массиве в ключе равном id самой формы
                arAjaxContainers[formID] = $ajaxDiv.attr("id");
                //откроем popup окно, поместив в него родителя формы
                $("form[name=SIMPLE_FORM_" + formID + "]").parent().dialog("open");
                //Создадим у плагина свойство, хранящее id формы находящейся в нём
                $("form[name=SIMPLE_FORM_" + formID + "]").parent().dialog("option", "formID", formID);
            }
            return false;
        })
        .css({
            "cursor": "pointer"
        });
    /*
            $("a.demo").click(function(e){
                e.preventDefault();
    			//ID ссылки, который определяет ее связь с формой.
    			//formID = $(this).attr("id");
    			//храним ID формы в аттрибуте href ссылки, чтобы иметь возможность удобно изменять его через виз.редактор
    			formID = $(this).attr("href");
                product_name = $(this).attr("id");
                $("form[name=SIMPLE_FORM_"+formID+"]").append("<input type='hidden' name='product' value='" + product_name + "' />");
                $("form[name=SIMPLE_FORM_"+formID+"] .whereque-callback input[type=hidden]").attr({"value":product_name})
                //$("form[name=SIMPLE_FORM_"+formID+"] h3").html(product_name); // теперь выводится в шаблоне формы правильный заголовок, подмена не требуется
    			//Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
    			if(typeof(arAjaxContainers[formID])!=="undefined"){
    				$("div#"+arAjaxContainers[formID]+"").dialog("open");
    			//Если же окно открывается впервые - получим id родителя формы
    			}else{
    				//id родителя
    				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
    				//$ajaxDiv.addClass("dialog-init-"+formID);
    				//Сохраним id родителя в массиве в ключе равном id самой формы
    				arAjaxContainers[formID] = $ajaxDiv.attr("id");
    				//откроем popup окно, поместив в него родителя формы
    				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
    				//Создадим у плагина свойство, хранящее id формы находящейся в нём
    				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
    			}
    			return false;
    		});
    */
    $(".header-button li.menu").click(function() {
            //ID ссылки, который определяет ее связь с формой.
            formID = $(this).attr("id");

            //Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
            if (typeof(arAjaxContainers[formID]) !== "undefined") {
                $("div#" + arAjaxContainers[formID] + "").dialog("open");
                //Если же окно открывается впервые - получим id родителя формы
            } else {
                //id родителя
                $ajaxDiv = $("form[name=SIMPLE_FORM_" + formID + "]").parent();
                //$ajaxDiv.addClass("dialog-init-"+formID);
                //Сохраним id родителя в массиве в ключе равном id самой формы
                arAjaxContainers[formID] = $ajaxDiv.attr("id");
                //откроем popup окно, поместив в него родителя формы
                $("form[name=SIMPLE_FORM_" + formID + "]").parent().dialog("open");
                //Создадим у плагина свойство, хранящее id формы находящейся в нём
                $("form[name=SIMPLE_FORM_" + formID + "]").parent().dialog("option", "formID", formID);
            }
            return false;
        })
        .css({
            "cursor": "pointer"
        });
});

/* End */
;; /* Start:"a:4:{s:4:"full";s:90:"/local/templates/inner_efsol/components/rezonans/news.detail/page/spoiler.js?1583242745905";s:6:"source";s:76:"/local/templates/inner_efsol/components/rezonans/news.detail/page/spoiler.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function spoiler_toggle(spoiler) {

    var sp_head_img = spoiler.parentNode.getElementsByTagName('div')[0].getElementsByTagName('img')[0];
    var sp_body = spoiler.parentNode.getElementsByTagName('div')[1];

    if (sp_body.style.display == 'none') {
        sp_body.style.display = 'block';
        sp_head_img.src = '/images/icon_minus.jpg';
    } else {
        sp_body.style.display = 'none';
        sp_head_img.src = '/images/icon_plus.jpg';
    }
}

function spoiler_toggle2(spoiler) {
    var sp_head_img = spoiler.getElementsByTagName('img')[0];
    var sp_body = spoiler.getElementsByTagName('div')[0];

    if (sp_body.style.display == 'none') {
        sp_body.style.display = 'block';
        sp_head_img.src = '/images/icon_minus.jpg';
    } else {
        sp_body.style.display = 'none';
        sp_head_img.src = '/images/icon_plus.jpg';
    }
}
/* End */
;; /* /js/highslide/highslide.min.js?159479575137676*/ ; /* /js/highslide_init.js?1595317263651*/ ; /* /local/templates/inner_efsol/js/pekarnya_form.js?15876967652392*/ ; /* /local/templates/inner_efsol/js/devops_form.js?15876967652388*/ ; /* /local/templates/inner_efsol/js/hosting1s_form.js?15876967652395*/ ; /* /local/templates/inner_efsol/js/protectedemail_form.js?15876967652444*/ ; /* /local/templates/inner_efsol/js/erpimplementation_form.js?15876967652453*/ ; /* /local/templates/inner_efsol/js/holdingvnedrenie_form.js?15876967652450*/ ; /* /local/templates/inner_efsol/js/serviceit_form.js?15876967652296*/ ; /* /local/templates/inner_efsol/js/for_simple_form_sender.js?15876967654951*/ ; /* /local/templates/inner_efsol/components/rezonans/news.detail/page/jquery-ui-1.7.2.custom.min.js?158375740655211*/ ; /* /local/templates/inner_efsol/components/rezonans/news.detail/page/user.form.modal.js?158769676511284*/ ; /* /local/templates/inner_efsol/components/rezonans/news.detail/page/spoiler.js?1583242745905*/