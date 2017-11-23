import './Categories.scss'
import Component from '../Abstracts/Component/Component'
import CategoryList from './Components/CategoryList/CategoryList.view'
import categories from '../../Api/categories.json';

export default class Categories extends Component  {
	constructor() {
		super();
		this.markup = 
            `
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
                    <div class="categories-content-wrp">${new CategoryList({items: categories.items}).getHtml()}</div>
                </div>
             </div>
            `
	}
}
