import '../Assets/Css/fonts.scss'
import '../Assets/Css/reset.scss'
import './entry.scss'
import Useful from '../Assets/Js/useful'
import throttle from '../Assets/Js/throttle'
import LoadActions from '../Assets/Js/LoadActions'
import ScrollActions from '../Assets/Js/ScrollActions'
import MainComponent from '../Components/MainComponent/MainComponent.view'
import UrlService from '../Services/UrlService'
import Header from '../Components/Header/Header.view'
import Footer from '../Components/Footer/Footer.view'

document.getElementById('root').innerHTML = `
    ${new Header().getHtml()}
    ${new MainComponent().getHtml()}
    ${new Footer({
        logo:{
            target: 'http://www.yit.co.il',
            src: UrlService.GetUrl('content/images/logos/yit_w.png')
        }
    }).getHtml()}
    `; 

const _loadActions = LoadActions.get();

for (var i = 0; i < _loadActions.length; i++)
    _loadActions[i]();


const _scrollActions = ScrollActions.get();

$(window).on('scroll', throttle(function(){
    for (var i = 0; i < _scrollActions.length; i++)
        _scrollActions[i]();
}, 200));