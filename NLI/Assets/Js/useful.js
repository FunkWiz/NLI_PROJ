import scrollToY from './scrollTo'
import ScrollActions from './ScrollActions'
const _relativePath = (() => {
    return document.location.pathname.replace('/index.html', '');
})()

const isMobile = (() => {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
})()

const $window = $(window);
//const vidPlayer = new VideoPlayer().init();
export default class Useful{
    static isPageBusy(){
        if(((window.innerHeight < window.innerWidth) && Useful.isMob()) || 
           (window.innerWidth == screen.width && window.innerHeight == screen.height) ||
           (Useful.hasClass(document.body, 'fullscreen')) ||
           (Useful.hasClass(document.getElementsByClassName('sticky-menu')[0], 'active') && Useful.isMob()))
            return true;

        return false;
    }
    static getTranslate($obj){
        var transformMatrix = $obj.css("-webkit-transform") ||
                              $obj.css("-moz-transform")    ||
                              $obj.css("-ms-transform")     ||
                              $obj.css("-o-transform")      ||
                              $obj.css("transform");
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        return {x: (matrix[12] || matrix[4]), y: (matrix[13] || matrix[5])};
    }
    static pushLayer(obj){
        dataLayer.push({
            'event': 'GA_Event',
            'Category': 'icecream',
            'Action': obj.action,
            'Label': obj.label
        });
    }
    static isMob(){
        return isMobile;
    }
    static isEnglish(text){
        return /^[A-Za-z0-9\s']*$/.test(text);
    }
    static filterData(data){
        for (let key in data) {
            const item = data[key];
            if(!item || (typeof item == 'string' && !item.length)) delete data[key];
        }
        return data;
    }
    static getDocHeight(){
        const doc = document;
        return Math.max(
            doc.body.scrollHeight, doc.documentElement.scrollHeight,
            doc.body.offsetHeight, doc.documentElement.offsetHeight,
            doc.body.clientHeight, doc.documentElement.clientHeight
        );
    }
    static scrollTo(y){
        scrollToY(y, 2100);
    }
    static onScrollBottom(callback){
        ScrollActions.add(() => {
            if(Useful.hasReachedBottom()) callback();
        });
    }
    static getRelativePath(){
        return _relativePath;
    }
    static stringContains(str1, str2){
        return str1.indexOf(str2) > -1;
    }
    static getScrollTop(){
        return window.scrollY || document.documentElement.scrollTop;
    }
    static getElementInViewPort(elem, _sectionPadding = 0, reduceHeight = false){
        let scrollTop = Useful.getScrollTop(), foundElem;
        Useful.forEach(elem, function(item) {
            let offsetTop = $(item).offset().top - _sectionPadding,
                height = reduceHeight ? (item.clientHeight / 1.2) : (item.clientHeight + _sectionPadding);
            if(scrollTop >= offsetTop && scrollTop <= (offsetTop + height)){
                foundElem = item;
                return true;
            }
        });
        return foundElem;
    }
    static getByAttr(attr, val, parentElem){
        let parent = parentElem || document;
        const elements = parent.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            let elem = elements[i];
            if(elem.hasAttribute(attr) && elem.getAttribute(attr) == val) return elem;
        }
    }

    static getByKey(key){
        return Useful.getByAttr('data-key', key);
    }
    static randomStr(prefix, length){
        prefix = prefix || "--";
        return prefix + (Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))
                                                            .toString(36).slice(1, 10);
    }
    static findClosest(el, cls){
        while((el = el.parentElement) && (!el.className.indexOf(cls) < -1));
        return el;
    }
    static isIOS(){
        return navigator.userAgent.match(/iPhone/i);
    }
    static showInterstitial() {
        var slot = {
            cont: 'div-gpt-ad-1345354525-0'
        }
        if(Useful.isIOS()){
            slot.adUnit = "/6870/ynet_mobile/ynet_mobileweb_transitions/ynet_mobileweb_transitions_general/ynet_mobileweb_transitions_general_iphone_main_ip";
            slot.size = [1, 1];
        }
        else {
            slot.adUnit = "/6870/ynet_mobile/ynet_mobileweb_transitions/ynet_mobileweb_transitions_general/ynet_mobileweb_transitions_general_android_main_ip";
            slot.size = [1, 2];
        }
        googletag.cmd.push(function () {
            googletag.defineSlot(slot.adUnit, slot.size, slot.cont).addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
    }
    static makeGetCall(url, callback){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200 && typeof callback == 'function') {
                callback();
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    }
    static isInViewPort(el){
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
    }
    static toggleClass(elem, className){
        var classes = elem.className.split(' ');
        var classIdx = classes.indexOf(className);
        var hasClass = classIdx > - 1;
        hasClass  ? delete classes[classIdx] : classes.push(className);
        elem.className  = classes.join(' ').replace(/\s\s+/g, ' ');
        for (var i = 0; i < classes.length; i++)
            return hasClass;
    }
    static hasReachedBottom(padding) {
        return ($window.scrollTop() + $window.height()) >= Useful.getDocHeight() - (padding || 0);
    }
    static forEach(list, callback){
        for (var i = 0; i < list.length; i++)
            if(callback(list[i])) break;
    }
    static addClass(target, className){
        if(target.length){
            for (var i = 0; i < target.length; i++)
                doAction(target[i]);

            return;
        }
           
        doAction(target);
        function doAction(elem){
            var classes = elem.className.split(' ');
            var classIdx = classes.indexOf(className);
            classIdx > - 1  ? (classIdx) : classes.push(className);
            elem.className  = classes.join(' ').replace(/\s\s+/g, ' ');
        }
    }
    static hasClass(target, className){
        return target.className.indexOf(className) > - 1;
    }
    static removeClass(target, className){
        if(target.length){
            for (var i = 0; i < target.length; i++)
                doAction(target[i]);

            return;
        }
        doAction(target);
        function doAction(elem){
            var classes = elem.className.split(' ');
            var classIdx = classes.indexOf(className);
            classIdx > - 1  ? delete classes[classIdx] : (classIdx);
            elem.className  = classes.join(' ').replace(/\s\s+/g, ' ');
        }
    }
    static addEvent(elemList, eventType, callback){
        for (var i = 0; i < elemList.length; i++) {
            elemList[i].addEventListener(eventType, callback)
        }
    }
}