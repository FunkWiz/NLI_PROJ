import Component from '../../../Abstracts/Component/Component'
import './NavList.scss'
import pages from './pages.json'
import UrlService from '../../../../Services/UrlService'

export default class NavList extends Component  {
    constructor(){
        super();
        const _generateLinks = function(links){
            return links.map(l => `<li class="site-navigation-external-item"><a  href="${l.href}" target="_blank">${l.title}</a></li>`).join('');
        }
        const siteItemsHtml = (function(){
            let html = '';
            for (var i = 0; i < pages.items.length; i++) {
                const pageItem = pages.items[i];
                const isCurrentPage = window._pageData.id == pageItem.id;
                const hasLinks = pageItem.links && pageItem.links.length;
                const linksHtml = hasLinks ? `<ul class="site-navigation-external-list">${_generateLinks(pageItem.links)}</ul>` : '';

                html +=  `<li class="site-navigation-item${hasLinks ? ' has-links' : ''} ${pageItem.classAlias}${isCurrentPage ? ' current' : ''}">
                              <a class="site-navigation-item-link" href="${UrlService.GetUrl(pageItem.href)}">
                                 <span class="site-navigation-item-icon"></span>
                                 <span class="site-navigation-item-text">${pageItem.title}</span>
                              </a>
                                 ${linksHtml}
                          </li>`;
            }
            return html;
        })();

        this.markup = `<ul class="site-navigation-list">${siteItemsHtml}</ul>`;


        this.onLoad(function() {
            const $linkTabs = $('.site-navigation-item.has-links');
            $linkTabs.on('click', function(e) {
                if(!$(e.target).closest('.site-navigation-external-list').length) e.preventDefault();
            });
        });
    }

}
