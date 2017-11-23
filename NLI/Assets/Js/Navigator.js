import Useful from './useful'
import TimeLineMgr from '../../Components/Sections/TimeLine/TimeLineManager.js'

let _scrollElem;
let _scrolling = false;
export default class Navigator{
    static setScrollElem(scrollElem){
        _scrollElem = scrollElem;
    }
    static getScrollElem(){
        return _scrollElem;
    }
    static isScrolling(){
        return _scrolling;
    }
    static navigateTo(targetLvl, timeout){
        timeout = timeout ? timeout : 2100;
        const currLvl = _scrollElem.getAttribute('data-lvl');
        if(_scrolling || currLvl == targetLvl) return false;
        Useful.addClass(_scrollElem, 'scrolling');
        _scrolling = true;
        _scrollElem.setAttribute('data-lvl', targetLvl);
        const val = `translate3d(0, -${targetLvl * 100}vh, 0)`;
        _scrollElem.style.transform = val;
        _scrollElem.style.webkitTransform = val;
        _scrollElem.style.mozTransform = val;
        _scrollElem.style.oTransform = val;
        setTimeout(() => {Useful.removeClass(_scrollElem, 'scrolling'); _scrolling = false;}, timeout);

        _onNav(targetLvl);
    }
}

const _onNav = (targetLvl) => {
    if(targetLvl == 2){
        setTimeout(() => {
            TimeLineMgr.Init();
        }, 500);
    }

    Useful.StopVideos();

    if(targetLvl == 3){
        Useful.pushLayer({
            action:'Navigation',
            label: 'Reached Bottom Of Site'
        });
    }
}