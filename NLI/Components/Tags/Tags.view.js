import './Tags.scss'
import Component from '../Abstracts/Component/Component'
import tags from '../../Api/tags.json'
import TagList from './Components/TagList/TagList.view'
import PosterList from './Components/PosterList/PosterList.view'

export default class Tags extends Component  {
	constructor() {
		super();
		this.markup = 
            `
             <div class="tags">
                <div class="tags-heading">${new TagList({items: tags.items}).getHtml()}</div>
                
                <h2 class="tag-main-title-wrp">
                  <span class="tag-main-title">#ג'אז</span><br>
                  <span class="tag-main-title-count">353</span>
                </h2>
                <div class="tags-content-wrp">${new PosterList({items: [{},{},{},{},{},{},{},{},{}]}).getHtml()}</div>
             </div>
            `
	}
}
