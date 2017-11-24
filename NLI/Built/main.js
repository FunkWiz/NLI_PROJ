/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Assets_Js_LoadActions__ = __webpack_require__(2);


class Component {
    getHtml() {
        return this.markup;
    }
    onLoad(callback) {
        if (typeof callback == 'function') __WEBPACK_IMPORTED_MODULE_0__Assets_Js_LoadActions__["a" /* default */].add(callback);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UrlService {
    static GetUrl(path) {
        return window.basePath + path;
    }
    static SetHash(name) {
        history.pushState(null, null, `#${name}`);
    }
    static RemoveHash() {
        history.pushState("", document.title, window.location.pathname);
        window.onhashchange();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UrlService;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let _loadActions = [];
class LoadActions {
    static get() {
        return _loadActions;
    }
    static add(action) {
        _loadActions.push(action);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadActions;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let _scrollActions = [];
class ScrollActions {
    static get() {
        return _scrollActions;
    }
    static add(action) {
        _scrollActions.push(action);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScrollActions;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Footer_scss__);


class Footer extends __WEBPACK_IMPORTED_MODULE_0__Abstracts_Component_Component__["a" /* default */] {
    constructor(props) {
        super();
        this.markup = `
            <footer class="site-footer">
            </footer>`;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_NavList_NavList_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_UrlService__ = __webpack_require__(1);





class Header extends __WEBPACK_IMPORTED_MODULE_0__Abstracts_Component_Component__["a" /* default */] {
    constructor() {
        super();
        this.markup = `<header class="site-header">
                <div class="site-header-content-wrp">
                    <h2 class="site-header-title">מוסיקה 50s</h2>
                    <button class="site-header-arrow-back"></button>
                </div>
            </header>`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;

function throttle(func, wait, options) {
    wait || (wait = 250);
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollTo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ScrollActions__ = __webpack_require__(3);


const _relativePath = (() => {
    return document.location.pathname.replace('/index.html', '');
})();

const isMobile = (() => {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
    );
})();

const $window = $(window);
//const vidPlayer = new VideoPlayer().init();
class Useful {
    static isPageBusy() {
        if (window.innerHeight < window.innerWidth && Useful.isMob() || window.innerWidth == screen.width && window.innerHeight == screen.height || Useful.hasClass(document.body, 'fullscreen') || Useful.hasClass(document.getElementsByClassName('sticky-menu')[0], 'active') && Useful.isMob()) return true;

        return false;
    }
    static getTranslate($obj) {
        var transformMatrix = $obj.css("-webkit-transform") || $obj.css("-moz-transform") || $obj.css("-ms-transform") || $obj.css("-o-transform") || $obj.css("transform");
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        return { x: matrix[12] || matrix[4], y: matrix[13] || matrix[5] };
    }
    static pushLayer(obj) {
        dataLayer.push({
            'event': 'GA_Event',
            'Category': 'icecream',
            'Action': obj.action,
            'Label': obj.label
        });
    }
    static isMob() {
        return isMobile;
    }
    static isEnglish(text) {
        return (/^[A-Za-z0-9\s']*$/.test(text)
        );
    }
    static filterData(data) {
        for (let key in data) {
            const item = data[key];
            if (!item || typeof item == 'string' && !item.length) delete data[key];
        }
        return data;
    }
    static getDocHeight() {
        const doc = document;
        return Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, doc.body.offsetHeight, doc.documentElement.offsetHeight, doc.body.clientHeight, doc.documentElement.clientHeight);
    }
    static scrollTo(y) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__scrollTo__["a" /* default */])(y, 2100);
    }
    static onScrollBottom(callback) {
        __WEBPACK_IMPORTED_MODULE_1__ScrollActions__["a" /* default */].add(() => {
            if (Useful.hasReachedBottom()) callback();
        });
    }
    static getRelativePath() {
        return _relativePath;
    }
    static stringContains(str1, str2) {
        return str1.indexOf(str2) > -1;
    }
    static getScrollTop() {
        return window.scrollY || document.documentElement.scrollTop;
    }
    static getElementInViewPort(elem, _sectionPadding = 0, reduceHeight = false) {
        let scrollTop = Useful.getScrollTop(),
            foundElem;
        Useful.forEach(elem, function (item) {
            let offsetTop = $(item).offset().top - _sectionPadding,
                height = reduceHeight ? item.clientHeight / 1.2 : item.clientHeight + _sectionPadding;
            if (scrollTop >= offsetTop && scrollTop <= offsetTop + height) {
                foundElem = item;
                return true;
            }
        });
        return foundElem;
    }
    static getByAttr(attr, val, parentElem) {
        let parent = parentElem || document;
        const elements = parent.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            let elem = elements[i];
            if (elem.hasAttribute(attr) && elem.getAttribute(attr) == val) return elem;
        }
    }

    static getByKey(key) {
        return Useful.getByAttr('data-key', key);
    }
    static randomStr(prefix, length) {
        prefix = prefix || "--";
        return prefix + (Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1, 10);
    }
    static findClosest(el, cls) {
        while ((el = el.parentElement) && !el.className.indexOf(cls) < -1);
        return el;
    }
    static isIOS() {
        return navigator.userAgent.match(/iPhone/i);
    }
    static showInterstitial() {
        var slot = {
            cont: 'div-gpt-ad-1345354525-0'
        };
        if (Useful.isIOS()) {
            slot.adUnit = "/6870/ynet_mobile/ynet_mobileweb_transitions/ynet_mobileweb_transitions_general/ynet_mobileweb_transitions_general_iphone_main_ip";
            slot.size = [1, 1];
        } else {
            slot.adUnit = "/6870/ynet_mobile/ynet_mobileweb_transitions/ynet_mobileweb_transitions_general/ynet_mobileweb_transitions_general_android_main_ip";
            slot.size = [1, 2];
        }
        googletag.cmd.push(function () {
            googletag.defineSlot(slot.adUnit, slot.size, slot.cont).addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
    }
    static makeGetCall(url, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200 && typeof callback == 'function') {
                callback();
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    }
    static isInViewPort(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
    }
    static toggleClass(elem, className) {
        var classes = elem.className.split(' ');
        var classIdx = classes.indexOf(className);
        var hasClass = classIdx > -1;
        hasClass ? delete classes[classIdx] : classes.push(className);
        elem.className = classes.join(' ').replace(/\s\s+/g, ' ');
        for (var i = 0; i < classes.length; i++) return hasClass;
    }
    static hasReachedBottom(padding) {
        return $window.scrollTop() + $window.height() >= Useful.getDocHeight() - (padding || 0);
    }
    static forEach(list, callback) {
        for (var i = 0; i < list.length; i++) if (callback(list[i])) break;
    }
    static addClass(target, className) {
        if (target.length) {
            for (var i = 0; i < target.length; i++) doAction(target[i]);

            return;
        }

        doAction(target);
        function doAction(elem) {
            var classes = elem.className.split(' ');
            var classIdx = classes.indexOf(className);
            classIdx > -1 ? classIdx : classes.push(className);
            elem.className = classes.join(' ').replace(/\s\s+/g, ' ');
        }
    }
    static hasClass(target, className) {
        return target.className.indexOf(className) > -1;
    }
    static removeClass(target, className) {
        if (target.length) {
            for (var i = 0; i < target.length; i++) doAction(target[i]);

            return;
        }
        doAction(target);
        function doAction(elem) {
            var classes = elem.className.split(' ');
            var classIdx = classes.indexOf(className);
            classIdx > -1 ? delete classes[classIdx] : classIdx;
            elem.className = classes.join(' ').replace(/\s\s+/g, ' ');
        }
    }
    static addEvent(elemList, eventType, callback) {
        for (var i = 0; i < elemList.length; i++) {
            elemList[i].addEventListener(eventType, callback);
        }
    }
}
/* unused harmony export default */


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainComponent_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainComponent_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MainComponent_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_Header_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_Footer_view__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pages_HomePage_HomePage_view__ = __webpack_require__(15);






class MainComponent extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
    constructor() {
        super();
        this.markup = `<main class="app-wrap">
                            ${_getPageHtml(window._pageData.id)}
                       </main>`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainComponent;


const _getPageHtml = function (pageId) {
    switch (pageId) {
        case 1:
            return new __WEBPACK_IMPORTED_MODULE_4__Pages_HomePage_HomePage_view__["a" /* default */]().getHtml();
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Assets_Css_fonts_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Assets_Css_fonts_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Assets_Css_fonts_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Assets_Css_reset_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Assets_Css_reset_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Assets_Css_reset_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__entry_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Assets_Js_useful__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Assets_Js_throttle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Assets_Js_LoadActions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Assets_Js_ScrollActions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_MainComponent_MainComponent_view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_UrlService__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_Header_Header_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_Footer_Footer_view__ = __webpack_require__(4);












document.getElementById('root').innerHTML = `
    ${new __WEBPACK_IMPORTED_MODULE_9__Components_Header_Header_view__["a" /* default */]().getHtml()}
    ${new __WEBPACK_IMPORTED_MODULE_7__Components_MainComponent_MainComponent_view__["a" /* default */]().getHtml()}
    ${new __WEBPACK_IMPORTED_MODULE_10__Components_Footer_Footer_view__["a" /* default */]({
    logo: {
        target: 'http://www.yit.co.il',
        src: __WEBPACK_IMPORTED_MODULE_8__Services_UrlService__["a" /* default */].GetUrl('content/images/logos/yit_w.png')
    }
}).getHtml()}
    `;

const _loadActions = __WEBPACK_IMPORTED_MODULE_5__Assets_Js_LoadActions__["a" /* default */].get();

for (var i = 0; i < _loadActions.length; i++) _loadActions[i]();

const _scrollActions = __WEBPACK_IMPORTED_MODULE_6__Assets_Js_ScrollActions__["a" /* default */].get();

$(window).on('scroll', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Assets_Js_throttle__["a" /* default */])(function () {
    for (var i = 0; i < _scrollActions.length; i++) _scrollActions[i]();
}, 200));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollToY;
// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY || document.documentElement.scrollTop,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var easingEquations = {
        easeOutSine: function (pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function (pos) {
            return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function (pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
    };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavList_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NavList_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_json__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_UrlService__ = __webpack_require__(1);





class NavList extends __WEBPACK_IMPORTED_MODULE_0__Abstracts_Component_Component__["a" /* default */] {
    constructor() {
        super();
        const _generateLinks = function (links) {
            return links.map(l => `<li class="site-navigation-external-item"><a  href="${l.href}" target="_blank">${l.title}</a></li>`).join('');
        };
        const siteItemsHtml = function () {
            let html = '';
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__pages_json___default.a.items.length; i++) {
                const pageItem = __WEBPACK_IMPORTED_MODULE_2__pages_json___default.a.items[i];
                const isCurrentPage = window._pageData.id == pageItem.id;
                const hasLinks = pageItem.links && pageItem.links.length;
                const linksHtml = hasLinks ? `<ul class="site-navigation-external-list">${_generateLinks(pageItem.links)}</ul>` : '';

                html += `<li class="site-navigation-item${hasLinks ? ' has-links' : ''} ${pageItem.classAlias}${isCurrentPage ? ' current' : ''}">
                              <a class="site-navigation-item-link" href="${__WEBPACK_IMPORTED_MODULE_3__Services_UrlService__["a" /* default */].GetUrl(pageItem.href)}">
                                 <span class="site-navigation-item-icon"></span>
                                 <span class="site-navigation-item-text">${pageItem.title}</span>
                              </a>
                                 ${linksHtml}
                          </li>`;
            }
            return html;
        }();

        this.markup = `<ul class="site-navigation-list">${siteItemsHtml}</ul>`;

        this.onLoad(function () {
            const $linkTabs = $('.site-navigation-item.has-links');
            $linkTabs.on('click', function (e) {
                if (!$(e.target).closest('.site-navigation-external-list').length) e.preventDefault();
            });
        });
    }

}
/* unused harmony export default */


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomePage_scss__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomePage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HomePage_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_ApiService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TimeLine_TimeLine_view__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Categories_Categories_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tags_Tags_view__ = __webpack_require__(46);







class HomePage extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor() {
		super();
		//ApiService.get({
		//    method: 'Search',
		//    params:{
		//        Query:'lsr41,exact,yes',
		//        Index: 1,
		//        BulkSize: 25
		//    },
		//}).then(console.log)
		this.markup = `
             <article class="site-page home-page">
                ${new __WEBPACK_IMPORTED_MODULE_5__Tags_Tags_view__["a" /* default */]().getHtml()}
             </article>
            `;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HomePage;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeLineItem_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeLineItem_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TimeLineItem_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);


class TimeLineItem extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor(props) {
		super();
		this.title = props.title;
		this.count = props.count;
		this.value = props.value;

		this.markup = `
             <div class="timeline-item" data-value="${this.value}">
                <h2 class="timeline-item-title">${this.title}</h2>
                <h4 class="timeline-item-count">${this.count}</h4>
             </div>
            `;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TimeLineItem;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeLineList_scss__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeLineList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TimeLineList_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TimeLineItem_TimeLineItem_view__ = __webpack_require__(16);




class TimeLineList extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor(props) {
		super();
		this.items = props.items;

		this.markup = `<ul class="timeline-list">${this.items.map(i => new __WEBPACK_IMPORTED_MODULE_2__TimeLineItem_TimeLineItem_view__["a" /* default */](i).getHtml()).join('')}</ul>`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TimeLineList;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeLine_scss__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeLine_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TimeLine_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_TimeLineList_TimeLineList_view__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Api_decades_json__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Api_decades_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Api_decades_json__);





class TimeLine extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor() {
		super();
		this.markup = `
             <div class="timeline">${new __WEBPACK_IMPORTED_MODULE_2__Components_TimeLineList_TimeLineList_view__["a" /* default */]({ items: __WEBPACK_IMPORTED_MODULE_3__Api_decades_json___default.a.items }).getHtml()}</div>
            `;
	}
}
/* unused harmony export default */


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_urls_json__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_urls_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Api_urls_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_UrlService__ = __webpack_require__(1);




const _toggleLoader = (loader, flag) => {
    if (loader && loader.length) loader.toggleClass('active', flag);
};
class ApiService {
    static get(data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__Services_UrlService__["a" /* default */].GetUrl(__WEBPACK_IMPORTED_MODULE_0__Api_urls_json___default.a[data.method].url);
        var params = data.params ? `?${__WEBPACK_IMPORTED_MODULE_1_query_string___default.a.stringify(data.params)}` : '';
        _toggleLoader(data.loaderElem, true);

        return fetch(`${url}${params}`).then(result => result.json()).then(result => {
            _toggleLoader(data.loaderElem, false);return result;
        });
    }
}
/* unused harmony export default */


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = { "items": [{ "title": "40s", "count": "2272", "value": "1940" }, { "title": "50s", "count": "1429", "value": "1950" }, { "title": "60s", "count": "1079", "value": "1960" }, { "title": "70s", "count": "1265", "value": "1970" }, { "title": "80s", "count": "989", "value": "1980" }, { "title": "90s", "count": "453", "value": "1990" }, { "title": "2000s", "count": "133", "value": "2000" }] };

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = { "Search": { "url": "action/search", "method": "get" }, "Browse": { "url": "action/browse", "method": "get" }, "RecentPapers": { "url": "action/toprecent", "method": "get" }, "Chart": { "url": "action/chart", "method": "get" }, "GetImage": { "url": "action/image", "method": "get" } };

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = { "items": [{ "id": 1, "title": "דף הבית", "href": "home/index", "classAlias": "home" }, { "id": 2, "title": "חיפוש מתקדם", "href": "home/search", "classAlias": "search" }, { "id": 3, "title": "דפדוף", "href": "home/archive", "classAlias": "archive" }, { "id": 4, "title": "הכתבות שלי", "href": "home/articles", "classAlias": "articles" }, { "id": 5, "title": "כלי עזר", "href": "#", "classAlias": "tools", "links": [{ "title": "תמונות דיגיטליות", "href": "http://yedfotoweb7/fotoweb/loginhidden.fwx" }, { "title": "מילון רב-מילים", "href": "http://www.ravmilim.co.il/" }] }] };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strictUriEncode = __webpack_require__(25);
var objectAssign = __webpack_require__(23);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({ arrayFormat: 'none' }, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Categories_scss__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Categories_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Categories_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_CategoryList_CategoryList_view__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Api_categories_json__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Api_categories_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Api_categories_json__);





class Categories extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
    constructor() {
        super();
        this.markup = `
             <div class="categories">
                <div class="categories-heading">
                    <div class="categories-decade-info-wrp">
                        <div class="categories-decade-info">
                            <h4 class="categories-decade-title">40s</h4>
                            <h4 class="categories-decade-count">433</h4>
                        </div>
                        <ul class="categories-decade-line-list">
                            <li class="categories-decade-line-item" data-decade="1960"></li>
                        </ul>
                    </div>
                    <div class="categories-content-wrp">${new __WEBPACK_IMPORTED_MODULE_2__Components_CategoryList_CategoryList_view__["a" /* default */]({ items: __WEBPACK_IMPORTED_MODULE_3__Api_categories_json___default.a.items }).getHtml()}</div>
                </div>
             </div>
            `;
    }
}
/* unused harmony export default */


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryItem_scss__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryItem_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CategoryItem_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);



class CategoryItem extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
  constructor(props) {
    super();
    this.title = props.title;
    this.value = props.value;
    this.markup = `
             <li class="category-item" data-category="${this.value}">
                <div class="category-item-content-wrp">
                    <label class="category-item-title">${this.title}</label>
                </div>
             </li>
            `;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryItem;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryList_scss__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CategoryList_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CategoryItem_CategoryItem_view__ = __webpack_require__(36);




class CategoryList extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor(props) {
		super();
		this.items = props.items;
		this.markup = `<ul class="category-list">${this.items.map(i => new __WEBPACK_IMPORTED_MODULE_2__CategoryItem_CategoryItem_view__["a" /* default */](i).getHtml()).join('')}</ul>`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryList;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = { "items": [{ "title": "מוסיקה", "value": "music", "analytics": { "1940": { "count": 16 }, "1950": { "count": 3 }, "1960": { "count": 1 }, "1970": { "count": 2 }, "1980": { "count": 0 }, "1990": { "count": 0 }, "2000": { "count": 0 } } }, { "title": "פוליטיקה", "value": "politics", "analytics": { "1940": { "count": 16 }, "1950": { "count": 3 }, "1960": { "count": 1 }, "1970": { "count": 2 }, "1980": { "count": 0 }, "1990": { "count": 0 }, "2000": { "count": 0 } } }, { "title": "תרבות", "value": "culture", "analytics": { "1940": { "count": 16 }, "1950": { "count": 3 }, "1960": { "count": 1 }, "1970": { "count": 2 }, "1980": { "count": 0 }, "1990": { "count": 0 }, "2000": { "count": 0 } } }, { "title": "ספורט", "value": "sport", "analytics": { "1940": { "count": 16 }, "1950": { "count": 3 }, "1960": { "count": 1 }, "1970": { "count": 2 }, "1980": { "count": 0 }, "1990": { "count": 0 }, "2000": { "count": 0 } } }] };

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PosterItem_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PosterItem_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PosterItem_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);



class PosterItem extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
  constructor(props) {
    super();
    this.value = props.value;
    this.markup = `
             <li class="poster-item" data-tag="${this.value}">
             </li>
            `;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PosterItem;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PosterList_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PosterList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PosterList_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PosterItem_PosterItem_view__ = __webpack_require__(42);




class PosterList extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor(props) {
		super();
		this.items = props.items;
		this.markup = `<ul class="poster-list">${this.items.map(i => new __WEBPACK_IMPORTED_MODULE_2__PosterItem_PosterItem_view__["a" /* default */](i).getHtml()).join('')}</ul>`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PosterList;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagItem_scss__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagItem_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TagItem_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);



class TagItem extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
    constructor(props) {
        super();
        this.title = props.title;
        this.value = props.value;
        this.markup = `
             <li class="tag-item" data-tag="${this.value}">
                <div class="tag-item-image"></div>
                <div class="tag-item-content-wrp">
                    <label class="tag-item-title">${this.title}</label>
                </div>
             </li>
            `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TagItem;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagList_scss__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TagList_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TagItem_TagItem_view__ = __webpack_require__(44);




class TagList extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
	constructor(props) {
		super();
		this.items = props.items;
		this.markup = `<ul class="tag-list">${this.items.map(i => new __WEBPACK_IMPORTED_MODULE_2__TagItem_TagItem_view__["a" /* default */](i).getHtml()).join('')}</ul>`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TagList;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tags_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tags_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Tags_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Api_tags_json__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Api_tags_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Api_tags_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_TagList_TagList_view__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_PosterList_PosterList_view__ = __webpack_require__(43);






class Tags extends __WEBPACK_IMPORTED_MODULE_1__Abstracts_Component_Component__["a" /* default */] {
  constructor() {
    super();
    this.markup = `
             <div class="tags">
                <div class="tags-heading">${new __WEBPACK_IMPORTED_MODULE_3__Components_TagList_TagList_view__["a" /* default */]({ items: __WEBPACK_IMPORTED_MODULE_2__Api_tags_json___default.a.items }).getHtml()}</div>
                
                <h2 class="tag-main-title-wrp">
                  <span class="tag-main-title">#ג'אז</span><br>
                  <span class="tag-main-title-count">353</span>
                </h2>
                <div class="tags-content-wrp">${new __WEBPACK_IMPORTED_MODULE_4__Components_PosterList_PosterList_view__["a" /* default */]({ items: [{}, {}, {}, {}, {}, {}, {}, {}, {}] }).getHtml()}</div>
             </div>
            `;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tags;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = { "items": [{ "title": "ג'אז", "value": "ג'אז" }, { "title": "בלוז", "value": "בלוז" }, { "title": "מחול", "value": "מחול" }, { "title": "קלאסי", "value": "קלאסי" }, { "title": "ג'אז", "value": "ג'אז" }, { "title": "בלוז", "value": "בלוז" }, { "title": "מחול", "value": "מחול" }, { "title": "קלאסי", "value": "קלאסי" }] };

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);