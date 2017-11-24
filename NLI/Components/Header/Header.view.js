import Component from '../Abstracts/Component/Component'
import './Header.scss'
import NavList from './Components/NavList/NavList.view'
import UrlService from '../../Services/UrlService'

export default class Header extends Component  {
    constructor(){
        super();
        this.markup = 
            `<header class="site-header">
                <div class="site-header-content-wrp">
                    <h2 class="site-header-title"></h2>
                    <button class="site-header-arrow-back"></button>
                </div>
            </header>`
    }
}
