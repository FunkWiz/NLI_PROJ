import './Tags.scss'
import Component from '../Abstracts/Component/Component'
import tags from '../../Api/tags.json'
import TagList from './Components/TagList/TagList.view'
import PosterList from './Components/PosterList/PosterList.view'
import decades from '../../Api/decades.json'
import categories from '../../Api/categories.json'

export default class Tags extends Component  {
	constructor(props) {
	    super();
	    const decade = decades.items.find(d => d.value == props.decade).title;
	    const category = categories.items.find(c => c.value == props.category).title;
	    $('.site-header-title').html(`${category} ${decade}`);
	    this.markup = 
            `
             <div class="tags">
                <div class="tags-heading">${new TagList({items: tags.items}).getHtml()}</div>
                <h2 class="tag-main-title-wrp">
                  <span class="tag-main-title"></span><br>
                  <span class="tag-main-title-count">8</span>
                </h2>
                <div class="tags-content-wrp">${new PosterList({items: [{},{},{},{},{},{},{},{},{}]}).getHtml()}</div>
             </div>
            `
	}
}
